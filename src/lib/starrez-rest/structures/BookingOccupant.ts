// Generated from XML description of BookingOccupant

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<BookingOccupant | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingOccupant/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch BookingOccupant with id ${id}`);
    } else {
      return new BookingOccupant(await response.text());
    }
  }
}

BookingOccupant satisfies StarRezStructureStatic<BookingOccupant>
