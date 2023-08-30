// Generated from XML description of RoomTermType

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomTermType {
  roomTermTypeID?: number;
  roomID?: number;
  termTypeID?: number;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomTermType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomTermTypeID != null) this.roomTermTypeID = parseInt(data.RoomTermTypeID, 10);
    if (data.RoomID != null) this.roomID = parseInt(data.RoomID, 10);
    if (data.TermTypeID != null) this.termTypeID = parseInt(data.TermTypeID, 10);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomTermType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomTermType/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomTermType with id ${id}`);
    } else {
      return new RoomTermType(await response.text());
    }
  }
}

RoomTermType satisfies StarRezStructureStatic<RoomTermType>
