// Generated from XML description of RoomConfigurationRoomSort

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomConfigurationRoomSort {
  roomConfigurationRoomSortID?: number;
  isBestMatchWhenNoRoomProfile?: boolean;
  roomConfigurationID?: number;
  roomSortProfileItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomConfigurationRoomSort");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomConfigurationRoomSortID != null) this.roomConfigurationRoomSortID = (data.RoomConfigurationRoomSortID != null ? parseInt(data.RoomConfigurationRoomSortID, 10) : data.RoomConfigurationRoomSortID);
    if (data.IsBestMatchWhenNoRoomProfile != null) this.isBestMatchWhenNoRoomProfile = data.IsBestMatchWhenNoRoomProfile === 'true';
    if (data.RoomConfigurationID != null) this.roomConfigurationID = (data.RoomConfigurationID != null ? parseInt(data.RoomConfigurationID, 10) : data.RoomConfigurationID);
    if (data.RoomSortProfileItemID != null) this.roomSortProfileItemID = (data.RoomSortProfileItemID != null ? parseInt(data.RoomSortProfileItemID, 10) : data.RoomSortProfileItemID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomConfigurationRoomSort by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomConfigurationRoomSort to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomConfigurationRoomSort object or null (if id) or an array of RoomConfigurationRoomSort objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationRoomSort | null>;
  static async select(param: Partial<Record<keyof RoomConfigurationRoomSort, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationRoomSort[]>;
  static async select(param: number | Partial<Record<keyof RoomConfigurationRoomSort, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationRoomSort | RoomConfigurationRoomSort[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationRoomSort/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationRoomSort`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomConfigurationRoomSort with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomConfigurationRoomSort(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomConfigurationRoomSort(entry));
      }
    }
  }
}

RoomConfigurationRoomSort satisfies StarRezStructureStatic<RoomConfigurationRoomSort>
