// Generated from XML description of DeletedTransaction

import { starRezXmlToJson } from "../parsing.js";

export class DeletedTransaction {
  deletedTransactionID?: number;
  deleteDate?: Date;
  securityUserID?: number;
  machineName?: string;
  transactionID?: number;
  entryID?: number;
  chargeGroupID?: number;
  chargeItemID?: number;
  transactionDate?: Date;
  processedDate?: Date;
  dueDate?: Date | null;
  transactionTypeEnum?: unknown;
  description?: string;
  amount?: string;
  taxAmount?: string;
  taxAmount2?: string;
  taxAmount3?: string;
  extension?: number;
  duration?: number;
  tag?: string;
  tagFinance?: string;
  paymentID?: number;
  invoiceID?: number;
  endOfSessionID?: number;
  termSessionID?: number;
  externalID?: number;
  original_SecurityUserID?: number;
  original_CreatedBy_SecurityUserID?: number;
  tableID?: number;
  tableName?: string;
  callTypeEnum?: unknown;
  comments?: string;
  deleteComments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "DeletedTransaction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DeletedTransactionID != null) this.deletedTransactionID = parseInt(data.DeletedTransactionID, 10);
    if (data.DeleteDate != null) this.deleteDate = new Date(data.DeleteDate);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.TransactionID != null) this.transactionID = parseInt(data.TransactionID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ChargeGroupID != null) this.chargeGroupID = parseInt(data.ChargeGroupID, 10);
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.TransactionDate != null) this.transactionDate = new Date(data.TransactionDate);
    if (data.ProcessedDate != null) this.processedDate = new Date(data.ProcessedDate);
    if (data.DueDate != null) this.dueDate = new Date(data.DueDate);
    if (data.TransactionTypeEnum != null) this.transactionTypeEnum = data.TransactionTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.TaxAmount != null) this.taxAmount = data.TaxAmount;
    if (data.TaxAmount2 != null) this.taxAmount2 = data.TaxAmount2;
    if (data.TaxAmount3 != null) this.taxAmount3 = data.TaxAmount3;
    if (data.Extension != null) this.extension = parseInt(data.Extension, 10);
    if (data.Duration != null) this.duration = parseInt(data.Duration, 10);
    if (data.Tag != null) this.tag = data.Tag;
    if (data.TagFinance != null) this.tagFinance = data.TagFinance;
    if (data.PaymentID != null) this.paymentID = parseInt(data.PaymentID, 10);
    if (data.InvoiceID != null) this.invoiceID = parseInt(data.InvoiceID, 10);
    if (data.EndOfSessionID != null) this.endOfSessionID = parseInt(data.EndOfSessionID, 10);
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.ExternalID != null) this.externalID = parseInt(data.ExternalID, 10);
    if (data.Original_SecurityUserID != null) this.original_SecurityUserID = parseInt(data.Original_SecurityUserID, 10);
    if (data.Original_CreatedBy_SecurityUserID != null) this.original_CreatedBy_SecurityUserID = parseInt(data.Original_CreatedBy_SecurityUserID, 10);
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.CallTypeEnum != null) this.callTypeEnum = data.CallTypeEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DeleteComments != null) this.deleteComments = data.DeleteComments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
