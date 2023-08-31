// Generated from XML description of RefundRequestBatchConfigurationItem

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RefundRequestBatchConfigurationItem {
  refundRequestBatchConfigurationItemID?: number;
  refundRequestBatchConfigurationID?: number;
  refundRequestConfigurationID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RefundRequestBatchConfigurationItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RefundRequestBatchConfigurationItemID != null) this.refundRequestBatchConfigurationItemID = (data.RefundRequestBatchConfigurationItemID != null ? parseInt(data.RefundRequestBatchConfigurationItemID, 10) : data.RefundRequestBatchConfigurationItemID);
    if (data.RefundRequestBatchConfigurationID != null) this.refundRequestBatchConfigurationID = (data.RefundRequestBatchConfigurationID != null ? parseInt(data.RefundRequestBatchConfigurationID, 10) : data.RefundRequestBatchConfigurationID);
    if (data.RefundRequestConfigurationID != null) this.refundRequestConfigurationID = (data.RefundRequestConfigurationID != null ? parseInt(data.RefundRequestConfigurationID, 10) : data.RefundRequestConfigurationID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RefundRequestBatchConfigurationItem by its ID or by exact match on other fields.
   * @param param Either the ID of the RefundRequestBatchConfigurationItem to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RefundRequestBatchConfigurationItem object or null (if id) or an array of RefundRequestBatchConfigurationItem objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RefundRequestBatchConfigurationItem | null>;
  static async select(param: Partial<Record<keyof RefundRequestBatchConfigurationItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RefundRequestBatchConfigurationItem[]>;
  static async select(param: number | Partial<Record<keyof RefundRequestBatchConfigurationItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RefundRequestBatchConfigurationItem | RefundRequestBatchConfigurationItem[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestBatchConfigurationItem/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestBatchConfigurationItem`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RefundRequestBatchConfigurationItem with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RefundRequestBatchConfigurationItem(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RefundRequestBatchConfigurationItem(entry));
      }
    }
  }
}

RefundRequestBatchConfigurationItem satisfies StarRezStructureStatic<RefundRequestBatchConfigurationItem>
