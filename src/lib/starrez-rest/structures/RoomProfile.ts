// Generated from XML description of RoomProfile

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomProfile {
  roomProfileID?: number;
  roomID?: number;
  profileItemID?: number;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomProfileID != null) this.roomProfileID = (data.RoomProfileID != null ? parseInt(data.RoomProfileID, 10) : data.RoomProfileID);
    if (data.RoomID != null) this.roomID = (data.RoomID != null ? parseInt(data.RoomID, 10) : data.RoomID);
    if (data.ProfileItemID != null) this.profileItemID = (data.ProfileItemID != null ? parseInt(data.ProfileItemID, 10) : data.ProfileItemID);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomProfile by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomProfile to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomProfile object or null (if id) or an array of RoomProfile objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomProfile | null>;
  static async select(param: Partial<Record<keyof RoomProfile, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomProfile[]>;
  static async select(param: number | Partial<Record<keyof RoomProfile, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomProfile | RoomProfile[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomProfile/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomProfile`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomProfile with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomProfile(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomProfile(entry));
      }
    }
  }
}

RoomProfile satisfies StarRezStructureStatic<RoomProfile>
