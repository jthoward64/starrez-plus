// Generated from XML description of RoomConfigurationTermType

import { starRezXmlToJson } from "../parsing.js";

export class RoomConfigurationTermType {
  roomConfigurationTermTypeID?: number;
  roomConfigurationID?: number;
  termTypeID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomConfigurationTermType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomConfigurationTermTypeID != null) this.roomConfigurationTermTypeID = parseInt(data.RoomConfigurationTermTypeID, 10);
    if (data.RoomConfigurationID != null) this.roomConfigurationID = parseInt(data.RoomConfigurationID, 10);
    if (data.TermTypeID != null) this.termTypeID = parseInt(data.TermTypeID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
