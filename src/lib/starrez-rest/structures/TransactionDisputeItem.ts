// Generated from XML description of TransactionDisputeItem

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TransactionDisputeItem {
  transactionDisputeItemID?: number;
  transactionID?: number;
  transactionDisputeID?: number;
  transactionDisputeItemStatusEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TransactionDisputeItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TransactionDisputeItemID != null) this.transactionDisputeItemID = (data.TransactionDisputeItemID != null ? parseInt(data.TransactionDisputeItemID, 10) : data.TransactionDisputeItemID);
    if (data.TransactionID != null) this.transactionID = (data.TransactionID != null ? parseInt(data.TransactionID, 10) : data.TransactionID);
    if (data.TransactionDisputeID != null) this.transactionDisputeID = (data.TransactionDisputeID != null ? parseInt(data.TransactionDisputeID, 10) : data.TransactionDisputeID);
    if (data.TransactionDisputeItemStatusEnum != null) this.transactionDisputeItemStatusEnum = data.TransactionDisputeItemStatusEnum;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<TransactionDisputeItem | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionDisputeItem/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionDisputeItem with id ${id}`);
    } else {
      return new TransactionDisputeItem(await response.text());
    }
  }
}

TransactionDisputeItem satisfies StarRezStructureStatic<TransactionDisputeItem>
