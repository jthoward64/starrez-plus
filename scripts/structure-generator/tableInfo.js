import { parseStringPromise } from "xml2js";
import fs, { readFile } from "fs/promises";

// Dirname
import { dirname, join } from "path";
import { fileURLToPath } from "url";
export const __dirname = dirname(fileURLToPath(import.meta.url));

const fetchOpts = {
  headers: {
    Authorization: "Bearer " + await readFile(join(__dirname, "..","..", "secret.txt")),
  },
};

export async function fetchTableInfo() {
  const tableNames = await fetchTableNames();

  // Read list of files in ./data
  const existingFiles = await fs.readdir(join(__dirname, "data"));
  // Filter out files that already exist
  const unknownTables = tableNames.filter(
    (tableName) => !existingFiles.includes(`${tableName}.json`)
  );

  // Cache the XML descriptions
  await updateXmlDescriptions(unknownTables);

  // Read in the data
  /** @type {Record<string, Record<string, {type: string, allowNull: boolean, size: number, friendlyName: string, required: boolean}>>} */
  const tableInfo = Object.fromEntries(await Promise.all(
    tableNames.map(readTableInfo)
  ));
  return tableInfo;
}

async function updateXmlDescriptions(unknownTables) {
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
}

async function fetchTableNames() {
  const tableList = await fetch(
    "https://starport.uky.edu/StarRezREST/services/databaseinfo/tablelist",
    fetchOpts
  );
  const tableListXml = await tableList.text();
  const tableListJson = await parseStringPromise(tableListXml);
  const tableNames = Object.keys(
    tableListJson.feed.entry[0].content[0].Tables[0]
  );
  return tableNames;
}

async function readTableInfo(tableName) {
  const tableData = await fs.readFile(
    join(__dirname, "data", `${tableName}.json`)
  );
  const content = Object.entries(JSON.parse(tableData).feed.entry[0].content[0]);
  if (content[0][0] !== "$")
    throw new Error("Invalid table data");
  if (content[1][0] !== tableName)
    throw new Error("Invalid table data");
  if (content.length !== 2)
    throw new Error("Invalid table data");
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

  return [tableName, tableDescription];
}