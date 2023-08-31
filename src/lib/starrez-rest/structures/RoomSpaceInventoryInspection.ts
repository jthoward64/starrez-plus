// Generated from XML description of RoomSpaceInventoryInspection

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.RoomSpaceInventoryInspectionID != null) this.roomSpaceInventoryInspectionID = (data.RoomSpaceInventoryInspectionID != null ? parseInt(data.RoomSpaceInventoryInspectionID, 10) : data.RoomSpaceInventoryInspectionID);
    if (data.RoomSpaceInventoryInspectionRunID != null) this.roomSpaceInventoryInspectionRunID = (data.RoomSpaceInventoryInspectionRunID != null ? parseInt(data.RoomSpaceInventoryInspectionRunID, 10) : data.RoomSpaceInventoryInspectionRunID);
    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.InspectionStatusEnum != null) this.inspectionStatusEnum = data.InspectionStatusEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.DateInspected != null) this.dateInspected = (data.DateInspected != null ? new Date(data.DateInspected) : data.DateInspected);
    if (data.DateReviewed != null) this.dateReviewed = (data.DateReviewed != null ? new Date(data.DateReviewed) : data.DateReviewed);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Signature != null) this.signature = data.Signature;
    if (data.SignatureStaff != null) this.signatureStaff = data.SignatureStaff;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryInspection | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryInspection/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceInventoryInspection with id ${id}`);
    } else {
      return new RoomSpaceInventoryInspection(await response.text());
    }
  }
}

RoomSpaceInventoryInspection satisfies StarRezStructureStatic<RoomSpaceInventoryInspection>
