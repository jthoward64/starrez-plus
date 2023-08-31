// Generated from XML description of TransactionLink

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.TransactionLinkID != null) this.transactionLinkID = (data.TransactionLinkID != null ? parseInt(data.TransactionLinkID, 10) : data.TransactionLinkID);
    if (data.TransactionLinkTypeEnum != null) this.transactionLinkTypeEnum = data.TransactionLinkTypeEnum;
    if (data.TransactionLinkDate != null) this.transactionLinkDate = (data.TransactionLinkDate != null ? new Date(data.TransactionLinkDate) : data.TransactionLinkDate);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<TransactionLink | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionLink/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionLink with id ${id}`);
    } else {
      return new TransactionLink(await response.text());
    }
  }
}

TransactionLink satisfies StarRezStructureStatic<TransactionLink>
