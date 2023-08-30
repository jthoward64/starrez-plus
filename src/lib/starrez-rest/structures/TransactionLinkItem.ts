// Generated from XML description of TransactionLinkItem

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<TransactionLinkItem | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionLinkItem/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionLinkItem with id ${id}`);
    } else {
      return new TransactionLinkItem(await response.text());
    }
  }
}

TransactionLinkItem satisfies StarRezStructureStatic<TransactionLinkItem>
