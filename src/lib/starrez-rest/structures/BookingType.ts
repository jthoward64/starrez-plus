// Generated from XML description of BookingType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class BookingType {
  bookingTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "BookingType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.BookingTypeID != null) this.bookingTypeID = (data.BookingTypeID != null ? parseInt(data.BookingTypeID, 10) : data.BookingTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a BookingType by its ID or by exact match on other fields.
   * @param param Either the ID of the BookingType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single BookingType object or null (if id) or an array of BookingType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<BookingType | null>;
  static async select(param: Partial<Record<keyof BookingType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingType[]>;
  static async select(param: number | Partial<Record<keyof BookingType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingType | BookingType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch BookingType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new BookingType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new BookingType(entry));
      }
    }
  }
}

BookingType satisfies StarRezStructureStatic<BookingType>
