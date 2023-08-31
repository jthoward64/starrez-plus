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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<TransactionTemplateItem | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionTemplateItem/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionTemplateItem with id ${id}`);
    } else {
      return new TransactionTemplateItem(await response.text());
    }
  }
}

TransactionTemplateItem satisfies StarRezStructureStatic<TransactionTemplateItem>
