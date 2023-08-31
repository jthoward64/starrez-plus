// Generated from XML description of RoomSpaceInventoryType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceInventoryType {
  roomSpaceInventoryTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  chargeItemID?: number;
  defaultChargeAmount?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceInventoryType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceInventoryTypeID != null) this.roomSpaceInventoryTypeID = (data.RoomSpaceInventoryTypeID != null ? parseInt(data.RoomSpaceInventoryTypeID, 10) : data.RoomSpaceInventoryTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.DefaultChargeAmount != null) this.defaultChargeAmount = data.DefaultChargeAmount;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceInventoryType by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceInventoryType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceInventoryType object or null (if id) or an array of RoomSpaceInventoryType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryType | null>;
  static async select(param: Partial<Record<keyof RoomSpaceInventoryType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryType[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceInventoryType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryType | RoomSpaceInventoryType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceInventoryType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceInventoryType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceInventoryType(entry));
      }
    }
  }
}

RoomSpaceInventoryType satisfies StarRezStructureStatic<RoomSpaceInventoryType>
