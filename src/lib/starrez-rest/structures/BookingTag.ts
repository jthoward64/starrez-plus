// Generated from XML description of BookingTag

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class BookingTag {
  bookingTagID?: number;
  bookingID?: number;
  tagType?: string;
  tag?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "BookingTag");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.BookingTagID != null) this.bookingTagID = (data.BookingTagID != null ? parseInt(data.BookingTagID, 10) : data.BookingTagID);
    if (data.BookingID != null) this.bookingID = (data.BookingID != null ? parseInt(data.BookingID, 10) : data.BookingID);
    if (data.TagType != null) this.tagType = data.TagType;
    if (data.Tag != null) this.tag = data.Tag;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a BookingTag by its ID or by exact match on other fields.
   * @param param Either the ID of the BookingTag to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single BookingTag object or null (if id) or an array of BookingTag objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<BookingTag | null>;
  static async select(param: Partial<Record<keyof BookingTag, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingTag[]>;
  static async select(param: number | Partial<Record<keyof BookingTag, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingTag | BookingTag[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingTag/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingTag`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch BookingTag with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new BookingTag(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new BookingTag(entry));
      }
    }
  }
}

BookingTag satisfies StarRezStructureStatic<BookingTag>
