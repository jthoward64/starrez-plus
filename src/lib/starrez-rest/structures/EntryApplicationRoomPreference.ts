// Generated from XML description of EntryApplicationRoomPreference

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryApplicationRoomPreference {
  entryApplicationRoomPreferenceID?: number;
  entryApplicationID?: number;
  roomPreferenceID?: number;
  preference?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryApplicationRoomPreference");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryApplicationRoomPreferenceID != null) this.entryApplicationRoomPreferenceID = (data.EntryApplicationRoomPreferenceID != null ? parseInt(data.EntryApplicationRoomPreferenceID, 10) : data.EntryApplicationRoomPreferenceID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.RoomPreferenceID != null) this.roomPreferenceID = (data.RoomPreferenceID != null ? parseInt(data.RoomPreferenceID, 10) : data.RoomPreferenceID);
    if (data.Preference != null) this.preference = (data.Preference != null ? parseInt(data.Preference, 10) : data.Preference);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryApplicationRoomPreference by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryApplicationRoomPreference to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryApplicationRoomPreference object or null (if id) or an array of EntryApplicationRoomPreference objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryApplicationRoomPreference | null>;
  static async select(param: Partial<Record<keyof EntryApplicationRoomPreference, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryApplicationRoomPreference[]>;
  static async select(param: number | Partial<Record<keyof EntryApplicationRoomPreference, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryApplicationRoomPreference | EntryApplicationRoomPreference[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationRoomPreference/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationRoomPreference`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryApplicationRoomPreference with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryApplicationRoomPreference(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryApplicationRoomPreference(entry));
      }
    }
  }
}

EntryApplicationRoomPreference satisfies StarRezStructureStatic<EntryApplicationRoomPreference>
