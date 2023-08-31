// Generated from XML description of BookingOccupant

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class BookingOccupant {
  bookingOccupantID?: number;
  bookingID?: number;
  entryID?: number;
  animalTypeEnum?: unknown;
  animalSpecies?: string;
  checkInDate?: Date;
  checkOutDate?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "BookingOccupant");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.BookingOccupantID != null) this.bookingOccupantID = (data.BookingOccupantID != null ? parseInt(data.BookingOccupantID, 10) : data.BookingOccupantID);
    if (data.BookingID != null) this.bookingID = (data.BookingID != null ? parseInt(data.BookingID, 10) : data.BookingID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.AnimalTypeEnum != null) this.animalTypeEnum = data.AnimalTypeEnum;
    if (data.AnimalSpecies != null) this.animalSpecies = data.AnimalSpecies;
    if (data.CheckInDate != null) this.checkInDate = (data.CheckInDate != null ? new Date(data.CheckInDate) : data.CheckInDate);
    if (data.CheckOutDate != null) this.checkOutDate = (data.CheckOutDate != null ? new Date(data.CheckOutDate) : data.CheckOutDate);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a BookingOccupant by its ID or by exact match on other fields.
   * @param param Either the ID of the BookingOccupant to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single BookingOccupant object or null (if id) or an array of BookingOccupant objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<BookingOccupant | null>;
  static async select(param: Partial<Record<keyof BookingOccupant, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingOccupant[]>;
  static async select(param: number | Partial<Record<keyof BookingOccupant, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingOccupant | BookingOccupant[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingOccupant/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingOccupant`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch BookingOccupant with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new BookingOccupant(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new BookingOccupant(entry));
      }
    }
  }
}

BookingOccupant satisfies StarRezStructureStatic<BookingOccupant>
