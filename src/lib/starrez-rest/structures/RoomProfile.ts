// Generated from XML description of RoomProfile

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomProfile {
  roomProfileID?: number;
  roomID?: number;
  profileItemID?: number;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomProfileID != null) this.roomProfileID = (data.RoomProfileID != null ? parseInt(data.RoomProfileID, 10) : data.RoomProfileID);
    if (data.RoomID != null) this.roomID = (data.RoomID != null ? parseInt(data.RoomID, 10) : data.RoomID);
    if (data.ProfileItemID != null) this.profileItemID = (data.ProfileItemID != null ? parseInt(data.ProfileItemID, 10) : data.ProfileItemID);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomProfile | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomProfile/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomProfile with id ${id}`);
    } else {
      return new RoomProfile(await response.text());
    }
  }
}

RoomProfile satisfies StarRezStructureStatic<RoomProfile>
