// Generated from XML description of RoomSpaceSwapPreference

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceSwapPreference {
  roomSpaceSwapPreferenceID?: number;
  bookingID?: number;
  roomPreferenceID?: number;
  preference?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceSwapPreference");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceSwapPreferenceID != null) this.roomSpaceSwapPreferenceID = (data.RoomSpaceSwapPreferenceID != null ? parseInt(data.RoomSpaceSwapPreferenceID, 10) : data.RoomSpaceSwapPreferenceID);
    if (data.BookingID != null) this.bookingID = (data.BookingID != null ? parseInt(data.BookingID, 10) : data.BookingID);
    if (data.RoomPreferenceID != null) this.roomPreferenceID = (data.RoomPreferenceID != null ? parseInt(data.RoomPreferenceID, 10) : data.RoomPreferenceID);
    if (data.Preference != null) this.preference = (data.Preference != null ? parseInt(data.Preference, 10) : data.Preference);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceSwapPreference by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceSwapPreference to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceSwapPreference object or null (if id) or an array of RoomSpaceSwapPreference objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceSwapPreference | null>;
  static async select(param: Partial<Record<keyof RoomSpaceSwapPreference, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceSwapPreference[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceSwapPreference, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceSwapPreference | RoomSpaceSwapPreference[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceSwapPreference/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceSwapPreference`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceSwapPreference with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceSwapPreference(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceSwapPreference(entry));
      }
    }
  }
}

RoomSpaceSwapPreference satisfies StarRezStructureStatic<RoomSpaceSwapPreference>
