// Generated from XML description of TransactionTemplateItem

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TransactionTemplateItem {
  transactionTemplateItemID?: number;
  transactionTemplateID?: number;
  chargeGroupID?: number;
  chargeItemID?: number;
  transactionTypeEnum?: unknown;
  description?: string;
  autoPayOverride?: boolean;
  amount?: string;
  dueDate?: Date | null;
  tag?: string;
  tagFinance?: string;
  termSessionID?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TransactionTemplateItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TransactionTemplateItemID != null) this.transactionTemplateItemID = (data.TransactionTemplateItemID != null ? parseInt(data.TransactionTemplateItemID, 10) : data.TransactionTemplateItemID);
    if (data.TransactionTemplateID != null) this.transactionTemplateID = (data.TransactionTemplateID != null ? parseInt(data.TransactionTemplateID, 10) : data.TransactionTemplateID);
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.TransactionTypeEnum != null) this.transactionTypeEnum = data.TransactionTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.AutoPayOverride != null) this.autoPayOverride = data.AutoPayOverride === 'true';
    if (data.Amount != null) this.amount = data.Amount;
    if (data.DueDate != null) this.dueDate = (data.DueDate != null ? new Date(data.DueDate) : data.DueDate);
    if (data.Tag != null) this.tag = data.Tag;
    if (data.TagFinance != null) this.tagFinance = data.TagFinance;
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a TransactionTemplateItem by its ID or by exact match on other fields.
   * @param param Either the ID of the TransactionTemplateItem to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TransactionTemplateItem object or null (if id) or an array of TransactionTemplateItem objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TransactionTemplateItem | null>;
  static async select(param: Partial<Record<keyof TransactionTemplateItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TransactionTemplateItem[]>;
  static async select(param: number | Partial<Record<keyof TransactionTemplateItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TransactionTemplateItem | TransactionTemplateItem[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionTemplateItem/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionTemplateItem`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionTemplateItem with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TransactionTemplateItem(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TransactionTemplateItem(entry));
      }
    }
  }
}

TransactionTemplateItem satisfies StarRezStructureStatic<TransactionTemplateItem>
