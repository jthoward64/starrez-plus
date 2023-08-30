// Generated from XML description of WebTransaction

import { starRezXmlToJson } from "../parsing.js";

export class WebTransaction {
  webTransactionID?: number;
  webPaymentID?: number;
  chargeGroupID?: number;
  chargeItemID?: number;
  description?: string;
  amount?: string;
  fullAccountPayment?: boolean;
  tableID?: number;
  tableName?: string;
  data?: any | null;
  termSessionID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebTransaction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebTransactionID != null) this.webTransactionID = parseInt(data.WebTransactionID, 10);
    if (data.WebPaymentID != null) this.webPaymentID = parseInt(data.WebPaymentID, 10);
    if (data.ChargeGroupID != null) this.chargeGroupID = parseInt(data.ChargeGroupID, 10);
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.FullAccountPayment != null) this.fullAccountPayment = data.FullAccountPayment === 'true';
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Data != null) this.data = data.Data;
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
