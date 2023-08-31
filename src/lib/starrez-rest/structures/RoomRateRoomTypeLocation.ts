// Generated from XML description of RoomRateRoomTypeLocation

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomRateRoomTypeLocation {
  roomRateRoomTypeLocationID?: number;
  roomRateSessionID?: number;
  roomTypeID?: number;
  roomLocationID?: number;
  chargeItemID?: number;
  amount?: string;
  amountDouble?: string;
  amountExtra?: string;
  amountChildren?: string;
  amountCost?: string;
  amountDoubleCost?: string;
  amountExtraCost?: string;
  amountChildrenCost?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomRateRoomTypeLocation");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomRateRoomTypeLocationID != null) this.roomRateRoomTypeLocationID = (data.RoomRateRoomTypeLocationID != null ? parseInt(data.RoomRateRoomTypeLocationID, 10) : data.RoomRateRoomTypeLocationID);
    if (data.RoomRateSessionID != null) this.roomRateSessionID = (data.RoomRateSessionID != null ? parseInt(data.RoomRateSessionID, 10) : data.RoomRateSessionID);
    if (data.RoomTypeID != null) this.roomTypeID = (data.RoomTypeID != null ? parseInt(data.RoomTypeID, 10) : data.RoomTypeID);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountDouble != null) this.amountDouble = data.AmountDouble;
    if (data.AmountExtra != null) this.amountExtra = data.AmountExtra;
    if (data.AmountChildren != null) this.amountChildren = data.AmountChildren;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.AmountDoubleCost != null) this.amountDoubleCost = data.AmountDoubleCost;
    if (data.AmountExtraCost != null) this.amountExtraCost = data.AmountExtraCost;
    if (data.AmountChildrenCost != null) this.amountChildrenCost = data.AmountChildrenCost;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomRateRoomTypeLocation by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomRateRoomTypeLocation to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomRateRoomTypeLocation object or null (if id) or an array of RoomRateRoomTypeLocation objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomRateRoomTypeLocation | null>;
  static async select(param: Partial<Record<keyof RoomRateRoomTypeLocation, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomRateRoomTypeLocation[]>;
  static async select(param: number | Partial<Record<keyof RoomRateRoomTypeLocation, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomRateRoomTypeLocation | RoomRateRoomTypeLocation[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomRateRoomTypeLocation/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomRateRoomTypeLocation`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomRateRoomTypeLocation with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomRateRoomTypeLocation(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomRateRoomTypeLocation(entry));
      }
    }
  }
}

RoomRateRoomTypeLocation satisfies StarRezStructureStatic<RoomRateRoomTypeLocation>
