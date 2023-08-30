// Generated from XML description of EventCharge

import { starRezXmlToJson } from "../parsing.js";
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

    if (data.EventChargeID != null) this.eventChargeID = parseInt(data.EventChargeID, 10);
    if (data.EventID != null) this.eventID = parseInt(data.EventID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.TransactionTypeEnum != null) this.transactionTypeEnum = data.TransactionTypeEnum;
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Posted != null) this.posted = data.Posted === 'true';
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.ChargeToEntry != null) this.chargeToEntry = data.ChargeToEntry === 'true';
    if (data.PerEntry != null) this.perEntry = data.PerEntry === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EventCharge | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventCharge/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EventCharge with id ${id}`);
    } else {
      return new EventCharge(await response.text());
    }
  }
}

EventCharge satisfies StarRezStructureStatic<EventCharge>
