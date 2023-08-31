// Generated from XML description of RefundRequestBatchConfiguration

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RefundRequestBatchConfiguration {
  refundRequestBatchConfigurationID?: number;
  dynamicListID?: number;
  description?: string;
  comments?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RefundRequestBatchConfiguration");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RefundRequestBatchConfigurationID != null) this.refundRequestBatchConfigurationID = (data.RefundRequestBatchConfigurationID != null ? parseInt(data.RefundRequestBatchConfigurationID, 10) : data.RefundRequestBatchConfigurationID);
    if (data.DynamicListID != null) this.dynamicListID = (data.DynamicListID != null ? parseInt(data.DynamicListID, 10) : data.DynamicListID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RefundRequestBatchConfiguration by its ID or by exact match on other fields.
   * @param param Either the ID of the RefundRequestBatchConfiguration to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RefundRequestBatchConfiguration object or null (if id) or an array of RefundRequestBatchConfiguration objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RefundRequestBatchConfiguration | null>;
  static async select(param: Partial<Record<keyof RefundRequestBatchConfiguration, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RefundRequestBatchConfiguration[]>;
  static async select(param: number | Partial<Record<keyof RefundRequestBatchConfiguration, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RefundRequestBatchConfiguration | RefundRequestBatchConfiguration[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestBatchConfiguration/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestBatchConfiguration`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RefundRequestBatchConfiguration with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RefundRequestBatchConfiguration(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RefundRequestBatchConfiguration(entry));
      }
    }
  }
}

RefundRequestBatchConfiguration satisfies StarRezStructureStatic<RefundRequestBatchConfiguration>
