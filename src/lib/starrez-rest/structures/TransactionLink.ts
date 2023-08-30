// Generated from XML description of TransactionLink

import { starRezXmlToJson } from "../parsing.js";

export class TransactionLink {
  transactionLinkID?: number;
  transactionLinkTypeEnum?: unknown;
  transactionLinkDate?: Date;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TransactionLink");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TransactionLinkID != null) this.transactionLinkID = parseInt(data.TransactionLinkID, 10);
    if (data.TransactionLinkTypeEnum != null) this.transactionLinkTypeEnum = data.TransactionLinkTypeEnum;
    if (data.TransactionLinkDate != null) this.transactionLinkDate = new Date(data.TransactionLinkDate);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
