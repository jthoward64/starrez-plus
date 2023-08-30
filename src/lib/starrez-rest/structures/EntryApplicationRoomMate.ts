// Generated from XML description of EntryApplicationRoomMate

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.EntryApplicationRoomMateID != null) this.entryApplicationRoomMateID = (data.EntryApplicationRoomMateID != null ? parseInt(data.EntryApplicationRoomMateID, 10) : data.EntryApplicationRoomMateID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.SortOrder != null) this.sortOrder = (data.SortOrder != null ? parseInt(data.SortOrder, 10) : data.SortOrder);
    if (data.RoomMate_EntryApplicationID != null) this.roomMate_EntryApplicationID = (data.RoomMate_EntryApplicationID != null ? parseInt(data.RoomMate_EntryApplicationID, 10) : data.RoomMate_EntryApplicationID);
    if (data.Confirmed != null) this.confirmed = data.Confirmed === 'true';
    if (data.Enforce != null) this.enforce = data.Enforce === 'true';
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryApplicationRoomMate | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationRoomMate/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryApplicationRoomMate with id ${id}`);
    } else {
      return new EntryApplicationRoomMate(await response.text());
    }
  }
}

EntryApplicationRoomMate satisfies StarRezStructureStatic<EntryApplicationRoomMate>
