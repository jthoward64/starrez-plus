// Generated from XML description of InterfaceSubscribe

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class InterfaceSubscribe {
  interfaceSubscribeID?: number;
  interfaceApplicationID?: number;
  interfaceActionEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "InterfaceSubscribe");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.InterfaceSubscribeID != null) this.interfaceSubscribeID = (data.InterfaceSubscribeID != null ? parseInt(data.InterfaceSubscribeID, 10) : data.InterfaceSubscribeID);
    if (data.InterfaceApplicationID != null) this.interfaceApplicationID = (data.InterfaceApplicationID != null ? parseInt(data.InterfaceApplicationID, 10) : data.InterfaceApplicationID);
    if (data.InterfaceActionEnum != null) this.interfaceActionEnum = data.InterfaceActionEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a InterfaceSubscribe by its ID or by exact match on other fields.
   * @param param Either the ID of the InterfaceSubscribe to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single InterfaceSubscribe object or null (if id) or an array of InterfaceSubscribe objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<InterfaceSubscribe | null>;
  static async select(param: Partial<Record<keyof InterfaceSubscribe, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<InterfaceSubscribe[]>;
  static async select(param: number | Partial<Record<keyof InterfaceSubscribe, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<InterfaceSubscribe | InterfaceSubscribe[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/InterfaceSubscribe/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/InterfaceSubscribe`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch InterfaceSubscribe with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new InterfaceSubscribe(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new InterfaceSubscribe(entry));
      }
    }
  }
}

InterfaceSubscribe satisfies StarRezStructureStatic<InterfaceSubscribe>
