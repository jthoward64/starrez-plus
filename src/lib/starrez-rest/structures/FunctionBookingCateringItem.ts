// Generated from XML description of FunctionBookingCateringItem

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionBookingCateringItem {
  functionBookingCateringItemID?: number;
  functionBookingCateringID?: number;
  cateringItemID?: number;
  description?: string;
  servingOrder?: number;
  quantity?: number;
  chargeFixed?: boolean;
  amountCost?: string;
  amount?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionBookingCateringItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionBookingCateringItemID != null) this.functionBookingCateringItemID = parseInt(data.FunctionBookingCateringItemID, 10);
    if (data.FunctionBookingCateringID != null) this.functionBookingCateringID = parseInt(data.FunctionBookingCateringID, 10);
    if (data.CateringItemID != null) this.cateringItemID = parseInt(data.CateringItemID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.ServingOrder != null) this.servingOrder = parseInt(data.ServingOrder, 10);
    if (data.Quantity != null) this.quantity = parseInt(data.Quantity, 10);
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FunctionBookingCateringItem | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBookingCateringItem/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionBookingCateringItem with id ${id}`);
    } else {
      return new FunctionBookingCateringItem(await response.text());
    }
  }
}

FunctionBookingCateringItem satisfies StarRezStructureStatic<FunctionBookingCateringItem>
