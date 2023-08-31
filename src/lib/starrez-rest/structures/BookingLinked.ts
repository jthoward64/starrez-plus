// Generated from XML description of BookingLinked

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class BookingLinked {
  bookingLinkedID?: number;
  bookingID?: number;
  linked_BookingID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "BookingLinked");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.BookingLinkedID != null) this.bookingLinkedID = (data.BookingLinkedID != null ? parseInt(data.BookingLinkedID, 10) : data.BookingLinkedID);
    if (data.BookingID != null) this.bookingID = (data.BookingID != null ? parseInt(data.BookingID, 10) : data.BookingID);
    if (data.Linked_BookingID != null) this.linked_BookingID = (data.Linked_BookingID != null ? parseInt(data.Linked_BookingID, 10) : data.Linked_BookingID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a BookingLinked by its ID or by exact match on other fields.
   * @param param Either the ID of the BookingLinked to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single BookingLinked object or null (if id) or an array of BookingLinked objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<BookingLinked | null>;
  static async select(param: Partial<Record<keyof BookingLinked, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingLinked[]>;
  static async select(param: number | Partial<Record<keyof BookingLinked, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingLinked | BookingLinked[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingLinked/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingLinked`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch BookingLinked with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new BookingLinked(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new BookingLinked(entry));
      }
    }
  }
}

BookingLinked satisfies StarRezStructureStatic<BookingLinked>
