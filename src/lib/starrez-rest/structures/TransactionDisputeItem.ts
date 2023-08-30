// Generated from XML description of TransactionDisputeItem

import { starRezXmlToJson } from "../parsing.js";
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

    if (data.TransactionDisputeItemID != null) this.transactionDisputeItemID = parseInt(data.TransactionDisputeItemID, 10);
    if (data.TransactionID != null) this.transactionID = parseInt(data.TransactionID, 10);
    if (data.TransactionDisputeID != null) this.transactionDisputeID = parseInt(data.TransactionDisputeID, 10);
    if (data.TransactionDisputeItemStatusEnum != null) this.transactionDisputeItemStatusEnum = data.TransactionDisputeItemStatusEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<TransactionDisputeItem | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionDisputeItem/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionDisputeItem with id ${id}`);
    } else {
      return new TransactionDisputeItem(await response.text());
    }
  }
}

TransactionDisputeItem satisfies StarRezStructureStatic<TransactionDisputeItem>
