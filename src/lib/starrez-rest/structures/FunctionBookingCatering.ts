// Generated from XML description of FunctionBookingCatering

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionBookingCatering {
  functionBookingCateringID?: number;
  functionBookingID?: number;
  cateringID?: number;
  functionChargeTypeEnum?: unknown;
  chargeToEntry?: boolean;
  perEntry?: boolean;
  description?: string;
  cateringDescription?: string;
  servingTime?: Date;
  servingDuration?: number;
  location?: string;
  functionRoomID?: number;
  amount?: string;
  amountCost?: string;
  chargeItemID?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionBookingCatering");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionBookingCateringID != null) this.functionBookingCateringID = (data.FunctionBookingCateringID != null ? parseInt(data.FunctionBookingCateringID, 10) : data.FunctionBookingCateringID);
    if (data.FunctionBookingID != null) this.functionBookingID = (data.FunctionBookingID != null ? parseInt(data.FunctionBookingID, 10) : data.FunctionBookingID);
    if (data.CateringID != null) this.cateringID = (data.CateringID != null ? parseInt(data.CateringID, 10) : data.CateringID);
    if (data.FunctionChargeTypeEnum != null) this.functionChargeTypeEnum = data.FunctionChargeTypeEnum;
    if (data.ChargeToEntry != null) this.chargeToEntry = data.ChargeToEntry === 'true';
    if (data.PerEntry != null) this.perEntry = data.PerEntry === 'true';
    if (data.Description != null) this.description = data.Description;
    if (data.CateringDescription != null) this.cateringDescription = data.CateringDescription;
    if (data.ServingTime != null) this.servingTime = (data.ServingTime != null ? new Date(data.ServingTime) : data.ServingTime);
    if (data.ServingDuration != null) this.servingDuration = (data.ServingDuration != null ? parseInt(data.ServingDuration, 10) : data.ServingDuration);
    if (data.Location != null) this.location = data.Location;
    if (data.FunctionRoomID != null) this.functionRoomID = (data.FunctionRoomID != null ? parseInt(data.FunctionRoomID, 10) : data.FunctionRoomID);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a FunctionBookingCatering by its ID or by exact match on other fields.
   * @param param Either the ID of the FunctionBookingCatering to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FunctionBookingCatering object or null (if id) or an array of FunctionBookingCatering objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FunctionBookingCatering | null>;
  static async select(param: Partial<Record<keyof FunctionBookingCatering, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionBookingCatering[]>;
  static async select(param: number | Partial<Record<keyof FunctionBookingCatering, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionBookingCatering | FunctionBookingCatering[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBookingCatering/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBookingCatering`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionBookingCatering with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FunctionBookingCatering(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FunctionBookingCatering(entry));
      }
    }
  }
}

FunctionBookingCatering satisfies StarRezStructureStatic<FunctionBookingCatering>
