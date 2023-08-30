// Generated from XML description of RoomConfigurationProfile

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationProfile | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationProfile/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomConfigurationProfile with id ${id}`);
    } else {
      return new RoomConfigurationProfile(await response.text());
    }
  }
}

RoomConfigurationProfile satisfies StarRezStructureStatic<RoomConfigurationProfile>
