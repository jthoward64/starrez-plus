// Generated from XML description of Payment

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Payment {
  paymentID?: number;
  entryID?: number;
  paymentTypeID?: number;
  transactionTypeEnum?: unknown;
  paymentDate?: Date;
  processedDate?: Date;
  amount?: string;
  drawer?: string;
  bank?: string;
  branch?: string;
  accountDetail1?: any;
  accountDetail2?: any;
  accountDetail3?: any;
  accountDetail4?: any;
  description?: string;
  bankingID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  machineName?: string;
  refund_PaymentID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Payment");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PaymentID != null) this.paymentID = (data.PaymentID != null ? parseInt(data.PaymentID, 10) : data.PaymentID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.PaymentTypeID != null) this.paymentTypeID = (data.PaymentTypeID != null ? parseInt(data.PaymentTypeID, 10) : data.PaymentTypeID);
    if (data.TransactionTypeEnum != null) this.transactionTypeEnum = data.TransactionTypeEnum;
    if (data.PaymentDate != null) this.paymentDate = (data.PaymentDate != null ? new Date(data.PaymentDate) : data.PaymentDate);
    if (data.ProcessedDate != null) this.processedDate = (data.ProcessedDate != null ? new Date(data.ProcessedDate) : data.ProcessedDate);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.Drawer != null) this.drawer = data.Drawer;
    if (data.Bank != null) this.bank = data.Bank;
    if (data.Branch != null) this.branch = data.Branch;
    if (data.AccountDetail1 != null) this.accountDetail1 = data.AccountDetail1;
    if (data.AccountDetail2 != null) this.accountDetail2 = data.AccountDetail2;
    if (data.AccountDetail3 != null) this.accountDetail3 = data.AccountDetail3;
    if (data.AccountDetail4 != null) this.accountDetail4 = data.AccountDetail4;
    if (data.Description != null) this.description = data.Description;
    if (data.BankingID != null) this.bankingID = (data.BankingID != null ? parseInt(data.BankingID, 10) : data.BankingID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.Refund_PaymentID != null) this.refund_PaymentID = (data.Refund_PaymentID != null ? parseInt(data.Refund_PaymentID, 10) : data.Refund_PaymentID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Payment | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Payment/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Payment with id ${id}`);
    } else {
      return new Payment(await response.text());
    }
  }
}

Payment satisfies StarRezStructureStatic<Payment>
