// Generated from XML description of RoomClassification

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class RoomClassification {
  roomClassificationID?: number;
  roomID?: number;
  classificationID?: number;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomClassification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomClassificationID != null) this.roomClassificationID = parseInt(data.RoomClassificationID, 10);
    if (data.RoomID != null) this.roomID = parseInt(data.RoomID, 10);
    if (data.ClassificationID != null) this.classificationID = parseInt(data.ClassificationID, 10);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomClassification | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomClassification/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomClassification with id ${id}`);
    } else {
      return new RoomClassification(await response.text());
    }
}

}
