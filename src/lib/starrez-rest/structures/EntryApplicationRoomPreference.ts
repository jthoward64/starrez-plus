// Generated from XML description of EntryApplicationRoomPreference

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.EntryApplicationRoomPreferenceID != null) this.entryApplicationRoomPreferenceID = (data.EntryApplicationRoomPreferenceID != null ? parseInt(data.EntryApplicationRoomPreferenceID, 10) : data.EntryApplicationRoomPreferenceID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.RoomPreferenceID != null) this.roomPreferenceID = (data.RoomPreferenceID != null ? parseInt(data.RoomPreferenceID, 10) : data.RoomPreferenceID);
    if (data.Preference != null) this.preference = (data.Preference != null ? parseInt(data.Preference, 10) : data.Preference);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryApplicationRoomPreference | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationRoomPreference/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryApplicationRoomPreference with id ${id}`);
    } else {
      return new EntryApplicationRoomPreference(await response.text());
    }
  }
}

EntryApplicationRoomPreference satisfies StarRezStructureStatic<EntryApplicationRoomPreference>
