import { xmlToJson } from "./xmlToJsonMapping.js";

export function generateClassText(tableName, parsedTableInfo) {
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

  return `// Generated from XML description of ${tableName}

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ${tableName} {
${fieldDeclarations[tableName].join("\n")}

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "${tableName}");

    if (!data) {
      throw new Error('Invalid XML');
    }

${Object.entries(parsedTableInfo[tableName]).map(([fieldName, fieldDescription]) => {
    return `    if (data.${fieldName} != null) this.${fieldDescription.camelCaseName} = ${xmlToJson[fieldDescription.xmlType].mapper(fieldName)};`;
  }).join("\n")}

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  ${generateIdFetchText(tableName)}
}

${tableName} satisfies StarRezStructureStatic<${tableName}>
`;
}

function generateIdFetchText(tableName) {
  return `/**
   * Fetches a ${tableName} by its ID or by exact match on other fields.
   * @param param Either the ID of the ${tableName} to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ${tableName} object or null (if id) or an array of ${tableName} objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<${tableName} | null>;
  static async select(param: Partial<Record<keyof ${tableName}, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<${tableName}[]>;
  static async select(param: number | Partial<Record<keyof ${tableName}, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<${tableName} | ${tableName}[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = \`\${fetchUrl.pathname}/services/select/${tableName}/\${param}\`;
    } else {
      fetchUrl.pathname = \`\${fetchUrl.pathname}/services/select/${tableName}\`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(\`Failed to fetch ${tableName} with param \${JSON.stringify(param)}\`);
    } else {
      if (typeof param === 'number') {
        return new ${tableName}(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ${tableName}(entry));
      }
    }
  }`
}
