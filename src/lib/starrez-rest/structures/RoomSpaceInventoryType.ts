// Generated from XML description of RoomSpaceInventoryType

import { starRezXmlToJson } from "../parsing.js";

export class RoomSpaceInventoryType {
  roomSpaceInventoryTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  chargeItemID?: number;
  defaultChargeAmount?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceInventoryType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceInventoryTypeID != null) this.roomSpaceInventoryTypeID = parseInt(data.RoomSpaceInventoryTypeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.DefaultChargeAmount != null) this.defaultChargeAmount = data.DefaultChargeAmount;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
