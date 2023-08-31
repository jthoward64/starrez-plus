// Generated from XML description of DeletedTransaction

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.DeletedTransactionID != null) this.deletedTransactionID = (data.DeletedTransactionID != null ? parseInt(data.DeletedTransactionID, 10) : data.DeletedTransactionID);
    if (data.DeleteDate != null) this.deleteDate = (data.DeleteDate != null ? new Date(data.DeleteDate) : data.DeleteDate);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.TransactionID != null) this.transactionID = (data.TransactionID != null ? parseInt(data.TransactionID, 10) : data.TransactionID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.TransactionDate != null) this.transactionDate = (data.TransactionDate != null ? new Date(data.TransactionDate) : data.TransactionDate);
    if (data.ProcessedDate != null) this.processedDate = (data.ProcessedDate != null ? new Date(data.ProcessedDate) : data.ProcessedDate);
    if (data.DueDate != null) this.dueDate = (data.DueDate != null ? new Date(data.DueDate) : data.DueDate);
    if (data.TransactionTypeEnum != null) this.transactionTypeEnum = data.TransactionTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.TaxAmount != null) this.taxAmount = data.TaxAmount;
    if (data.TaxAmount2 != null) this.taxAmount2 = data.TaxAmount2;
    if (data.TaxAmount3 != null) this.taxAmount3 = data.TaxAmount3;
    if (data.Extension != null) this.extension = (data.Extension != null ? parseInt(data.Extension, 10) : data.Extension);
    if (data.Duration != null) this.duration = (data.Duration != null ? parseInt(data.Duration, 10) : data.Duration);
    if (data.Tag != null) this.tag = data.Tag;
    if (data.TagFinance != null) this.tagFinance = data.TagFinance;
    if (data.PaymentID != null) this.paymentID = (data.PaymentID != null ? parseInt(data.PaymentID, 10) : data.PaymentID);
    if (data.InvoiceID != null) this.invoiceID = (data.InvoiceID != null ? parseInt(data.InvoiceID, 10) : data.InvoiceID);
    if (data.EndOfSessionID != null) this.endOfSessionID = (data.EndOfSessionID != null ? parseInt(data.EndOfSessionID, 10) : data.EndOfSessionID);
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.ExternalID != null) this.externalID = (data.ExternalID != null ? parseInt(data.ExternalID, 10) : data.ExternalID);
    if (data.Original_SecurityUserID != null) this.original_SecurityUserID = (data.Original_SecurityUserID != null ? parseInt(data.Original_SecurityUserID, 10) : data.Original_SecurityUserID);
    if (data.Original_CreatedBy_SecurityUserID != null) this.original_CreatedBy_SecurityUserID = (data.Original_CreatedBy_SecurityUserID != null ? parseInt(data.Original_CreatedBy_SecurityUserID, 10) : data.Original_CreatedBy_SecurityUserID);
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.CallTypeEnum != null) this.callTypeEnum = data.CallTypeEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DeleteComments != null) this.deleteComments = data.DeleteComments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<DeletedTransaction | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DeletedTransaction/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch DeletedTransaction with id ${id}`);
    } else {
      return new DeletedTransaction(await response.text());
    }
  }
}

DeletedTransaction satisfies StarRezStructureStatic<DeletedTransaction>
