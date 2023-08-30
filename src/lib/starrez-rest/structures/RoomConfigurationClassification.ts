// Generated from XML description of RoomConfigurationClassification

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomConfigurationClassification {
  roomConfigurationClassificationID?: number;
  roomConfigurationID?: number;
  classificationID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomConfigurationClassification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomConfigurationClassificationID != null) this.roomConfigurationClassificationID = parseInt(data.RoomConfigurationClassificationID, 10);
    if (data.RoomConfigurationID != null) this.roomConfigurationID = parseInt(data.RoomConfigurationID, 10);
    if (data.ClassificationID != null) this.classificationID = parseInt(data.ClassificationID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationClassification | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationClassification/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomConfigurationClassification with id ${id}`);
    } else {
      return new RoomConfigurationClassification(await response.text());
    }
  }
}

RoomConfigurationClassification satisfies StarRezStructureStatic<RoomConfigurationClassification>
