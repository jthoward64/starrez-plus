// Generated from XML description of RefundRequestBreakUp

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RefundRequestBreakUp {
  refundRequestBreakUpID?: number;
  refundRequestID?: number;
  chargeGroupID?: number;
  amount?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RefundRequestBreakUp");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RefundRequestBreakUpID != null) this.refundRequestBreakUpID = (data.RefundRequestBreakUpID != null ? parseInt(data.RefundRequestBreakUpID, 10) : data.RefundRequestBreakUpID);
    if (data.RefundRequestID != null) this.refundRequestID = (data.RefundRequestID != null ? parseInt(data.RefundRequestID, 10) : data.RefundRequestID);
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.Amount != null) this.amount = data.Amount;
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
   * Fetches a RefundRequestBreakUp by its ID or by exact match on other fields.
   * @param param Either the ID of the RefundRequestBreakUp to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RefundRequestBreakUp object or null (if id) or an array of RefundRequestBreakUp objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RefundRequestBreakUp | null>;
  static async select(param: Partial<Record<keyof RefundRequestBreakUp, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RefundRequestBreakUp[]>;
  static async select(param: number | Partial<Record<keyof RefundRequestBreakUp, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RefundRequestBreakUp | RefundRequestBreakUp[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestBreakUp/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestBreakUp`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RefundRequestBreakUp with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RefundRequestBreakUp(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RefundRequestBreakUp(entry));
      }
    }
  }
}

RefundRequestBreakUp satisfies StarRezStructureStatic<RefundRequestBreakUp>
