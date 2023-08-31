// Generated from XML description of BookingReason

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class BookingReason {
  bookingReasonID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  roomCloseApply?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "BookingReason");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.BookingReasonID != null) this.bookingReasonID = (data.BookingReasonID != null ? parseInt(data.BookingReasonID, 10) : data.BookingReasonID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.RoomCloseApply != null) this.roomCloseApply = data.RoomCloseApply === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a BookingReason by its ID or by exact match on other fields.
   * @param param Either the ID of the BookingReason to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single BookingReason object or null (if id) or an array of BookingReason objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<BookingReason | null>;
  static async select(param: Partial<Record<keyof BookingReason, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingReason[]>;
  static async select(param: number | Partial<Record<keyof BookingReason, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingReason | BookingReason[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingReason/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingReason`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch BookingReason with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new BookingReason(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new BookingReason(entry));
      }
    }
  }
}

BookingReason satisfies StarRezStructureStatic<BookingReason>
