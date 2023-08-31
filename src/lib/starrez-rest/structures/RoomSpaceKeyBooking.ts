// Generated from XML description of RoomSpaceKeyBooking

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceKeyBooking {
  dateCreated?: Date;
  roomSpaceKeyBookingID?: number;
  roomSpaceKeyID?: number;
  entryID?: number;
  roomSpaceKeyStatusEnum?: unknown;
  entryName?: string;
  dateStart?: Date;
  dateEnd?: Date;
  comments?: string;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceKeyBooking");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.RoomSpaceKeyBookingID != null) this.roomSpaceKeyBookingID = (data.RoomSpaceKeyBookingID != null ? parseInt(data.RoomSpaceKeyBookingID, 10) : data.RoomSpaceKeyBookingID);
    if (data.RoomSpaceKeyID != null) this.roomSpaceKeyID = (data.RoomSpaceKeyID != null ? parseInt(data.RoomSpaceKeyID, 10) : data.RoomSpaceKeyID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.RoomSpaceKeyStatusEnum != null) this.roomSpaceKeyStatusEnum = data.RoomSpaceKeyStatusEnum;
    if (data.EntryName != null) this.entryName = data.EntryName;
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceKeyBooking by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceKeyBooking to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceKeyBooking object or null (if id) or an array of RoomSpaceKeyBooking objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceKeyBooking | null>;
  static async select(param: Partial<Record<keyof RoomSpaceKeyBooking, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceKeyBooking[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceKeyBooking, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceKeyBooking | RoomSpaceKeyBooking[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceKeyBooking/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceKeyBooking`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceKeyBooking with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceKeyBooking(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceKeyBooking(entry));
      }
    }
  }
}

RoomSpaceKeyBooking satisfies StarRezStructureStatic<RoomSpaceKeyBooking>
