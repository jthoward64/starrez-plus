// Generated from XML description of TransactionDispute

import { starRezXmlToJson } from "../parsing.js";

export class TransactionDispute {
  transactionDisputeID?: number;
  entryID?: number;
  transactionDisputeStatusEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TransactionDispute");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TransactionDisputeID != null) this.transactionDisputeID = parseInt(data.TransactionDisputeID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.TransactionDisputeStatusEnum != null) this.transactionDisputeStatusEnum = data.TransactionDisputeStatusEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
