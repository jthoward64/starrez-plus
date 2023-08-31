// Generated from XML description of FunctionBookingCatering

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionBookingCatering {
  functionBookingCateringID?: number;
  functionBookingID?: number;
  cateringID?: number;
  functionChargeTypeEnum?: unknown;
  chargeToEntry?: boolean;
  perEntry?: boolean;
  description?: string;
  cateringDescription?: string;
  servingTime?: Date;
  servingDuration?: number;
  location?: string;
  functionRoomID?: number;
  amount?: string;
  amountCost?: string;
  chargeItemID?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionBookingCatering");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionBookingCateringID != null) this.functionBookingCateringID = (data.FunctionBookingCateringID != null ? parseInt(data.FunctionBookingCateringID, 10) : data.FunctionBookingCateringID);
    if (data.FunctionBookingID != null) this.functionBookingID = (data.FunctionBookingID != null ? parseInt(data.FunctionBookingID, 10) : data.FunctionBookingID);
    if (data.CateringID != null) this.cateringID = (data.CateringID != null ? parseInt(data.CateringID, 10) : data.CateringID);
    if (data.FunctionChargeTypeEnum != null) this.functionChargeTypeEnum = data.FunctionChargeTypeEnum;
    if (data.ChargeToEntry != null) this.chargeToEntry = data.ChargeToEntry === 'true';
    if (data.PerEntry != null) this.perEntry = data.PerEntry === 'true';
    if (data.Description != null) this.description = data.Description;
    if (data.CateringDescription != null) this.cateringDescription = data.CateringDescription;
    if (data.ServingTime != null) this.servingTime = (data.ServingTime != null ? new Date(data.ServingTime) : data.ServingTime);
    if (data.ServingDuration != null) this.servingDuration = (data.ServingDuration != null ? parseInt(data.ServingDuration, 10) : data.ServingDuration);
    if (data.Location != null) this.location = data.Location;
    if (data.FunctionRoomID != null) this.functionRoomID = (data.FunctionRoomID != null ? parseInt(data.FunctionRoomID, 10) : data.FunctionRoomID);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FunctionBookingCatering | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBookingCatering/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionBookingCatering with id ${id}`);
    } else {
      return new FunctionBookingCatering(await response.text());
    }
  }
}

FunctionBookingCatering satisfies StarRezStructureStatic<FunctionBookingCatering>
