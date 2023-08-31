import { StarRezRestConfig } from "./StarRezRestConfig";
import { StarRezStructureStatic } from "./StructureStatic";
import type { BaseBuilder } from "squel"

/**
 * This function works similarly to fetch, but it will automatically add the Authorization header if the config has a base64Credentials set
 * and will automatically set the credentials to include if the config has useBrowserAuth set to true. Additionally, if the 'request' is a
 * relative path, it will be appended to the config's baseUrl, rather than the current page's URL.
 * @param request 
 * @param config 
 * @param requestOptions 
 * @returns 
 */
export async function doStarRezRequest(request: URL | RequestInfo, config: StarRezRestConfig, requestOptions: RequestInit = {}): Promise<Response> {
  if (config.useBrowserAuth) {
    requestOptions.credentials = 'same-origin';
  } else {
    requestOptions.credentials = 'omit';
  }
  if (typeof request === 'string') {
    request = new URL(request, config.baseUrl);
  }
  const requestObject = new Request(request, requestOptions);
  if (config.authorizationHeader && !config.useBrowserAuth) {
    requestObject.headers.set('Authorization', config.authorizationHeader);
  }
  return await fetch(requestObject);
}

export async function doStarRezQuery<Structure>(query: string | BaseBuilder, config: StarRezRestConfig & { simpleXml?: false }, structure: StarRezStructureStatic<Structure>): Promise<Structure[]>;
export async function doStarRezQuery(query: string | BaseBuilder, config: StarRezRestConfig & { simpleXml?: boolean }): Promise<string>;
export async function doStarRezQuery<Structure>(query: string | BaseBuilder, config: StarRezRestConfig & { simpleXml?: boolean }, structureConstructor?: StarRezStructureStatic<Structure>): Promise<string | Structure[]> {
  const fetchUrl = new URL(config.baseUrl.toString());
  fetchUrl.pathname = `${fetchUrl.pathname}/services/query`;

  const body = typeof query === 'string' ? query : query.toString();

  const response = await doStarRezRequest(fetchUrl.toString(), config, {
    headers: {
      'Accept': config.simpleXml ? 'text/xml' : 'application/atom+xml',
      'Content-Type': 'text/plain',
    },
    method: 'POST',
    body: body,
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
      return response.text();
    }
  }
}
