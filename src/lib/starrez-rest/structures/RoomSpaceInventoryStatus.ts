// Generated from XML description of RoomSpaceInventoryStatus

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceInventoryStatus {
  roomSpaceInventoryStatusID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  active?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceInventoryStatus");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceInventoryStatusID != null) this.roomSpaceInventoryStatusID = (data.RoomSpaceInventoryStatusID != null ? parseInt(data.RoomSpaceInventoryStatusID, 10) : data.RoomSpaceInventoryStatusID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceInventoryStatus by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceInventoryStatus to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceInventoryStatus object or null (if id) or an array of RoomSpaceInventoryStatus objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryStatus | null>;
  static async select(param: Partial<Record<keyof RoomSpaceInventoryStatus, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryStatus[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceInventoryStatus, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryStatus | RoomSpaceInventoryStatus[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryStatus/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryStatus`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceInventoryStatus with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceInventoryStatus(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceInventoryStatus(entry));
      }
    }
  }
}

RoomSpaceInventoryStatus satisfies StarRezStructureStatic<RoomSpaceInventoryStatus>
