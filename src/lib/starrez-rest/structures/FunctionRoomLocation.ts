// Generated from XML description of FunctionRoomLocation

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionRoomLocation {
  functionRoomLocationID?: number;
  recordTypeEnum?: unknown;
  categoryID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionRoomLocation");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionRoomLocationID != null) this.functionRoomLocationID = (data.FunctionRoomLocationID != null ? parseInt(data.FunctionRoomLocationID, 10) : data.FunctionRoomLocationID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a FunctionRoomLocation by its ID or by exact match on other fields.
   * @param param Either the ID of the FunctionRoomLocation to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FunctionRoomLocation object or null (if id) or an array of FunctionRoomLocation objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FunctionRoomLocation | null>;
  static async select(param: Partial<Record<keyof FunctionRoomLocation, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionRoomLocation[]>;
  static async select(param: number | Partial<Record<keyof FunctionRoomLocation, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionRoomLocation | FunctionRoomLocation[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionRoomLocation/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionRoomLocation`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionRoomLocation with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FunctionRoomLocation(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FunctionRoomLocation(entry));
      }
    }
  }
}

FunctionRoomLocation satisfies StarRezStructureStatic<FunctionRoomLocation>
