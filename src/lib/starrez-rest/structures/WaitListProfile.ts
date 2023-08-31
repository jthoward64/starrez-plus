// Generated from XML description of WaitListProfile

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WaitListProfile {
  waitListProfileID?: number;
  waitListID?: number;
  profileItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WaitListProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WaitListProfileID != null) this.waitListProfileID = (data.WaitListProfileID != null ? parseInt(data.WaitListProfileID, 10) : data.WaitListProfileID);
    if (data.WaitListID != null) this.waitListID = (data.WaitListID != null ? parseInt(data.WaitListID, 10) : data.WaitListID);
    if (data.ProfileItemID != null) this.profileItemID = (data.ProfileItemID != null ? parseInt(data.ProfileItemID, 10) : data.ProfileItemID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WaitListProfile by its ID or by exact match on other fields.
   * @param param Either the ID of the WaitListProfile to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WaitListProfile object or null (if id) or an array of WaitListProfile objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WaitListProfile | null>;
  static async select(param: Partial<Record<keyof WaitListProfile, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WaitListProfile[]>;
  static async select(param: number | Partial<Record<keyof WaitListProfile, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WaitListProfile | WaitListProfile[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitListProfile/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitListProfile`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WaitListProfile with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WaitListProfile(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WaitListProfile(entry));
      }
    }
  }
}

WaitListProfile satisfies StarRezStructureStatic<WaitListProfile>
