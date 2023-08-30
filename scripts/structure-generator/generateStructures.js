import fs from "fs/promises";

// Dirname
import { dirname, join } from "path";
import { fileURLToPath } from "url";
export const __dirname = dirname(fileURLToPath(import.meta.url));

import { xmlToJson } from "./xmlToJsonMapping.js";
import { fetchTableInfo } from "./tableInfo.js";
import { generateClassText } from "./textGeneration.js";


process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

/**
 * @typedef {Object} FieldInfo
 * @property {'number' | 'string' | 'unknown' | 'Date' | 'boolean' | 'any'} type
 * @property {string} xmlType
 * @property {boolean} allowNull
 * @property {string} camelCaseName
 * @property {string} friendlyName
 */

const tableInfo = await fetchTableInfo();

/** @type {Record<string, Record<string, FieldInfo>>} */
const parsedTableInfo = {};
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

// Create the class files
const classTexts = [];

for (const tableName in parsedTableInfo) {
  classTexts.push(generateClassText(tableName, parsedTableInfo));
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

