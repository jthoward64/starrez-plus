// Generated from XML description of FunctionBookingCharge

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionBookingCharge {
  functionBookingChargeID?: number;
  functionBookingID?: number;
  description?: string;
  functionChargeTypeEnum?: unknown;
  chargeToEntry?: boolean;
  perEntry?: boolean;
  chargeItemID?: number;
  transactionTypeEnum?: unknown;
  termSessionID?: number;
  amount?: string;
  amountCost?: string;
  comments?: string;
  posted?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionBookingCharge");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionBookingChargeID != null) this.functionBookingChargeID = (data.FunctionBookingChargeID != null ? parseInt(data.FunctionBookingChargeID, 10) : data.FunctionBookingChargeID);
    if (data.FunctionBookingID != null) this.functionBookingID = (data.FunctionBookingID != null ? parseInt(data.FunctionBookingID, 10) : data.FunctionBookingID);
    if (data.Description != null) this.description = data.Description;
    if (data.FunctionChargeTypeEnum != null) this.functionChargeTypeEnum = data.FunctionChargeTypeEnum;
    if (data.ChargeToEntry != null) this.chargeToEntry = data.ChargeToEntry === 'true';
    if (data.PerEntry != null) this.perEntry = data.PerEntry === 'true';
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.TransactionTypeEnum != null) this.transactionTypeEnum = data.TransactionTypeEnum;
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Posted != null) this.posted = data.Posted === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a FunctionBookingCharge by its ID or by exact match on other fields.
   * @param param Either the ID of the FunctionBookingCharge to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FunctionBookingCharge object or null (if id) or an array of FunctionBookingCharge objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FunctionBookingCharge | null>;
  static async select(param: Partial<Record<keyof FunctionBookingCharge, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionBookingCharge[]>;
  static async select(param: number | Partial<Record<keyof FunctionBookingCharge, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionBookingCharge | FunctionBookingCharge[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBookingCharge/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBookingCharge`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionBookingCharge with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FunctionBookingCharge(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FunctionBookingCharge(entry));
      }
    }
  }
}

FunctionBookingCharge satisfies StarRezStructureStatic<FunctionBookingCharge>
