// Generated from XML description of FunctionType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionType {
  functionTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionTypeID != null) this.functionTypeID = (data.FunctionTypeID != null ? parseInt(data.FunctionTypeID, 10) : data.FunctionTypeID);
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
   * Fetches a FunctionType by its ID or by exact match on other fields.
   * @param param Either the ID of the FunctionType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FunctionType object or null (if id) or an array of FunctionType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FunctionType | null>;
  static async select(param: Partial<Record<keyof FunctionType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionType[]>;
  static async select(param: number | Partial<Record<keyof FunctionType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionType | FunctionType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FunctionType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FunctionType(entry));
      }
    }
  }
}

FunctionType satisfies StarRezStructureStatic<FunctionType>
