// Generated from XML description of FunctionResource

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionResource {
  functionResourceID?: number;
  functionResourceTypeID?: number;
  categoryID?: number;
  recordTypeEnum?: unknown;
  functionRoomID?: number;
  fixedToFunctionRoom?: boolean;
  description?: string;
  chargeItemID?: number;
  amount?: string;
  amountCost?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionResource");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionResourceID != null) this.functionResourceID = (data.FunctionResourceID != null ? parseInt(data.FunctionResourceID, 10) : data.FunctionResourceID);
    if (data.FunctionResourceTypeID != null) this.functionResourceTypeID = (data.FunctionResourceTypeID != null ? parseInt(data.FunctionResourceTypeID, 10) : data.FunctionResourceTypeID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.FunctionRoomID != null) this.functionRoomID = (data.FunctionRoomID != null ? parseInt(data.FunctionRoomID, 10) : data.FunctionRoomID);
    if (data.FixedToFunctionRoom != null) this.fixedToFunctionRoom = data.FixedToFunctionRoom === 'true';
    if (data.Description != null) this.description = data.Description;
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a FunctionResource by its ID or by exact match on other fields.
   * @param param Either the ID of the FunctionResource to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FunctionResource object or null (if id) or an array of FunctionResource objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FunctionResource | null>;
  static async select(param: Partial<Record<keyof FunctionResource, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionResource[]>;
  static async select(param: number | Partial<Record<keyof FunctionResource, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionResource | FunctionResource[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionResource/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionResource`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionResource with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FunctionResource(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FunctionResource(entry));
      }
    }
  }
}

FunctionResource satisfies StarRezStructureStatic<FunctionResource>
