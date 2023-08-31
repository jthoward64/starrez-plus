// Generated from XML description of RegionOfBirth

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RegionOfBirth {
  regionOfBirthID?: number;
  description?: string;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RegionOfBirth");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RegionOfBirthID != null) this.regionOfBirthID = (data.RegionOfBirthID != null ? parseInt(data.RegionOfBirthID, 10) : data.RegionOfBirthID);
    if (data.Description != null) this.description = data.Description;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RegionOfBirth by its ID or by exact match on other fields.
   * @param param Either the ID of the RegionOfBirth to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RegionOfBirth object or null (if id) or an array of RegionOfBirth objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RegionOfBirth | null>;
  static async select(param: Partial<Record<keyof RegionOfBirth, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RegionOfBirth[]>;
  static async select(param: number | Partial<Record<keyof RegionOfBirth, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RegionOfBirth | RegionOfBirth[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RegionOfBirth/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RegionOfBirth`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RegionOfBirth with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RegionOfBirth(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RegionOfBirth(entry));
      }
    }
  }
}

RegionOfBirth satisfies StarRezStructureStatic<RegionOfBirth>
