// Generated from XML description of TransactionLinkItem

import { starRezXmlToJson } from "../parsing.js";

export class TransactionLinkItem {
  transactionLinkItemID?: number;
  transactionLinkID?: number;
  transactionID?: number;
  parent?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TransactionLinkItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TransactionLinkItemID != null) this.transactionLinkItemID = parseInt(data.TransactionLinkItemID, 10);
    if (data.TransactionLinkID != null) this.transactionLinkID = parseInt(data.TransactionLinkID, 10);
    if (data.TransactionID != null) this.transactionID = parseInt(data.TransactionID, 10);
    if (data.Parent != null) this.parent = data.Parent === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
