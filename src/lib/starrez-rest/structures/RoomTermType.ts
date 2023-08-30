// Generated from XML description of RoomTermType

import { starRezXmlToJson } from "../parsing.js";

export class RoomTermType {
  roomTermTypeID?: number;
  roomID?: number;
  termTypeID?: number;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomTermType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomTermTypeID != null) this.roomTermTypeID = parseInt(data.RoomTermTypeID, 10);
    if (data.RoomID != null) this.roomID = parseInt(data.RoomID, 10);
    if (data.TermTypeID != null) this.termTypeID = parseInt(data.TermTypeID, 10);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
