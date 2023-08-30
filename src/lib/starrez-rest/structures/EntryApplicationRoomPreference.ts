// Generated from XML description of EntryApplicationRoomPreference

import { starRezXmlToJson } from "../parsing.js";

export class EntryApplicationRoomPreference {
  entryApplicationRoomPreferenceID?: number;
  entryApplicationID?: number;
  roomPreferenceID?: number;
  preference?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryApplicationRoomPreference");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryApplicationRoomPreferenceID != null) this.entryApplicationRoomPreferenceID = parseInt(data.EntryApplicationRoomPreferenceID, 10);
    if (data.EntryApplicationID != null) this.entryApplicationID = parseInt(data.EntryApplicationID, 10);
    if (data.RoomPreferenceID != null) this.roomPreferenceID = parseInt(data.RoomPreferenceID, 10);
    if (data.Preference != null) this.preference = parseInt(data.Preference, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
