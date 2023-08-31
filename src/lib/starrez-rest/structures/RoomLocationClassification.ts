// Generated from XML description of RoomLocationClassification

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

    if (data.RoomLocationClassificationID != null) this.roomLocationClassificationID = (data.RoomLocationClassificationID != null ? parseInt(data.RoomLocationClassificationID, 10) : data.RoomLocationClassificationID);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.ClassificationID != null) this.classificationID = (data.ClassificationID != null ? parseInt(data.ClassificationID, 10) : data.ClassificationID);
    if (data.MaximumBookings != null) this.maximumBookings = (data.MaximumBookings != null ? parseInt(data.MaximumBookings, 10) : data.MaximumBookings);
    if (data.RoomSpacesUsed != null) this.roomSpacesUsed = (data.RoomSpacesUsed != null ? parseInt(data.RoomSpacesUsed, 10) : data.RoomSpacesUsed);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomLocationClassification | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomLocationClassification/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomLocationClassification with id ${id}`);
    } else {
      return new RoomLocationClassification(await response.text());
    }
  }
}

RoomLocationClassification satisfies StarRezStructureStatic<RoomLocationClassification>
