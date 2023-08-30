// Generated from XML description of RoomSpaceInventoryInspectionItem

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.RoomSpaceInventoryInspectionItemID != null) this.roomSpaceInventoryInspectionItemID = (data.RoomSpaceInventoryInspectionItemID != null ? parseInt(data.RoomSpaceInventoryInspectionItemID, 10) : data.RoomSpaceInventoryInspectionItemID);
    if (data.RoomSpaceInventoryInspectionID != null) this.roomSpaceInventoryInspectionID = (data.RoomSpaceInventoryInspectionID != null ? parseInt(data.RoomSpaceInventoryInspectionID, 10) : data.RoomSpaceInventoryInspectionID);
    if (data.RoomSpaceInventoryID != null) this.roomSpaceInventoryID = (data.RoomSpaceInventoryID != null ? parseInt(data.RoomSpaceInventoryID, 10) : data.RoomSpaceInventoryID);
    if (data.RoomSpaceInventoryConditionID != null) this.roomSpaceInventoryConditionID = (data.RoomSpaceInventoryConditionID != null ? parseInt(data.RoomSpaceInventoryConditionID, 10) : data.RoomSpaceInventoryConditionID);
    if (data.Old_RoomSpaceInventoryConditionID != null) this.old_RoomSpaceInventoryConditionID = (data.Old_RoomSpaceInventoryConditionID != null ? parseInt(data.Old_RoomSpaceInventoryConditionID, 10) : data.Old_RoomSpaceInventoryConditionID);
    if (data.TransactionID != null) this.transactionID = (data.TransactionID != null ? parseInt(data.TransactionID, 10) : data.TransactionID);
    if (data.Inspected != null) this.inspected = data.Inspected === 'true';
    if (data.Accepted != null) this.accepted = data.Accepted === 'true';
    if (data.ReviewComments != null) this.reviewComments = data.ReviewComments;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Chargeable != null) this.chargeable = data.Chargeable === 'true';
    if (data.ChargeAmount != null) this.chargeAmount = data.ChargeAmount;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryInspectionItem | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryInspectionItem/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceInventoryInspectionItem with id ${id}`);
    } else {
      return new RoomSpaceInventoryInspectionItem(await response.text());
    }
  }
}

RoomSpaceInventoryInspectionItem satisfies StarRezStructureStatic<RoomSpaceInventoryInspectionItem>
