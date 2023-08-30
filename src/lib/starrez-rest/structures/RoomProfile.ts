// Generated from XML description of RoomProfile

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomProfile | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomProfile/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomProfile with id ${id}`);
    } else {
      return new RoomProfile(await response.text());
    }
}

}
