// Generated from XML description of RoomSpaceInventoryInspectionItem

import { starRezXmlToJson } from "../parsing.js";

export class RoomSpaceInventoryInspectionItem {
  roomSpaceInventoryInspectionItemID?: number;
  roomSpaceInventoryInspectionID?: number;
  roomSpaceInventoryID?: number;
  roomSpaceInventoryConditionID?: number;
  old_RoomSpaceInventoryConditionID?: number;
  transactionID?: number;
  inspected?: boolean;
  accepted?: boolean;
  reviewComments?: string;
  comments?: string;
  chargeable?: boolean;
  chargeAmount?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceInventoryInspectionItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceInventoryInspectionItemID != null) this.roomSpaceInventoryInspectionItemID = parseInt(data.RoomSpaceInventoryInspectionItemID, 10);
    if (data.RoomSpaceInventoryInspectionID != null) this.roomSpaceInventoryInspectionID = parseInt(data.RoomSpaceInventoryInspectionID, 10);
    if (data.RoomSpaceInventoryID != null) this.roomSpaceInventoryID = parseInt(data.RoomSpaceInventoryID, 10);
    if (data.RoomSpaceInventoryConditionID != null) this.roomSpaceInventoryConditionID = parseInt(data.RoomSpaceInventoryConditionID, 10);
    if (data.Old_RoomSpaceInventoryConditionID != null) this.old_RoomSpaceInventoryConditionID = parseInt(data.Old_RoomSpaceInventoryConditionID, 10);
    if (data.TransactionID != null) this.transactionID = parseInt(data.TransactionID, 10);
    if (data.Inspected != null) this.inspected = data.Inspected === 'true';
    if (data.Accepted != null) this.accepted = data.Accepted === 'true';
    if (data.ReviewComments != null) this.reviewComments = data.ReviewComments;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Chargeable != null) this.chargeable = data.Chargeable === 'true';
    if (data.ChargeAmount != null) this.chargeAmount = data.ChargeAmount;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
