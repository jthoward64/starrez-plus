// Generated from XML description of RoomSpaceInventoryInspection

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class RoomSpaceInventoryInspection {
  roomSpaceInventoryInspectionID?: number;
  roomSpaceInventoryInspectionRunID?: number;
  roomSpaceID?: number;
  entryID?: number;
  inspectionStatusEnum?: unknown;
  description?: string;
  dateInspected?: Date | null;
  dateReviewed?: Date | null;
  comments?: string;
  signature?: any | null;
  signatureStaff?: any | null;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceInventoryInspection");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceInventoryInspectionID != null) this.roomSpaceInventoryInspectionID = parseInt(data.RoomSpaceInventoryInspectionID, 10);
    if (data.RoomSpaceInventoryInspectionRunID != null) this.roomSpaceInventoryInspectionRunID = parseInt(data.RoomSpaceInventoryInspectionRunID, 10);
    if (data.RoomSpaceID != null) this.roomSpaceID = parseInt(data.RoomSpaceID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.InspectionStatusEnum != null) this.inspectionStatusEnum = data.InspectionStatusEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.DateInspected != null) this.dateInspected = new Date(data.DateInspected);
    if (data.DateReviewed != null) this.dateReviewed = new Date(data.DateReviewed);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Signature != null) this.signature = data.Signature;
    if (data.SignatureStaff != null) this.signatureStaff = data.SignatureStaff;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryInspection | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryInspection/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceInventoryInspection with id ${id}`);
    } else {
      return new RoomSpaceInventoryInspection(await response.text());
    }
}

}
