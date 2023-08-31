// Generated from XML description of RoomSpaceMaintenanceItem

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceMaintenanceItem {
  roomSpaceMaintenanceItemID?: number;
  recordTypeEnum?: unknown;
  roomSpaceMaintenanceCategoryID?: number;
  description?: string;
  comments?: string;
  viewOnWeb?: boolean;
  defaultChargeAmount?: string;
  chargeItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceMaintenanceItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceMaintenanceItemID != null) this.roomSpaceMaintenanceItemID = (data.RoomSpaceMaintenanceItemID != null ? parseInt(data.RoomSpaceMaintenanceItemID, 10) : data.RoomSpaceMaintenanceItemID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.RoomSpaceMaintenanceCategoryID != null) this.roomSpaceMaintenanceCategoryID = (data.RoomSpaceMaintenanceCategoryID != null ? parseInt(data.RoomSpaceMaintenanceCategoryID, 10) : data.RoomSpaceMaintenanceCategoryID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.DefaultChargeAmount != null) this.defaultChargeAmount = data.DefaultChargeAmount;
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceMaintenanceItem by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceMaintenanceItem to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceMaintenanceItem object or null (if id) or an array of RoomSpaceMaintenanceItem objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenanceItem | null>;
  static async select(param: Partial<Record<keyof RoomSpaceMaintenanceItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenanceItem[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceMaintenanceItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenanceItem | RoomSpaceMaintenanceItem[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceMaintenanceItem/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceMaintenanceItem`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceMaintenanceItem with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceMaintenanceItem(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceMaintenanceItem(entry));
      }
    }
  }
}

RoomSpaceMaintenanceItem satisfies StarRezStructureStatic<RoomSpaceMaintenanceItem>
