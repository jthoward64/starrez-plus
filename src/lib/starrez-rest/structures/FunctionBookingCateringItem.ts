// Generated from XML description of FunctionBookingCateringItem

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

    if (data.FunctionBookingCateringItemID != null) this.functionBookingCateringItemID = (data.FunctionBookingCateringItemID != null ? parseInt(data.FunctionBookingCateringItemID, 10) : data.FunctionBookingCateringItemID);
    if (data.FunctionBookingCateringID != null) this.functionBookingCateringID = (data.FunctionBookingCateringID != null ? parseInt(data.FunctionBookingCateringID, 10) : data.FunctionBookingCateringID);
    if (data.CateringItemID != null) this.cateringItemID = (data.CateringItemID != null ? parseInt(data.CateringItemID, 10) : data.CateringItemID);
    if (data.Description != null) this.description = data.Description;
    if (data.ServingOrder != null) this.servingOrder = (data.ServingOrder != null ? parseInt(data.ServingOrder, 10) : data.ServingOrder);
    if (data.Quantity != null) this.quantity = (data.Quantity != null ? parseInt(data.Quantity, 10) : data.Quantity);
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

  /**
   * Fetches a FunctionBookingCateringItem by its ID or by exact match on other fields.
   * @param param Either the ID of the FunctionBookingCateringItem to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FunctionBookingCateringItem object or null (if id) or an array of FunctionBookingCateringItem objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FunctionBookingCateringItem | null>;
  static async select(param: Partial<Record<keyof FunctionBookingCateringItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionBookingCateringItem[]>;
  static async select(param: number | Partial<Record<keyof FunctionBookingCateringItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionBookingCateringItem | FunctionBookingCateringItem[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBookingCateringItem/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBookingCateringItem`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionBookingCateringItem with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FunctionBookingCateringItem(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FunctionBookingCateringItem(entry));
      }
    }
  }
}

FunctionBookingCateringItem satisfies StarRezStructureStatic<FunctionBookingCateringItem>
