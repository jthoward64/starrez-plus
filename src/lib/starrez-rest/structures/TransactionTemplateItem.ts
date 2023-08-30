// Generated from XML description of TransactionTemplateItem

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.TransactionTemplateItemID != null) this.transactionTemplateItemID = parseInt(data.TransactionTemplateItemID, 10);
    if (data.TransactionTemplateID != null) this.transactionTemplateID = parseInt(data.TransactionTemplateID, 10);
    if (data.ChargeGroupID != null) this.chargeGroupID = parseInt(data.ChargeGroupID, 10);
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.TransactionTypeEnum != null) this.transactionTypeEnum = data.TransactionTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.AutoPayOverride != null) this.autoPayOverride = data.AutoPayOverride === 'true';
    if (data.Amount != null) this.amount = data.Amount;
    if (data.DueDate != null) this.dueDate = new Date(data.DueDate);
    if (data.Tag != null) this.tag = data.Tag;
    if (data.TagFinance != null) this.tagFinance = data.TagFinance;
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
