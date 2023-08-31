// Generated from XML description of RoomRateCharge

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomRateCharge {
  roomRateChargeID?: number;
  roomRateSessionID?: number;
  chargeItemID?: number;
  roomTypeID?: number;
  roomLocationID?: number;
  description?: string;
  amount?: string;
  amountDouble?: string;
  amountExtra?: string;
  amountChildren?: string;
  amountCost?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomRateCharge");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomRateChargeID != null) this.roomRateChargeID = (data.RoomRateChargeID != null ? parseInt(data.RoomRateChargeID, 10) : data.RoomRateChargeID);
    if (data.RoomRateSessionID != null) this.roomRateSessionID = (data.RoomRateSessionID != null ? parseInt(data.RoomRateSessionID, 10) : data.RoomRateSessionID);
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.RoomTypeID != null) this.roomTypeID = (data.RoomTypeID != null ? parseInt(data.RoomTypeID, 10) : data.RoomTypeID);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.Description != null) this.description = data.Description;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountDouble != null) this.amountDouble = data.AmountDouble;
    if (data.AmountExtra != null) this.amountExtra = data.AmountExtra;
    if (data.AmountChildren != null) this.amountChildren = data.AmountChildren;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomRateCharge | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomRateCharge/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomRateCharge with id ${id}`);
    } else {
      return new RoomRateCharge(await response.text());
    }
  }
}

RoomRateCharge satisfies StarRezStructureStatic<RoomRateCharge>
