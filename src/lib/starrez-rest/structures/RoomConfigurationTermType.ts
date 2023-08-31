// Generated from XML description of RoomConfigurationTermType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomConfigurationTermType {
  roomConfigurationTermTypeID?: number;
  roomConfigurationID?: number;
  termTypeID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomConfigurationTermType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomConfigurationTermTypeID != null) this.roomConfigurationTermTypeID = (data.RoomConfigurationTermTypeID != null ? parseInt(data.RoomConfigurationTermTypeID, 10) : data.RoomConfigurationTermTypeID);
    if (data.RoomConfigurationID != null) this.roomConfigurationID = (data.RoomConfigurationID != null ? parseInt(data.RoomConfigurationID, 10) : data.RoomConfigurationID);
    if (data.TermTypeID != null) this.termTypeID = (data.TermTypeID != null ? parseInt(data.TermTypeID, 10) : data.TermTypeID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomConfigurationTermType by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomConfigurationTermType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomConfigurationTermType object or null (if id) or an array of RoomConfigurationTermType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationTermType | null>;
  static async select(param: Partial<Record<keyof RoomConfigurationTermType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationTermType[]>;
  static async select(param: number | Partial<Record<keyof RoomConfigurationTermType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationTermType | RoomConfigurationTermType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationTermType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationTermType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomConfigurationTermType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomConfigurationTermType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomConfigurationTermType(entry));
      }
    }
  }
}

RoomConfigurationTermType satisfies StarRezStructureStatic<RoomConfigurationTermType>
