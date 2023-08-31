// Generated from XML description of RefundRequestConfigurationBreakUp

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RefundRequestConfigurationBreakUp {
  refundRequestConfigurationBreakUpID?: number;
  refundRequestConfigurationID?: number;
  chargeGroupID?: number;
  sortOrder?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RefundRequestConfigurationBreakUp");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RefundRequestConfigurationBreakUpID != null) this.refundRequestConfigurationBreakUpID = (data.RefundRequestConfigurationBreakUpID != null ? parseInt(data.RefundRequestConfigurationBreakUpID, 10) : data.RefundRequestConfigurationBreakUpID);
    if (data.RefundRequestConfigurationID != null) this.refundRequestConfigurationID = (data.RefundRequestConfigurationID != null ? parseInt(data.RefundRequestConfigurationID, 10) : data.RefundRequestConfigurationID);
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.SortOrder != null) this.sortOrder = (data.SortOrder != null ? parseInt(data.SortOrder, 10) : data.SortOrder);
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
   * Fetches a RefundRequestConfigurationBreakUp by its ID or by exact match on other fields.
   * @param param Either the ID of the RefundRequestConfigurationBreakUp to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RefundRequestConfigurationBreakUp object or null (if id) or an array of RefundRequestConfigurationBreakUp objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RefundRequestConfigurationBreakUp | null>;
  static async select(param: Partial<Record<keyof RefundRequestConfigurationBreakUp, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RefundRequestConfigurationBreakUp[]>;
  static async select(param: number | Partial<Record<keyof RefundRequestConfigurationBreakUp, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RefundRequestConfigurationBreakUp | RefundRequestConfigurationBreakUp[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestConfigurationBreakUp/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestConfigurationBreakUp`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RefundRequestConfigurationBreakUp with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RefundRequestConfigurationBreakUp(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RefundRequestConfigurationBreakUp(entry));
      }
    }
  }
}

RefundRequestConfigurationBreakUp satisfies StarRezStructureStatic<RefundRequestConfigurationBreakUp>
