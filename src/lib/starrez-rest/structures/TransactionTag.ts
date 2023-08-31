// Generated from XML description of TransactionTag

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a TransactionTag by its ID or by exact match on other fields.
   * @param param Either the ID of the TransactionTag to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TransactionTag object or null (if id) or an array of TransactionTag objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TransactionTag | null>;
  static async select(param: Partial<Record<keyof TransactionTag, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TransactionTag[]>;
  static async select(param: number | Partial<Record<keyof TransactionTag, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TransactionTag | TransactionTag[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionTag/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionTag`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionTag with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TransactionTag(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TransactionTag(entry));
      }
    }
  }
}

TransactionTag satisfies StarRezStructureStatic<TransactionTag>
