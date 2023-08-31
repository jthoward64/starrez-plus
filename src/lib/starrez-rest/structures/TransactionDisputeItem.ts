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

  /**
   * Fetches a TransactionDisputeItem by its ID or by exact match on other fields.
   * @param param Either the ID of the TransactionDisputeItem to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TransactionDisputeItem object or null (if id) or an array of TransactionDisputeItem objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TransactionDisputeItem | null>;
  static async select(param: Partial<Record<keyof TransactionDisputeItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TransactionDisputeItem[]>;
  static async select(param: number | Partial<Record<keyof TransactionDisputeItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TransactionDisputeItem | TransactionDisputeItem[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionDisputeItem/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionDisputeItem`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionDisputeItem with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TransactionDisputeItem(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TransactionDisputeItem(entry));
      }
    }
  }
}

TransactionDisputeItem satisfies StarRezStructureStatic<TransactionDisputeItem>
