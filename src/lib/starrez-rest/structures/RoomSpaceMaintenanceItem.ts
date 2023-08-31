// Generated from XML description of RoomSpaceMaintenanceItem

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceMaintenanceItem {
  roomSpaceMaintenanceItemID?: number;
  recordTypeEnum?: unknown;
  roomSpaceMaintenanceCategoryID?: number;
  description?: string;
  comments?: string;
  viewOnWeb?: boolean;
  defaultChargeAmount?: string;
  chargeItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceMaintenanceItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceMaintenanceItemID != null) this.roomSpaceMaintenanceItemID = (data.RoomSpaceMaintenanceItemID != null ? parseInt(data.RoomSpaceMaintenanceItemID, 10) : data.RoomSpaceMaintenanceItemID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.RoomSpaceMaintenanceCategoryID != null) this.roomSpaceMaintenanceCategoryID = (data.RoomSpaceMaintenanceCategoryID != null ? parseInt(data.RoomSpaceMaintenanceCategoryID, 10) : data.RoomSpaceMaintenanceCategoryID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.DefaultChargeAmount != null) this.defaultChargeAmount = data.DefaultChargeAmount;
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenanceItem | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceMaintenanceItem/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceMaintenanceItem with id ${id}`);
    } else {
      return new RoomSpaceMaintenanceItem(await response.text());
    }
  }
}

RoomSpaceMaintenanceItem satisfies StarRezStructureStatic<RoomSpaceMaintenanceItem>
