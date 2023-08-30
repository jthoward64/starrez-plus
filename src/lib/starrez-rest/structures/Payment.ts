// Generated from XML description of Payment

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.PaymentID != null) this.paymentID = parseInt(data.PaymentID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.PaymentTypeID != null) this.paymentTypeID = parseInt(data.PaymentTypeID, 10);
    if (data.TransactionTypeEnum != null) this.transactionTypeEnum = data.TransactionTypeEnum;
    if (data.PaymentDate != null) this.paymentDate = new Date(data.PaymentDate);
    if (data.ProcessedDate != null) this.processedDate = new Date(data.ProcessedDate);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.Drawer != null) this.drawer = data.Drawer;
    if (data.Bank != null) this.bank = data.Bank;
    if (data.Branch != null) this.branch = data.Branch;
    if (data.AccountDetail1 != null) this.accountDetail1 = data.AccountDetail1;
    if (data.AccountDetail2 != null) this.accountDetail2 = data.AccountDetail2;
    if (data.AccountDetail3 != null) this.accountDetail3 = data.AccountDetail3;
    if (data.AccountDetail4 != null) this.accountDetail4 = data.AccountDetail4;
    if (data.Description != null) this.description = data.Description;
    if (data.BankingID != null) this.bankingID = parseInt(data.BankingID, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.Refund_PaymentID != null) this.refund_PaymentID = parseInt(data.Refund_PaymentID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
