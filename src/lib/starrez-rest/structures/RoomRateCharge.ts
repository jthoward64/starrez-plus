// Generated from XML description of RoomRateCharge

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.RoomRateChargeID != null) this.roomRateChargeID = parseInt(data.RoomRateChargeID, 10);
    if (data.RoomRateSessionID != null) this.roomRateSessionID = parseInt(data.RoomRateSessionID, 10);
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.RoomTypeID != null) this.roomTypeID = parseInt(data.RoomTypeID, 10);
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountDouble != null) this.amountDouble = data.AmountDouble;
    if (data.AmountExtra != null) this.amountExtra = data.AmountExtra;
    if (data.AmountChildren != null) this.amountChildren = data.AmountChildren;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomRateCharge | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomRateCharge/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomRateCharge with id ${id}`);
    } else {
      return new RoomRateCharge(await response.text());
    }
}

}
