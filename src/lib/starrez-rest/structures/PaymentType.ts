// Generated from XML description of PaymentType

import { starRezXmlToJson } from "../parsing.js";

export class PaymentType {
  paymentTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  categoryID?: number;
  paymentMethodEnum?: unknown;
  accountReceivable_GLPostingID?: number;
  bank_GLPostingID?: number;
  refundChq?: boolean;
  groupBy?: string;
  creditCardSurcharge?: number;
  cCS_ChargeItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PaymentType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PaymentTypeID != null) this.paymentTypeID = parseInt(data.PaymentTypeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.PaymentMethodEnum != null) this.paymentMethodEnum = data.PaymentMethodEnum;
    if (data.AccountReceivable_GLPostingID != null) this.accountReceivable_GLPostingID = parseInt(data.AccountReceivable_GLPostingID, 10);
    if (data.Bank_GLPostingID != null) this.bank_GLPostingID = parseInt(data.Bank_GLPostingID, 10);
    if (data.RefundChq != null) this.refundChq = data.RefundChq === 'true';
    if (data.GroupBy != null) this.groupBy = data.GroupBy;
    if (data.CreditCardSurcharge != null) this.creditCardSurcharge = parseFloat(data.CreditCardSurcharge);
    if (data.CCS_ChargeItemID != null) this.cCS_ChargeItemID = parseInt(data.CCS_ChargeItemID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
