// Generated from XML description of RoomConfigurationProfile

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomConfigurationProfile {
  roomConfigurationProfileID?: number;
  roomConfigurationID?: number;
  profileItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomConfigurationProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomConfigurationProfileID != null) this.roomConfigurationProfileID = (data.RoomConfigurationProfileID != null ? parseInt(data.RoomConfigurationProfileID, 10) : data.RoomConfigurationProfileID);
    if (data.RoomConfigurationID != null) this.roomConfigurationID = (data.RoomConfigurationID != null ? parseInt(data.RoomConfigurationID, 10) : data.RoomConfigurationID);
    if (data.ProfileItemID != null) this.profileItemID = (data.ProfileItemID != null ? parseInt(data.ProfileItemID, 10) : data.ProfileItemID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomConfigurationProfile by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomConfigurationProfile to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomConfigurationProfile object or null (if id) or an array of RoomConfigurationProfile objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationProfile | null>;
  static async select(param: Partial<Record<keyof RoomConfigurationProfile, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationProfile[]>;
  static async select(param: number | Partial<Record<keyof RoomConfigurationProfile, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationProfile | RoomConfigurationProfile[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationProfile/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationProfile`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomConfigurationProfile with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomConfigurationProfile(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomConfigurationProfile(entry));
      }
    }
  }
}

RoomConfigurationProfile satisfies StarRezStructureStatic<RoomConfigurationProfile>
