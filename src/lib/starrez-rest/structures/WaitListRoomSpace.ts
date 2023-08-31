// Generated from XML description of WaitListRoomSpace

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WaitListRoomSpace {
  waitListRoomSpaceID?: number;
  waitListID?: number;
  roomSpaceID?: number;
  waitListOrder?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WaitListRoomSpace");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WaitListRoomSpaceID != null) this.waitListRoomSpaceID = (data.WaitListRoomSpaceID != null ? parseInt(data.WaitListRoomSpaceID, 10) : data.WaitListRoomSpaceID);
    if (data.WaitListID != null) this.waitListID = (data.WaitListID != null ? parseInt(data.WaitListID, 10) : data.WaitListID);
    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
    if (data.WaitListOrder != null) this.waitListOrder = (data.WaitListOrder != null ? parseInt(data.WaitListOrder, 10) : data.WaitListOrder);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WaitListRoomSpace by its ID or by exact match on other fields.
   * @param param Either the ID of the WaitListRoomSpace to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WaitListRoomSpace object or null (if id) or an array of WaitListRoomSpace objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WaitListRoomSpace | null>;
  static async select(param: Partial<Record<keyof WaitListRoomSpace, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WaitListRoomSpace[]>;
  static async select(param: number | Partial<Record<keyof WaitListRoomSpace, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WaitListRoomSpace | WaitListRoomSpace[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitListRoomSpace/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitListRoomSpace`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WaitListRoomSpace with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WaitListRoomSpace(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WaitListRoomSpace(entry));
      }
    }
  }
}

WaitListRoomSpace satisfies StarRezStructureStatic<WaitListRoomSpace>
