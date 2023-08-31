// Generated from XML description of TermSessionFree

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TermSessionFree {
  termSessionFreeID?: number;
  recordTypeEnum?: unknown;
  termSessionID?: number;
  dateStart?: Date | null;
  dateEnd?: Date | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TermSessionFree");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TermSessionFreeID != null) this.termSessionFreeID = (data.TermSessionFreeID != null ? parseInt(data.TermSessionFreeID, 10) : data.TermSessionFreeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a TermSessionFree by its ID or by exact match on other fields.
   * @param param Either the ID of the TermSessionFree to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TermSessionFree object or null (if id) or an array of TermSessionFree objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TermSessionFree | null>;
  static async select(param: Partial<Record<keyof TermSessionFree, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TermSessionFree[]>;
  static async select(param: number | Partial<Record<keyof TermSessionFree, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TermSessionFree | TermSessionFree[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TermSessionFree/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TermSessionFree`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TermSessionFree with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TermSessionFree(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TermSessionFree(entry));
      }
    }
  }
}

TermSessionFree satisfies StarRezStructureStatic<TermSessionFree>
