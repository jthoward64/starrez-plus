// Generated from XML description of RoomRateRoomTypeLocation

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomRateRoomTypeLocation {
  roomRateRoomTypeLocationID?: number;
  roomRateSessionID?: number;
  roomTypeID?: number;
  roomLocationID?: number;
  chargeItemID?: number;
  amount?: string;
  amountDouble?: string;
  amountExtra?: string;
  amountChildren?: string;
  amountCost?: string;
  amountDoubleCost?: string;
  amountExtraCost?: string;
  amountChildrenCost?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomRateRoomTypeLocation");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomRateRoomTypeLocationID != null) this.roomRateRoomTypeLocationID = (data.RoomRateRoomTypeLocationID != null ? parseInt(data.RoomRateRoomTypeLocationID, 10) : data.RoomRateRoomTypeLocationID);
    if (data.RoomRateSessionID != null) this.roomRateSessionID = (data.RoomRateSessionID != null ? parseInt(data.RoomRateSessionID, 10) : data.RoomRateSessionID);
    if (data.RoomTypeID != null) this.roomTypeID = (data.RoomTypeID != null ? parseInt(data.RoomTypeID, 10) : data.RoomTypeID);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountDouble != null) this.amountDouble = data.AmountDouble;
    if (data.AmountExtra != null) this.amountExtra = data.AmountExtra;
    if (data.AmountChildren != null) this.amountChildren = data.AmountChildren;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.AmountDoubleCost != null) this.amountDoubleCost = data.AmountDoubleCost;
    if (data.AmountExtraCost != null) this.amountExtraCost = data.AmountExtraCost;
    if (data.AmountChildrenCost != null) this.amountChildrenCost = data.AmountChildrenCost;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomRateRoomTypeLocation | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomRateRoomTypeLocation/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomRateRoomTypeLocation with id ${id}`);
    } else {
      return new RoomRateRoomTypeLocation(await response.text());
    }
  }
}

RoomRateRoomTypeLocation satisfies StarRezStructureStatic<RoomRateRoomTypeLocation>
