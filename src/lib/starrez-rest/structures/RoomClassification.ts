// Generated from XML description of RoomClassification

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomClassification {
  roomClassificationID?: number;
  roomID?: number;
  classificationID?: number;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomClassification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomClassificationID != null) this.roomClassificationID = (data.RoomClassificationID != null ? parseInt(data.RoomClassificationID, 10) : data.RoomClassificationID);
    if (data.RoomID != null) this.roomID = (data.RoomID != null ? parseInt(data.RoomID, 10) : data.RoomID);
    if (data.ClassificationID != null) this.classificationID = (data.ClassificationID != null ? parseInt(data.ClassificationID, 10) : data.ClassificationID);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomClassification | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomClassification/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomClassification with id ${id}`);
    } else {
      return new RoomClassification(await response.text());
    }
  }
}

RoomClassification satisfies StarRezStructureStatic<RoomClassification>
