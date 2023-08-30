// Generated from XML description of BookingOccupant

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.BookingOccupantID != null) this.bookingOccupantID = parseInt(data.BookingOccupantID, 10);
    if (data.BookingID != null) this.bookingID = parseInt(data.BookingID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.AnimalTypeEnum != null) this.animalTypeEnum = data.AnimalTypeEnum;
    if (data.AnimalSpecies != null) this.animalSpecies = data.AnimalSpecies;
    if (data.CheckInDate != null) this.checkInDate = new Date(data.CheckInDate);
    if (data.CheckOutDate != null) this.checkOutDate = new Date(data.CheckOutDate);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

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
