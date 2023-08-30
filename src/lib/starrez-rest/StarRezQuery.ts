import { StarRezRestConfig } from "./StarRezRestConfig";
import { StarRezStructureStatic } from "./StructureStatic";
import type { BaseBuilder } from "squel"

export async function doStarRezQuery<Structure>(query: string | BaseBuilder, config: StarRezRestConfig, structure: StarRezStructureStatic<Structure>): Promise<Structure[]>;
export async function doStarRezQuery(query: string | BaseBuilder, config: StarRezRestConfig): Promise<string>;
export async function doStarRezQuery<Structure>(query: string | BaseBuilder, config: StarRezRestConfig, structureConstructor?: StarRezStructureStatic<Structure>): Promise<string | Structure[]> {
  const fetchUrl = new URL(config.baseUrl.toString());
  fetchUrl.pathname = `${fetchUrl.pathname}/services/query`;

  const queryString = typeof query === 'string' ? query : query.toString();

  const response = await fetch(fetchUrl.toString(), {
    headers: {
      ...config.fetchHeaders,
    },
    method: 'POST',
    body: queryString,
  });

  if (!response.ok) {
    throw new Error(`Failed to make StarRez query`);
  } else {
    if (structureConstructor) {
      const parser = new DOMParser();
      const xml = parser.parseFromString(await response.text(), 'text/xml');
      const results = xml.getRootNode().childNodes;
      const structures: Structure[] = [];
      for (let i = 0; i < results.length; i++) {
        const result = results[i];
        if (result.nodeType === Node.ELEMENT_NODE) {
          structures.push(new structureConstructor(result));
        }
      }
      return structures;
    } else {
      return await response.text();
    }
  }
}
