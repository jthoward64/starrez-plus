// Generated from XML description of RoomLocationClassification

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomLocationClassification {
  roomLocationClassificationID?: number;
  roomLocationID?: number;
  classificationID?: number;
  maximumBookings?: number;
  roomSpacesUsed?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomLocationClassification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomLocationClassificationID != null) this.roomLocationClassificationID = parseInt(data.RoomLocationClassificationID, 10);
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.ClassificationID != null) this.classificationID = parseInt(data.ClassificationID, 10);
    if (data.MaximumBookings != null) this.maximumBookings = parseInt(data.MaximumBookings, 10);
    if (data.RoomSpacesUsed != null) this.roomSpacesUsed = parseInt(data.RoomSpacesUsed, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomLocationClassification | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomLocationClassification/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomLocationClassification with id ${id}`);
    } else {
      return new RoomLocationClassification(await response.text());
    }
  }
}

RoomLocationClassification satisfies StarRezStructureStatic<RoomLocationClassification>
