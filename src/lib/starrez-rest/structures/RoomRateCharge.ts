// Generated from XML description of RoomRateCharge

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomRateCharge {
  roomRateChargeID?: number;
  roomRateSessionID?: number;
  chargeItemID?: number;
  roomTypeID?: number;
  roomLocationID?: number;
  description?: string;
  amount?: string;
  amountDouble?: string;
  amountExtra?: string;
  amountChildren?: string;
  amountCost?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomRateCharge");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomRateChargeID != null) this.roomRateChargeID = (data.RoomRateChargeID != null ? parseInt(data.RoomRateChargeID, 10) : data.RoomRateChargeID);
    if (data.RoomRateSessionID != null) this.roomRateSessionID = (data.RoomRateSessionID != null ? parseInt(data.RoomRateSessionID, 10) : data.RoomRateSessionID);
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.RoomTypeID != null) this.roomTypeID = (data.RoomTypeID != null ? parseInt(data.RoomTypeID, 10) : data.RoomTypeID);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.Description != null) this.description = data.Description;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountDouble != null) this.amountDouble = data.AmountDouble;
    if (data.AmountExtra != null) this.amountExtra = data.AmountExtra;
    if (data.AmountChildren != null) this.amountChildren = data.AmountChildren;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomRateCharge by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomRateCharge to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomRateCharge object or null (if id) or an array of RoomRateCharge objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomRateCharge | null>;
  static async select(param: Partial<Record<keyof RoomRateCharge, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomRateCharge[]>;
  static async select(param: number | Partial<Record<keyof RoomRateCharge, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomRateCharge | RoomRateCharge[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomRateCharge/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomRateCharge`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomRateCharge with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomRateCharge(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomRateCharge(entry));
      }
    }
  }
}

RoomRateCharge satisfies StarRezStructureStatic<RoomRateCharge>
