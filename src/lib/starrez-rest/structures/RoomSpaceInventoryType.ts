// Generated from XML description of RoomSpaceInventoryType

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.RoomSpaceInventoryTypeID != null) this.roomSpaceInventoryTypeID = (data.RoomSpaceInventoryTypeID != null ? parseInt(data.RoomSpaceInventoryTypeID, 10) : data.RoomSpaceInventoryTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.DefaultChargeAmount != null) this.defaultChargeAmount = data.DefaultChargeAmount;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryType/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceInventoryType with id ${id}`);
    } else {
      return new RoomSpaceInventoryType(await response.text());
    }
  }
}

RoomSpaceInventoryType satisfies StarRezStructureStatic<RoomSpaceInventoryType>
