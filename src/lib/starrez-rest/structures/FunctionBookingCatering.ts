// Generated from XML description of FunctionBookingCatering

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.FunctionBookingCateringID != null) this.functionBookingCateringID = parseInt(data.FunctionBookingCateringID, 10);
    if (data.FunctionBookingID != null) this.functionBookingID = parseInt(data.FunctionBookingID, 10);
    if (data.CateringID != null) this.cateringID = parseInt(data.CateringID, 10);
    if (data.FunctionChargeTypeEnum != null) this.functionChargeTypeEnum = data.FunctionChargeTypeEnum;
    if (data.ChargeToEntry != null) this.chargeToEntry = data.ChargeToEntry === 'true';
    if (data.PerEntry != null) this.perEntry = data.PerEntry === 'true';
    if (data.Description != null) this.description = data.Description;
    if (data.CateringDescription != null) this.cateringDescription = data.CateringDescription;
    if (data.ServingTime != null) this.servingTime = new Date(data.ServingTime);
    if (data.ServingDuration != null) this.servingDuration = parseInt(data.ServingDuration, 10);
    if (data.Location != null) this.location = data.Location;
    if (data.FunctionRoomID != null) this.functionRoomID = parseInt(data.FunctionRoomID, 10);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
