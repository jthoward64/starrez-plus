// Generated from XML description of CateringItem

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.CateringItemID != null) this.cateringItemID = (data.CateringItemID != null ? parseInt(data.CateringItemID, 10) : data.CateringItemID);
    if (data.CateringID != null) this.cateringID = (data.CateringID != null ? parseInt(data.CateringID, 10) : data.CateringID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.ServingOrder != null) this.servingOrder = (data.ServingOrder != null ? parseInt(data.ServingOrder, 10) : data.ServingOrder);
    if (data.Optional != null) this.optional = data.Optional === 'true';
    if (data.QuantityDefaultIsPercentage != null) this.quantityDefaultIsPercentage = data.QuantityDefaultIsPercentage === 'true';
    if (data.QuantityDefault != null) this.quantityDefault = (data.QuantityDefault != null ? parseInt(data.QuantityDefault, 10) : data.QuantityDefault);
    if (data.ChargeFixed != null) this.chargeFixed = data.ChargeFixed === 'true';
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<CateringItem | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CateringItem/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch CateringItem with id ${id}`);
    } else {
      return new CateringItem(await response.text());
    }
  }
}

CateringItem satisfies StarRezStructureStatic<CateringItem>
