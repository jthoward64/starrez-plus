// Generated from XML description of TransactionTag

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TransactionTag {
  transactionTagID?: number;
  transactionID?: number;
  tagType?: string;
  tag?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TransactionTag");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TransactionTagID != null) this.transactionTagID = (data.TransactionTagID != null ? parseInt(data.TransactionTagID, 10) : data.TransactionTagID);
    if (data.TransactionID != null) this.transactionID = (data.TransactionID != null ? parseInt(data.TransactionID, 10) : data.TransactionID);
    if (data.TagType != null) this.tagType = data.TagType;
    if (data.Tag != null) this.tag = data.Tag;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<TransactionTag | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionTag/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionTag with id ${id}`);
    } else {
      return new TransactionTag(await response.text());
    }
  }
}

TransactionTag satisfies StarRezStructureStatic<TransactionTag>
