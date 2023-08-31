// Generated from XML description of EventCharge

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EventCharge {
  eventChargeID?: number;
  eventID?: number;
  description?: string;
  chargeItemID?: number;
  transactionTypeEnum?: unknown;
  termSessionID?: number;
  amount?: string;
  amountCost?: string;
  comments?: string;
  posted?: boolean;
  tableName?: string;
  tableID?: number;
  chargeToEntry?: boolean;
  perEntry?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EventCharge");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EventChargeID != null) this.eventChargeID = (data.EventChargeID != null ? parseInt(data.EventChargeID, 10) : data.EventChargeID);
    if (data.EventID != null) this.eventID = (data.EventID != null ? parseInt(data.EventID, 10) : data.EventID);
    if (data.Description != null) this.description = data.Description;
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.TransactionTypeEnum != null) this.transactionTypeEnum = data.TransactionTypeEnum;
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Posted != null) this.posted = data.Posted === 'true';
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.ChargeToEntry != null) this.chargeToEntry = data.ChargeToEntry === 'true';
    if (data.PerEntry != null) this.perEntry = data.PerEntry === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EventCharge by its ID or by exact match on other fields.
   * @param param Either the ID of the EventCharge to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EventCharge object or null (if id) or an array of EventCharge objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EventCharge | null>;
  static async select(param: Partial<Record<keyof EventCharge, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EventCharge[]>;
  static async select(param: number | Partial<Record<keyof EventCharge, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EventCharge | EventCharge[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventCharge/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventCharge`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EventCharge with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EventCharge(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EventCharge(entry));
      }
    }
  }
}

EventCharge satisfies StarRezStructureStatic<EventCharge>
