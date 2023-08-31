// Generated from XML description of RoomTermType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomTermType {
  roomTermTypeID?: number;
  roomID?: number;
  termTypeID?: number;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomTermType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomTermTypeID != null) this.roomTermTypeID = (data.RoomTermTypeID != null ? parseInt(data.RoomTermTypeID, 10) : data.RoomTermTypeID);
    if (data.RoomID != null) this.roomID = (data.RoomID != null ? parseInt(data.RoomID, 10) : data.RoomID);
    if (data.TermTypeID != null) this.termTypeID = (data.TermTypeID != null ? parseInt(data.TermTypeID, 10) : data.TermTypeID);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomTermType by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomTermType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomTermType object or null (if id) or an array of RoomTermType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomTermType | null>;
  static async select(param: Partial<Record<keyof RoomTermType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomTermType[]>;
  static async select(param: number | Partial<Record<keyof RoomTermType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomTermType | RoomTermType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomTermType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomTermType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomTermType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomTermType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomTermType(entry));
      }
    }
  }
}

RoomTermType satisfies StarRezStructureStatic<RoomTermType>
