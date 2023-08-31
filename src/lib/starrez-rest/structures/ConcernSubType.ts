// Generated from XML description of ConcernSubType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ConcernSubType {
  concernSubTypeID?: number;
  concernTypeID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ConcernSubType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ConcernSubTypeID != null) this.concernSubTypeID = (data.ConcernSubTypeID != null ? parseInt(data.ConcernSubTypeID, 10) : data.ConcernSubTypeID);
    if (data.ConcernTypeID != null) this.concernTypeID = (data.ConcernTypeID != null ? parseInt(data.ConcernTypeID, 10) : data.ConcernTypeID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a ConcernSubType by its ID or by exact match on other fields.
   * @param param Either the ID of the ConcernSubType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ConcernSubType object or null (if id) or an array of ConcernSubType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ConcernSubType | null>;
  static async select(param: Partial<Record<keyof ConcernSubType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ConcernSubType[]>;
  static async select(param: number | Partial<Record<keyof ConcernSubType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ConcernSubType | ConcernSubType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ConcernSubType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ConcernSubType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ConcernSubType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ConcernSubType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ConcernSubType(entry));
      }
    }
  }
}

ConcernSubType satisfies StarRezStructureStatic<ConcernSubType>
