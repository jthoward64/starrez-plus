// Generated from XML description of CateringItem

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a CateringItem by its ID or by exact match on other fields.
   * @param param Either the ID of the CateringItem to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single CateringItem object or null (if id) or an array of CateringItem objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<CateringItem | null>;
  static async select(param: Partial<Record<keyof CateringItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CateringItem[]>;
  static async select(param: number | Partial<Record<keyof CateringItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CateringItem | CateringItem[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CateringItem/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CateringItem`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch CateringItem with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new CateringItem(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new CateringItem(entry));
      }
    }
  }
}

CateringItem satisfies StarRezStructureStatic<CateringItem>
