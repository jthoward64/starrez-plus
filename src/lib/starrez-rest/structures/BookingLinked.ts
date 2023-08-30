// Generated from XML description of BookingLinked

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<BookingLinked | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingLinked/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch BookingLinked with id ${id}`);
    } else {
      return new BookingLinked(await response.text());
    }
  }
}

BookingLinked satisfies StarRezStructureStatic<BookingLinked>
