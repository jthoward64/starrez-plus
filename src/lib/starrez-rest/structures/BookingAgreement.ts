// Generated from XML description of BookingAgreement

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.BookingAgreementID != null) this.bookingAgreementID = parseInt(data.BookingAgreementID, 10);
    if (data.BookingID != null) this.bookingID = parseInt(data.BookingID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.DateAgreed != null) this.dateAgreed = new Date(data.DateAgreed);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
