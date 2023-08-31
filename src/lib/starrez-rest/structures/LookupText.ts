// Generated from XML description of LookupText

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class LookupText {
  lookupTextID?: number;
  lookupID?: number;
  lookupText?: string;
  lookupValue?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "LookupText");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.LookupTextID != null) this.lookupTextID = (data.LookupTextID != null ? parseInt(data.LookupTextID, 10) : data.LookupTextID);
    if (data.LookupID != null) this.lookupID = (data.LookupID != null ? parseInt(data.LookupID, 10) : data.LookupID);
    if (data.LookupText != null) this.lookupText = data.LookupText;
    if (data.LookupValue != null) this.lookupValue = data.LookupValue;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a LookupText by its ID or by exact match on other fields.
   * @param param Either the ID of the LookupText to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single LookupText object or null (if id) or an array of LookupText objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<LookupText | null>;
  static async select(param: Partial<Record<keyof LookupText, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<LookupText[]>;
  static async select(param: number | Partial<Record<keyof LookupText, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<LookupText | LookupText[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LookupText/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LookupText`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch LookupText with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new LookupText(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new LookupText(entry));
      }
    }
  }
}

LookupText satisfies StarRezStructureStatic<LookupText>
