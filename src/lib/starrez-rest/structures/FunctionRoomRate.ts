// Generated from XML description of FunctionRoomRate

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionRoomRate {
  functionRoomRateID?: number;
  recordTypeEnum?: unknown;
  functionChargeTypeEnum?: unknown;
  chargeToEntry?: boolean;
  perEntry?: boolean;
  chargeItemID?: number;
  functionRoomTypeID?: number;
  description?: string;
  amount?: string;
  amountCost?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionRoomRate");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionRoomRateID != null) this.functionRoomRateID = (data.FunctionRoomRateID != null ? parseInt(data.FunctionRoomRateID, 10) : data.FunctionRoomRateID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.FunctionChargeTypeEnum != null) this.functionChargeTypeEnum = data.FunctionChargeTypeEnum;
    if (data.ChargeToEntry != null) this.chargeToEntry = data.ChargeToEntry === 'true';
    if (data.PerEntry != null) this.perEntry = data.PerEntry === 'true';
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.FunctionRoomTypeID != null) this.functionRoomTypeID = (data.FunctionRoomTypeID != null ? parseInt(data.FunctionRoomTypeID, 10) : data.FunctionRoomTypeID);
    if (data.Description != null) this.description = data.Description;
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
   * Fetches a FunctionRoomRate by its ID or by exact match on other fields.
   * @param param Either the ID of the FunctionRoomRate to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FunctionRoomRate object or null (if id) or an array of FunctionRoomRate objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FunctionRoomRate | null>;
  static async select(param: Partial<Record<keyof FunctionRoomRate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionRoomRate[]>;
  static async select(param: number | Partial<Record<keyof FunctionRoomRate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionRoomRate | FunctionRoomRate[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionRoomRate/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionRoomRate`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionRoomRate with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FunctionRoomRate(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FunctionRoomRate(entry));
      }
    }
  }
}

FunctionRoomRate satisfies StarRezStructureStatic<FunctionRoomRate>
