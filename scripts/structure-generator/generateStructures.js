import { parseStringPromise } from "xml2js";
import fs from "fs/promises";

// Dirname
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

const xmlToJson = {
  'Integer': {
    tsType: 'number',
    mapper: (xmlName) => `parseInt(data.${xmlName}, 10)`
  },
  'String': {
    tsType: 'string',
    mapper: (xmlName) => `data.${xmlName}`
  },
  'Unknown': {
    tsType: 'unknown',
    mapper: (xmlName) => `data.${xmlName}`
  },
  'DateTimeSeconds': {
    tsType: 'Date',
    mapper: (xmlName) => `new Date(data.${xmlName})`
  },
  'DateTime': {
    tsType: 'Date',
    mapper: (xmlName) => `new Date(data.${xmlName})`
  },
  'Boolean': {
    tsType: 'boolean',
    mapper: (xmlName) => `data.${xmlName} === 'true'`
  },
  'Binary': {
    tsType: 'any',
    mapper: (xmlName) => `data.${xmlName}`
  },
  'LongString': {
    tsType: 'string',
    mapper: (xmlName) => `data.${xmlName}`
  },
  'Money': {
    tsType: 'string',
    mapper: (xmlName) => `data.${xmlName}`
  },
  'Byte': {
    tsType: 'number',
    mapper: (xmlName) => `parseInt(data.${xmlName}, 10)`
  },
  'Short': {
    tsType: 'number',
    mapper: (xmlName) => `parseInt(data.${xmlName}, 10)`
  },
  'Date': {
    tsType: 'Date',
    mapper: (xmlName) => `new Date(data.${xmlName})`
  },
  'MinutesSinceMidnight': {
    tsType: 'number',
    mapper: (xmlName) => `parseInt(data.${xmlName}, 10)`
  },
  'Timestamp': {
    tsType: 'Date',
    mapper: (xmlName) => `new Date(data.${xmlName})`
  },
  'BigDecimal': {
    tsType: 'number',
    mapper: (xmlName) => `parseFloat(data.${xmlName})`
  },
  'Guid': {
    tsType: 'string',
    mapper: (xmlName) => `data.${xmlName}`
  },
  'Decimal': {
    tsType: 'number',
    mapper: (xmlName) => `parseFloat(data.${xmlName})`
  },
  'Duration': {
    tsType: 'number',
    mapper: (xmlName) => `parseFloat(data.${xmlName})`
  }
};


const fetchOpts = {
  headers: {
    Authorization: "Basic " + btoa("jtho264:Eduroam 5uck5"),
  },
};

const tableList = await fetch(
  "https://starport.uky.edu/StarRezREST/services/databaseinfo/tablelist",
  fetchOpts
);

const tableListXml = await tableList.text();

const tableListJson = await parseStringPromise(tableListXml);

const tableNames = Object.keys(
  tableListJson.feed.entry[0].content[0].Tables[0]
);

// Read list of files in ./data
const existingFiles = await fs.readdir(join(__dirname, "data"));

// Filter out files that already exist
const unknownTables = tableNames.filter(
  (tableName) => !existingFiles.includes(`${tableName}.json`)
);

