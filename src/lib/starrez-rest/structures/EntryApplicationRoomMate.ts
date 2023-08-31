// Generated from XML description of EntryApplicationRoomMate

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryApplicationRoomMate {
  entryApplicationRoomMateID?: number;
  entryApplicationID?: number;
  sortOrder?: number;
  roomMate_EntryApplicationID?: number;
  confirmed?: boolean;
  enforce?: boolean;
  dateCreated?: Date;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryApplicationRoomMate");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryApplicationRoomMateID != null) this.entryApplicationRoomMateID = (data.EntryApplicationRoomMateID != null ? parseInt(data.EntryApplicationRoomMateID, 10) : data.EntryApplicationRoomMateID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.SortOrder != null) this.sortOrder = (data.SortOrder != null ? parseInt(data.SortOrder, 10) : data.SortOrder);
    if (data.RoomMate_EntryApplicationID != null) this.roomMate_EntryApplicationID = (data.RoomMate_EntryApplicationID != null ? parseInt(data.RoomMate_EntryApplicationID, 10) : data.RoomMate_EntryApplicationID);
    if (data.Confirmed != null) this.confirmed = data.Confirmed === 'true';
    if (data.Enforce != null) this.enforce = data.Enforce === 'true';
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryApplicationRoomMate by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryApplicationRoomMate to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryApplicationRoomMate object or null (if id) or an array of EntryApplicationRoomMate objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryApplicationRoomMate | null>;
  static async select(param: Partial<Record<keyof EntryApplicationRoomMate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryApplicationRoomMate[]>;
  static async select(param: number | Partial<Record<keyof EntryApplicationRoomMate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryApplicationRoomMate | EntryApplicationRoomMate[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationRoomMate/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationRoomMate`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryApplicationRoomMate with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryApplicationRoomMate(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryApplicationRoomMate(entry));
      }
    }
  }
}

EntryApplicationRoomMate satisfies StarRezStructureStatic<EntryApplicationRoomMate>
