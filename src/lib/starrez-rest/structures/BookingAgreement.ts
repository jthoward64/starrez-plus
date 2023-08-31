// Generated from XML description of BookingAgreement

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class BookingAgreement {
  bookingAgreementID?: number;
  bookingID?: number;
  tableName?: string;
  tableID?: number;
  dateAgreed?: Date | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "BookingAgreement");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.BookingAgreementID != null) this.bookingAgreementID = (data.BookingAgreementID != null ? parseInt(data.BookingAgreementID, 10) : data.BookingAgreementID);
    if (data.BookingID != null) this.bookingID = (data.BookingID != null ? parseInt(data.BookingID, 10) : data.BookingID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.DateAgreed != null) this.dateAgreed = (data.DateAgreed != null ? new Date(data.DateAgreed) : data.DateAgreed);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a BookingAgreement by its ID or by exact match on other fields.
   * @param param Either the ID of the BookingAgreement to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single BookingAgreement object or null (if id) or an array of BookingAgreement objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<BookingAgreement | null>;
  static async select(param: Partial<Record<keyof BookingAgreement, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingAgreement[]>;
  static async select(param: number | Partial<Record<keyof BookingAgreement, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingAgreement | BookingAgreement[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingAgreement/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingAgreement`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch BookingAgreement with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new BookingAgreement(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new BookingAgreement(entry));
      }
    }
  }
}

BookingAgreement satisfies StarRezStructureStatic<BookingAgreement>
