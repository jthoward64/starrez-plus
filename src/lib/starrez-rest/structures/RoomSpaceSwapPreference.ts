// Generated from XML description of RoomSpaceSwapPreference

import { starRezXmlToJson } from "../parsing.js";

export class RoomSpaceSwapPreference {
  roomSpaceSwapPreferenceID?: number;
  bookingID?: number;
  roomPreferenceID?: number;
  preference?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceSwapPreference");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceSwapPreferenceID != null) this.roomSpaceSwapPreferenceID = parseInt(data.RoomSpaceSwapPreferenceID, 10);
    if (data.BookingID != null) this.bookingID = parseInt(data.BookingID, 10);
    if (data.RoomPreferenceID != null) this.roomPreferenceID = parseInt(data.RoomPreferenceID, 10);
    if (data.Preference != null) this.preference = parseInt(data.Preference, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
