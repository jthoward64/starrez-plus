// Generated from XML description of RoomProfile

import { starRezXmlToJson } from "../parsing.js";

export class RoomProfile {
  roomProfileID?: number;
  roomID?: number;
  profileItemID?: number;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomProfileID != null) this.roomProfileID = parseInt(data.RoomProfileID, 10);
    if (data.RoomID != null) this.roomID = parseInt(data.RoomID, 10);
    if (data.ProfileItemID != null) this.profileItemID = parseInt(data.ProfileItemID, 10);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
