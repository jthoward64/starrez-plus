// Generated from XML description of RoomRate

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomRate {
  roomRateID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  automaticSessionRollover?: boolean;
  comments?: string;
  securityUserID?: number;
  categoryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomRate");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomRateID != null) this.roomRateID = (data.RoomRateID != null ? parseInt(data.RoomRateID, 10) : data.RoomRateID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.AutomaticSessionRollover != null) this.automaticSessionRollover = data.AutomaticSessionRollover === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomRate by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomRate to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomRate object or null (if id) or an array of RoomRate objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomRate | null>;
  static async select(param: Partial<Record<keyof RoomRate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomRate[]>;
  static async select(param: number | Partial<Record<keyof RoomRate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomRate | RoomRate[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomRate/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomRate`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomRate with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomRate(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomRate(entry));
      }
    }
  }
}

RoomRate satisfies StarRezStructureStatic<RoomRate>
