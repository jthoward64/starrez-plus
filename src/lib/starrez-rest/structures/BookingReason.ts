// Generated from XML description of BookingReason

import { starRezXmlToJson } from "../parsing.js";

export class BookingReason {
  bookingReasonID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  roomCloseApply?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "BookingReason");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.BookingReasonID != null) this.bookingReasonID = parseInt(data.BookingReasonID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.RoomCloseApply != null) this.roomCloseApply = data.RoomCloseApply === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
