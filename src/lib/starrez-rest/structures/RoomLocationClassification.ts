// Generated from XML description of RoomLocationClassification

import { starRezXmlToJson } from "../parsing.js";

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
}
