// Generated from XML description of CateringType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class CateringType {
  cateringTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "CateringType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CateringTypeID != null) this.cateringTypeID = (data.CateringTypeID != null ? parseInt(data.CateringTypeID, 10) : data.CateringTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a CateringType by its ID or by exact match on other fields.
   * @param param Either the ID of the CateringType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single CateringType object or null (if id) or an array of CateringType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<CateringType | null>;
  static async select(param: Partial<Record<keyof CateringType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CateringType[]>;
  static async select(param: number | Partial<Record<keyof CateringType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CateringType | CateringType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CateringType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CateringType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch CateringType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new CateringType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new CateringType(entry));
      }
    }
  }
}

CateringType satisfies StarRezStructureStatic<CateringType>
