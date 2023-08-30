// Generated from XML description of RoomManager

import { starRezXmlToJson } from "../parsing.js";

export class RoomManager {
  roomManagerID?: number;
  recordTypeEnum?: unknown;
  contactID?: number;
  description?: string;
  leaseDateStart?: Date | null;
  leaseDateEnd?: Date | null;
  amountRent?: string;
  amountBond?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomManager");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomManagerID != null) this.roomManagerID = parseInt(data.RoomManagerID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.ContactID != null) this.contactID = parseInt(data.ContactID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.LeaseDateStart != null) this.leaseDateStart = new Date(data.LeaseDateStart);
    if (data.LeaseDateEnd != null) this.leaseDateEnd = new Date(data.LeaseDateEnd);
    if (data.AmountRent != null) this.amountRent = data.AmountRent;
    if (data.AmountBond != null) this.amountBond = data.AmountBond;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
