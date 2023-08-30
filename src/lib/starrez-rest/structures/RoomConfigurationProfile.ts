// Generated from XML description of RoomConfigurationProfile

import { starRezXmlToJson } from "../parsing.js";

export class RoomConfigurationProfile {
  roomConfigurationProfileID?: number;
  roomConfigurationID?: number;
  profileItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomConfigurationProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomConfigurationProfileID != null) this.roomConfigurationProfileID = parseInt(data.RoomConfigurationProfileID, 10);
    if (data.RoomConfigurationID != null) this.roomConfigurationID = parseInt(data.RoomConfigurationID, 10);
    if (data.ProfileItemID != null) this.profileItemID = parseInt(data.ProfileItemID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
