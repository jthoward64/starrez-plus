// Generated from XML description of Transaction

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Transaction {
  transactionID?: number;
  entryID?: number;
  chargeGroupID?: number;
  chargeItemID?: number;
  transactionTypeEnum?: unknown;
  transactionDate?: Date;
  processedDate?: Date;
  dueDate?: Date | null;
  description?: string;
  amount?: string;
  taxAmount?: string;
  taxAmount2?: string;
  taxAmount3?: string;
  tag?: string;
  tagFinance?: string;
  paymentID?: number;
  invoiceID?: number;
  endOfSessionID?: number;
  termSessionID?: number;
  externalID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  tableID?: number;
  tableName?: string;
  extension?: number;
  duration?: number;
  callTypeEnum?: unknown;
  comments?: string;
  reference_BookingID?: number;
  paidFrom?: Date | null;
  paidTo?: Date | null;
  excess?: string;
  externalReceiptID?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Transaction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TransactionID != null) this.transactionID = (data.TransactionID != null ? parseInt(data.TransactionID, 10) : data.TransactionID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.TransactionTypeEnum != null) this.transactionTypeEnum = data.TransactionTypeEnum;
    if (data.TransactionDate != null) this.transactionDate = (data.TransactionDate != null ? new Date(data.TransactionDate) : data.TransactionDate);
    if (data.ProcessedDate != null) this.processedDate = (data.ProcessedDate != null ? new Date(data.ProcessedDate) : data.ProcessedDate);
    if (data.DueDate != null) this.dueDate = (data.DueDate != null ? new Date(data.DueDate) : data.DueDate);
    if (data.Description != null) this.description = data.Description;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.TaxAmount != null) this.taxAmount = data.TaxAmount;
    if (data.TaxAmount2 != null) this.taxAmount2 = data.TaxAmount2;
    if (data.TaxAmount3 != null) this.taxAmount3 = data.TaxAmount3;
    if (data.Tag != null) this.tag = data.Tag;
    if (data.TagFinance != null) this.tagFinance = data.TagFinance;
    if (data.PaymentID != null) this.paymentID = (data.PaymentID != null ? parseInt(data.PaymentID, 10) : data.PaymentID);
    if (data.InvoiceID != null) this.invoiceID = (data.InvoiceID != null ? parseInt(data.InvoiceID, 10) : data.InvoiceID);
    if (data.EndOfSessionID != null) this.endOfSessionID = (data.EndOfSessionID != null ? parseInt(data.EndOfSessionID, 10) : data.EndOfSessionID);
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.ExternalID != null) this.externalID = (data.ExternalID != null ? parseInt(data.ExternalID, 10) : data.ExternalID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Extension != null) this.extension = (data.Extension != null ? parseInt(data.Extension, 10) : data.Extension);
    if (data.Duration != null) this.duration = (data.Duration != null ? parseInt(data.Duration, 10) : data.Duration);
    if (data.CallTypeEnum != null) this.callTypeEnum = data.CallTypeEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Reference_BookingID != null) this.reference_BookingID = (data.Reference_BookingID != null ? parseInt(data.Reference_BookingID, 10) : data.Reference_BookingID);
    if (data.PaidFrom != null) this.paidFrom = (data.PaidFrom != null ? new Date(data.PaidFrom) : data.PaidFrom);
    if (data.PaidTo != null) this.paidTo = (data.PaidTo != null ? new Date(data.PaidTo) : data.PaidTo);
    if (data.Excess != null) this.excess = data.Excess;
    if (data.ExternalReceiptID != null) this.externalReceiptID = data.ExternalReceiptID;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Transaction by its ID or by exact match on other fields.
   * @param param Either the ID of the Transaction to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Transaction object or null (if id) or an array of Transaction objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Transaction | null>;
  static async select(param: Partial<Record<keyof Transaction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Transaction[]>;
  static async select(param: number | Partial<Record<keyof Transaction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Transaction | Transaction[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Transaction/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Transaction`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Transaction with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Transaction(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Transaction(entry));
      }
    }
  }
}

Transaction satisfies StarRezStructureStatic<Transaction>
