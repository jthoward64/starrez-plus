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
  return `static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<${tableName} | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = \`\${fetchUrl.pathname}/services/select/${tableName}/\${id}\`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(\`Failed to fetch ${tableName} with id \${id}\`);
    } else {
      return new ${tableName}(await response.text());
    }
  }`
}
