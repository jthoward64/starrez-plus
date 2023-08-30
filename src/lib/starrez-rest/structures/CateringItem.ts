// Generated from XML description of CateringItem

import { starRezXmlToJson } from "../parsing.js";

export class CateringItem {
  cateringItemID?: number;
  cateringID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  servingOrder?: number;
  optional?: boolean;
  quantityDefaultIsPercentage?: boolean;
  quantityDefault?: number;
  chargeFixed?: boolean;
  amountCost?: string;
  amount?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "CateringItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CateringItemID != null) this.cateringItemID = parseInt(data.CateringItemID, 10);
    if (data.CateringID != null) this.cateringID = parseInt(data.CateringID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.ServingOrder != null) this.servingOrder = parseInt(data.ServingOrder, 10);
    if (data.Optional != null) this.optional = data.Optional === 'true';
    if (data.QuantityDefaultIsPercentage != null) this.quantityDefaultIsPercentage = data.QuantityDefaultIsPercentage === 'true';
    if (data.QuantityDefault != null) this.quantityDefault = parseInt(data.QuantityDefault, 10);
    if (data.ChargeFixed != null) this.chargeFixed = data.ChargeFixed === 'true';
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
