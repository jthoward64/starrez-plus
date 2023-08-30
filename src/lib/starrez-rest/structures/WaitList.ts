// Generated from XML description of WaitList

import { starRezXmlToJson } from "../parsing.js";

export class WaitList {
  waitListID?: number;
  termID?: number;
  genderTypeEnum?: unknown;
  description?: string;
  comments?: string;
  lease?: boolean;
  removeEntriesWhenBooked?: boolean;
  roomTypeID?: number;
  roomLocationID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WaitList");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WaitListID != null) this.waitListID = parseInt(data.WaitListID, 10);
    if (data.TermID != null) this.termID = parseInt(data.TermID, 10);
    if (data.GenderTypeEnum != null) this.genderTypeEnum = data.GenderTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Lease != null) this.lease = data.Lease === 'true';
    if (data.RemoveEntriesWhenBooked != null) this.removeEntriesWhenBooked = data.RemoveEntriesWhenBooked === 'true';
    if (data.RoomTypeID != null) this.roomTypeID = parseInt(data.RoomTypeID, 10);
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
