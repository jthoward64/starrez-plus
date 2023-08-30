// Generated from XML description of WaitListRoomSpace

import { starRezXmlToJson } from "../parsing.js";

export class WaitListRoomSpace {
  waitListRoomSpaceID?: number;
  waitListID?: number;
  roomSpaceID?: number;
  waitListOrder?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WaitListRoomSpace");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WaitListRoomSpaceID != null) this.waitListRoomSpaceID = parseInt(data.WaitListRoomSpaceID, 10);
    if (data.WaitListID != null) this.waitListID = parseInt(data.WaitListID, 10);
    if (data.RoomSpaceID != null) this.roomSpaceID = parseInt(data.RoomSpaceID, 10);
    if (data.WaitListOrder != null) this.waitListOrder = parseInt(data.WaitListOrder, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