// Cache the XML descriptions
if (unknownTables.length === 0) {
  console.log("No new tables to fetch");
} else {
  console.log(`Fetching ${unknownTables.length} new tables`);

  let tableData;
  try {
    tableData = await Promise.all(
      unknownTables.map(async (tableName) => {
        console.log(`Fetching ${tableName}`);
        const tableData = await fetch(
          `https://starport.uky.edu/StarRezREST/services/databaseinfo/columnlist/${tableName}`,
          fetchOpts
        );
        const tableDataXml = await tableData.text();
        const tableDataJson = await parseStringPromise(tableDataXml);
        return [tableName, tableDataJson];
      })
    );
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  console.log("Saving data");

  // Save all to json files in ./data
  try {
    await fs.mkdir(join(__dirname, "data"), { recursive: true });
    await Promise.all(
      tableData.map(async ([tableName, tableDataJson]) => {
        await fs.writeFile(
          join(__dirname, "data", `${tableName}.json`),
          JSON.stringify(tableDataJson, null, 2)
        );
      })
    );
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

// Read in the data

/** @type {Record<string, Record<string, {type: string, allowNull: boolean, size: number, friendlyName: string, required: boolean}>>} */
const tableInfo = Object.fromEntries(await Promise.all(
  tableNames.map(async (tableName) => {
    const tableData = await fs.readFile(
      join(__dirname, "data", `${tableName}.json`)
    );
    const content = Object.entries(JSON.parse(tableData).feed.entry[0].content[0]);
    if (content[0][0] !== "$") throw new Error("Invalid table data");
    if (content[1][0] !== tableName) throw new Error("Invalid table data");
    if (content.length !== 2) throw new Error("Invalid table data");
    const tableDescription = content[1][1][0];

    for (const key in tableDescription) {
      tableDescription[key] = {
        type: tableDescription[key][0]["$"].type,
        allowNull: tableDescription[key][0]["$"].allowNull === "true",
        size: parseInt(tableDescription[key][0]["$"].size),
        friendlyName: tableDescription[key][0]["$"].friendlyName,
        required: tableDescription[key][0]["$"].required === "true",
      };
      if (key.endsWith("Enum")) {
        tableDescription[key].type = "Unknown";
      }
    }

    return [tableName, tableDescription]
  })
))

/**
 * @typedef {Object} FieldInfo
 * @property {'number' | 'string' | 'unknown' | 'Date' | 'boolean' | 'any'} type
 * @property {string} xmlType
 * @property {boolean} allowNull
 * @property {string} camelCaseName
 * @property {string} friendlyName
 */

/** @type {Record<string, Record<string, FieldInfo>>} */
const parsedTableInfo = {};

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

for (const tableName in tableInfo) {
  const tableDescription = tableInfo[tableName];
  /** @type {Record<string, FieldInfo>} */
  const parsedTableDescription = {};
  for (const fieldName in tableDescription) {
    const fieldDescription = tableDescription[fieldName];
    parsedTableDescription[fieldName] = {
      type: xmlToJson[fieldDescription.type].tsType,
      xmlType: fieldDescription.type,
      allowNull: fieldDescription.allowNull,
      camelCaseName: camelize(fieldName),
      friendlyName: fieldDescription.friendlyName,
    };
  }
  parsedTableInfo[tableName] = parsedTableDescription;
}

const fieldDeclarations = Object.fromEntries(Object.entries(parsedTableInfo).map(
  ([tableName, tableDescription]) => {
    return [tableName, Object.entries(tableDescription).map(
      ([, fieldDescription]) => {
        return `  ${fieldDescription.camelCaseName}?: ${fieldDescription.type}${fieldDescription.allowNull ? " | null" : ""
          };`;
      }
    )];
  }
));

// Create the class files
const classTexts = [];

for (const tableName in parsedTableInfo) {
  let classText = `// Generated from XML description of ${tableName}

import { starRezXmlToJson } from "../parsing.js";

export class ${tableName} {
${fieldDeclarations[tableName].join("\n")}

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "${tableName}");

    if (!data) {
      throw new Error('Invalid XML');
    }

${Object.entries(parsedTableInfo[tableName]).map(([fieldName, fieldDescription]) => {
    return `    if (data.${fieldName} != null) this.${fieldDescription.camelCaseName} = ${xmlToJson[fieldDescription.xmlType].mapper(fieldName)};`
  }).join("\n")}

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
`;
  classTexts.push(classText);
}

// Write the class files to folder
const pathSegments = [
  "..",
  "..",
  "src",
  "lib",
  "starrez-rest",
  "structures",
]
await fs.mkdir(join(__dirname, ...pathSegments), { recursive: true });
await Promise.all(
  classTexts.map(async (classText, i) => {
    await fs.writeFile(
      join(__dirname, ...pathSegments, `${Object.keys(parsedTableInfo)[i]}.ts`),
      classText
    );
  })
);
