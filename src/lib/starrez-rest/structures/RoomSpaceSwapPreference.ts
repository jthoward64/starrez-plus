// Generated from XML description of RoomSpaceSwapPreference

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.RoomSpaceSwapPreferenceID != null) this.roomSpaceSwapPreferenceID = (data.RoomSpaceSwapPreferenceID != null ? parseInt(data.RoomSpaceSwapPreferenceID, 10) : data.RoomSpaceSwapPreferenceID);
    if (data.BookingID != null) this.bookingID = (data.BookingID != null ? parseInt(data.BookingID, 10) : data.BookingID);
    if (data.RoomPreferenceID != null) this.roomPreferenceID = (data.RoomPreferenceID != null ? parseInt(data.RoomPreferenceID, 10) : data.RoomPreferenceID);
    if (data.Preference != null) this.preference = (data.Preference != null ? parseInt(data.Preference, 10) : data.Preference);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceSwapPreference | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceSwapPreference/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceSwapPreference with id ${id}`);
    } else {
      return new RoomSpaceSwapPreference(await response.text());
    }
  }
}

RoomSpaceSwapPreference satisfies StarRezStructureStatic<RoomSpaceSwapPreference>
