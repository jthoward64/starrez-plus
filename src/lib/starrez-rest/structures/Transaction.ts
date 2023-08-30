// Generated from XML description of Transaction

import { starRezXmlToJson } from "../parsing.js";
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

    if (data.TransactionID != null) this.transactionID = parseInt(data.TransactionID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ChargeGroupID != null) this.chargeGroupID = parseInt(data.ChargeGroupID, 10);
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.TransactionTypeEnum != null) this.transactionTypeEnum = data.TransactionTypeEnum;
    if (data.TransactionDate != null) this.transactionDate = new Date(data.TransactionDate);
    if (data.ProcessedDate != null) this.processedDate = new Date(data.ProcessedDate);
    if (data.DueDate != null) this.dueDate = new Date(data.DueDate);
    if (data.Description != null) this.description = data.Description;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.TaxAmount != null) this.taxAmount = data.TaxAmount;
    if (data.TaxAmount2 != null) this.taxAmount2 = data.TaxAmount2;
    if (data.TaxAmount3 != null) this.taxAmount3 = data.TaxAmount3;
    if (data.Tag != null) this.tag = data.Tag;
    if (data.TagFinance != null) this.tagFinance = data.TagFinance;
    if (data.PaymentID != null) this.paymentID = parseInt(data.PaymentID, 10);
    if (data.InvoiceID != null) this.invoiceID = parseInt(data.InvoiceID, 10);
    if (data.EndOfSessionID != null) this.endOfSessionID = parseInt(data.EndOfSessionID, 10);
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.ExternalID != null) this.externalID = parseInt(data.ExternalID, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Extension != null) this.extension = parseInt(data.Extension, 10);
    if (data.Duration != null) this.duration = parseInt(data.Duration, 10);
    if (data.CallTypeEnum != null) this.callTypeEnum = data.CallTypeEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Reference_BookingID != null) this.reference_BookingID = parseInt(data.Reference_BookingID, 10);
    if (data.PaidFrom != null) this.paidFrom = new Date(data.PaidFrom);
    if (data.PaidTo != null) this.paidTo = new Date(data.PaidTo);
    if (data.Excess != null) this.excess = data.Excess;
    if (data.ExternalReceiptID != null) this.externalReceiptID = data.ExternalReceiptID;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Transaction | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Transaction/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Transaction with id ${id}`);
    } else {
      return new Transaction(await response.text());
    }
  }
}

Transaction satisfies StarRezStructureStatic<Transaction>
