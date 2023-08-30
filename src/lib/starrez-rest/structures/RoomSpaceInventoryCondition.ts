// Generated from XML description of RoomSpaceInventoryCondition

import { starRezXmlToJson } from "../parsing.js";

export class RoomSpaceInventoryCondition {
  roomSpaceInventoryConditionID?: number;
  recordTypeEnum?: unknown;
  roomSpaceInventoryTypeID?: number;
  conditionOrder?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceInventoryCondition");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceInventoryConditionID != null) this.roomSpaceInventoryConditionID = parseInt(data.RoomSpaceInventoryConditionID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.RoomSpaceInventoryTypeID != null) this.roomSpaceInventoryTypeID = parseInt(data.RoomSpaceInventoryTypeID, 10);
    if (data.ConditionOrder != null) this.conditionOrder = parseInt(data.ConditionOrder, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
