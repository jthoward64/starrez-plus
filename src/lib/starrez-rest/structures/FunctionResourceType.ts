// Generated from XML description of FunctionResourceType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionResourceType {
  functionResourceTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  functionChargeTypeEnum?: unknown;
  perEntry?: boolean;
  chargeItemID?: number;
  comments?: string;
  checkAvailability?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionResourceType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionResourceTypeID != null) this.functionResourceTypeID = (data.FunctionResourceTypeID != null ? parseInt(data.FunctionResourceTypeID, 10) : data.FunctionResourceTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.FunctionChargeTypeEnum != null) this.functionChargeTypeEnum = data.FunctionChargeTypeEnum;
    if (data.PerEntry != null) this.perEntry = data.PerEntry === 'true';
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CheckAvailability != null) this.checkAvailability = data.CheckAvailability === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a FunctionResourceType by its ID or by exact match on other fields.
   * @param param Either the ID of the FunctionResourceType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FunctionResourceType object or null (if id) or an array of FunctionResourceType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FunctionResourceType | null>;
  static async select(param: Partial<Record<keyof FunctionResourceType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionResourceType[]>;
  static async select(param: number | Partial<Record<keyof FunctionResourceType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionResourceType | FunctionResourceType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionResourceType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionResourceType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionResourceType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FunctionResourceType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FunctionResourceType(entry));
      }
    }
  }
}

FunctionResourceType satisfies StarRezStructureStatic<FunctionResourceType>
