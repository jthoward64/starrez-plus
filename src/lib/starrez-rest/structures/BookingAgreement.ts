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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<BookingAgreement | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingAgreement/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch BookingAgreement with id ${id}`);
    } else {
      return new BookingAgreement(await response.text());
    }
  }
}

BookingAgreement satisfies StarRezStructureStatic<BookingAgreement>
