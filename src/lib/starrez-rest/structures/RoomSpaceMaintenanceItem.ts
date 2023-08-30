// Generated from XML description of RoomSpaceMaintenanceItem

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.RoomSpaceMaintenanceItemID != null) this.roomSpaceMaintenanceItemID = parseInt(data.RoomSpaceMaintenanceItemID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.RoomSpaceMaintenanceCategoryID != null) this.roomSpaceMaintenanceCategoryID = parseInt(data.RoomSpaceMaintenanceCategoryID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.DefaultChargeAmount != null) this.defaultChargeAmount = data.DefaultChargeAmount;
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
