// Generated from XML description of EventQuote

import { starRezXmlToJson } from "../parsing.js";
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

    if (data.EventQuoteID != null) this.eventQuoteID = parseInt(data.EventQuoteID, 10);
    if (data.EventID != null) this.eventID = parseInt(data.EventID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.RateDescription != null) this.rateDescription = data.RateDescription;
    if (data.QuoteGroup != null) this.quoteGroup = data.QuoteGroup;
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.TransactionTypeEnum != null) this.transactionTypeEnum = data.TransactionTypeEnum;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.TaxAmount != null) this.taxAmount = data.TaxAmount;
    if (data.TaxAmount2 != null) this.taxAmount2 = data.TaxAmount2;
    if (data.TaxAmount3 != null) this.taxAmount3 = data.TaxAmount3;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.PerEntry != null) this.perEntry = data.PerEntry === 'true';
    if (data.ChargeToEntry != null) this.chargeToEntry = data.ChargeToEntry === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EventQuote | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventQuote/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EventQuote with id ${id}`);
    } else {
      return new EventQuote(await response.text());
    }
  }
}

EventQuote satisfies StarRezStructureStatic<EventQuote>
