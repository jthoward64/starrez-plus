// Generated from XML description of RoomConfigurationRoomSort

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomConfigurationRoomSort {
  roomConfigurationRoomSortID?: number;
  isBestMatchWhenNoRoomProfile?: boolean;
  roomConfigurationID?: number;
  roomSortProfileItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomConfigurationRoomSort");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomConfigurationRoomSortID != null) this.roomConfigurationRoomSortID = parseInt(data.RoomConfigurationRoomSortID, 10);
    if (data.IsBestMatchWhenNoRoomProfile != null) this.isBestMatchWhenNoRoomProfile = data.IsBestMatchWhenNoRoomProfile === 'true';
    if (data.RoomConfigurationID != null) this.roomConfigurationID = parseInt(data.RoomConfigurationID, 10);
    if (data.RoomSortProfileItemID != null) this.roomSortProfileItemID = parseInt(data.RoomSortProfileItemID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationRoomSort | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationRoomSort/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomConfigurationRoomSort with id ${id}`);
    } else {
      return new RoomConfigurationRoomSort(await response.text());
    }
  }
}

RoomConfigurationRoomSort satisfies StarRezStructureStatic<RoomConfigurationRoomSort>
