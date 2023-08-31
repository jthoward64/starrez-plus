// Generated from XML description of TransactionLink

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a TransactionLink by its ID or by exact match on other fields.
   * @param param Either the ID of the TransactionLink to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TransactionLink object or null (if id) or an array of TransactionLink objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TransactionLink | null>;
  static async select(param: Partial<Record<keyof TransactionLink, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TransactionLink[]>;
  static async select(param: number | Partial<Record<keyof TransactionLink, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TransactionLink | TransactionLink[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionLink/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionLink`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionLink with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TransactionLink(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TransactionLink(entry));
      }
    }
  }
}

TransactionLink satisfies StarRezStructureStatic<TransactionLink>
