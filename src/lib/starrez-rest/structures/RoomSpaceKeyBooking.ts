// Generated from XML description of RoomSpaceKeyBooking

import { starRezXmlToJson } from "../parsing.js";

export class RoomSpaceKeyBooking {
  dateCreated?: Date;
  roomSpaceKeyBookingID?: number;
  roomSpaceKeyID?: number;
  entryID?: number;
  roomSpaceKeyStatusEnum?: unknown;
  entryName?: string;
  dateStart?: Date;
  dateEnd?: Date;
  comments?: string;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceKeyBooking");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.RoomSpaceKeyBookingID != null) this.roomSpaceKeyBookingID = parseInt(data.RoomSpaceKeyBookingID, 10);
    if (data.RoomSpaceKeyID != null) this.roomSpaceKeyID = parseInt(data.RoomSpaceKeyID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.RoomSpaceKeyStatusEnum != null) this.roomSpaceKeyStatusEnum = data.RoomSpaceKeyStatusEnum;
    if (data.EntryName != null) this.entryName = data.EntryName;
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
