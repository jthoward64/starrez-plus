// Generated from XML description of WaitListRoomSpace

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.WaitListRoomSpaceID != null) this.waitListRoomSpaceID = (data.WaitListRoomSpaceID != null ? parseInt(data.WaitListRoomSpaceID, 10) : data.WaitListRoomSpaceID);
    if (data.WaitListID != null) this.waitListID = (data.WaitListID != null ? parseInt(data.WaitListID, 10) : data.WaitListID);
    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
    if (data.WaitListOrder != null) this.waitListOrder = (data.WaitListOrder != null ? parseInt(data.WaitListOrder, 10) : data.WaitListOrder);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WaitListRoomSpace | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitListRoomSpace/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WaitListRoomSpace with id ${id}`);
    } else {
      return new WaitListRoomSpace(await response.text());
    }
  }
}

WaitListRoomSpace satisfies StarRezStructureStatic<WaitListRoomSpace>
