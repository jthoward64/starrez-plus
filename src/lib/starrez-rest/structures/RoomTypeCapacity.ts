// Generated from XML description of RoomTypeCapacity

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomTypeCapacity {
  roomTypeCapacityID?: number;
  recordTypeEnum?: unknown;
  roomTypeID?: number;
  description?: string;
  capacity?: number;
  dateStart?: Date;
  dateEnd?: Date;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomTypeCapacity");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomTypeCapacityID != null) this.roomTypeCapacityID = (data.RoomTypeCapacityID != null ? parseInt(data.RoomTypeCapacityID, 10) : data.RoomTypeCapacityID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.RoomTypeID != null) this.roomTypeID = (data.RoomTypeID != null ? parseInt(data.RoomTypeID, 10) : data.RoomTypeID);
    if (data.Description != null) this.description = data.Description;
    if (data.Capacity != null) this.capacity = (data.Capacity != null ? parseInt(data.Capacity, 10) : data.Capacity);
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomTypeCapacity by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomTypeCapacity to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomTypeCapacity object or null (if id) or an array of RoomTypeCapacity objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomTypeCapacity | null>;
  static async select(param: Partial<Record<keyof RoomTypeCapacity, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomTypeCapacity[]>;
  static async select(param: number | Partial<Record<keyof RoomTypeCapacity, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomTypeCapacity | RoomTypeCapacity[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomTypeCapacity/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomTypeCapacity`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomTypeCapacity with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomTypeCapacity(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomTypeCapacity(entry));
      }
    }
  }
}

RoomTypeCapacity satisfies StarRezStructureStatic<RoomTypeCapacity>
