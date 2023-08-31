// Generated from XML description of TransactionLinkItem

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

    if (data.TransactionLinkItemID != null) this.transactionLinkItemID = (data.TransactionLinkItemID != null ? parseInt(data.TransactionLinkItemID, 10) : data.TransactionLinkItemID);
    if (data.TransactionLinkID != null) this.transactionLinkID = (data.TransactionLinkID != null ? parseInt(data.TransactionLinkID, 10) : data.TransactionLinkID);
    if (data.TransactionID != null) this.transactionID = (data.TransactionID != null ? parseInt(data.TransactionID, 10) : data.TransactionID);
    if (data.Parent != null) this.parent = data.Parent === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a TransactionLinkItem by its ID or by exact match on other fields.
   * @param param Either the ID of the TransactionLinkItem to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TransactionLinkItem object or null (if id) or an array of TransactionLinkItem objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TransactionLinkItem | null>;
  static async select(param: Partial<Record<keyof TransactionLinkItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TransactionLinkItem[]>;
  static async select(param: number | Partial<Record<keyof TransactionLinkItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TransactionLinkItem | TransactionLinkItem[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionLinkItem/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionLinkItem`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionLinkItem with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TransactionLinkItem(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TransactionLinkItem(entry));
      }
    }
  }
}

TransactionLinkItem satisfies StarRezStructureStatic<TransactionLinkItem>
