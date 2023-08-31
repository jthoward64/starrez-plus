// Generated from XML description of RoomBaseGender

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomBaseGender {
  roomBaseGenderID?: number;
  dateStart?: Date | null;
  dateEnd?: Date | null;
  roomBaseID?: number;
  genderTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomBaseGender");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomBaseGenderID != null) this.roomBaseGenderID = (data.RoomBaseGenderID != null ? parseInt(data.RoomBaseGenderID, 10) : data.RoomBaseGenderID);
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.RoomBaseID != null) this.roomBaseID = (data.RoomBaseID != null ? parseInt(data.RoomBaseID, 10) : data.RoomBaseID);
    if (data.GenderTypeEnum != null) this.genderTypeEnum = data.GenderTypeEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomBaseGender by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomBaseGender to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomBaseGender object or null (if id) or an array of RoomBaseGender objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomBaseGender | null>;
  static async select(param: Partial<Record<keyof RoomBaseGender, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomBaseGender[]>;
  static async select(param: number | Partial<Record<keyof RoomBaseGender, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomBaseGender | RoomBaseGender[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomBaseGender/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomBaseGender`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomBaseGender with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomBaseGender(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomBaseGender(entry));
      }
    }
  }
}

RoomBaseGender satisfies StarRezStructureStatic<RoomBaseGender>
