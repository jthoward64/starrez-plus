// Generated from XML description of EventQuote

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EventQuote {
  eventQuoteID?: number;
  eventID?: number;
  description?: string;
  rateDescription?: string;
  quoteGroup?: string;
  chargeItemID?: number;
  transactionTypeEnum?: unknown;
  amount?: string;
  amountCost?: string;
  taxAmount?: string;
  taxAmount2?: string;
  taxAmount3?: string;
  comments?: string;
  tableName?: string;
  tableID?: number;
  perEntry?: boolean;
  chargeToEntry?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EventQuote");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EventQuoteID != null) this.eventQuoteID = (data.EventQuoteID != null ? parseInt(data.EventQuoteID, 10) : data.EventQuoteID);
    if (data.EventID != null) this.eventID = (data.EventID != null ? parseInt(data.EventID, 10) : data.EventID);
    if (data.Description != null) this.description = data.Description;
    if (data.RateDescription != null) this.rateDescription = data.RateDescription;
    if (data.QuoteGroup != null) this.quoteGroup = data.QuoteGroup;
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.TransactionTypeEnum != null) this.transactionTypeEnum = data.TransactionTypeEnum;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.TaxAmount != null) this.taxAmount = data.TaxAmount;
    if (data.TaxAmount2 != null) this.taxAmount2 = data.TaxAmount2;
    if (data.TaxAmount3 != null) this.taxAmount3 = data.TaxAmount3;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.PerEntry != null) this.perEntry = data.PerEntry === 'true';
    if (data.ChargeToEntry != null) this.chargeToEntry = data.ChargeToEntry === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EventQuote by its ID or by exact match on other fields.
   * @param param Either the ID of the EventQuote to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EventQuote object or null (if id) or an array of EventQuote objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EventQuote | null>;
  static async select(param: Partial<Record<keyof EventQuote, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EventQuote[]>;
  static async select(param: number | Partial<Record<keyof EventQuote, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EventQuote | EventQuote[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventQuote/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventQuote`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EventQuote with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EventQuote(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EventQuote(entry));
      }
    }
  }
}

EventQuote satisfies StarRezStructureStatic<EventQuote>
