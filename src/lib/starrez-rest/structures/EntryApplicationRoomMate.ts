// Generated from XML description of EntryApplicationRoomMate

import { starRezXmlToJson } from "../parsing.js";

export class EntryApplicationRoomMate {
  entryApplicationRoomMateID?: number;
  entryApplicationID?: number;
  sortOrder?: number;
  roomMate_EntryApplicationID?: number;
  confirmed?: boolean;
  enforce?: boolean;
  dateCreated?: Date;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryApplicationRoomMate");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryApplicationRoomMateID != null) this.entryApplicationRoomMateID = parseInt(data.EntryApplicationRoomMateID, 10);
    if (data.EntryApplicationID != null) this.entryApplicationID = parseInt(data.EntryApplicationID, 10);
    if (data.SortOrder != null) this.sortOrder = parseInt(data.SortOrder, 10);
    if (data.RoomMate_EntryApplicationID != null) this.roomMate_EntryApplicationID = parseInt(data.RoomMate_EntryApplicationID, 10);
    if (data.Confirmed != null) this.confirmed = data.Confirmed === 'true';
    if (data.Enforce != null) this.enforce = data.Enforce === 'true';
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
