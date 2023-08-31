// Generated from XML description of RoomSpaceInventoryCondition

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceInventoryCondition {
  roomSpaceInventoryConditionID?: number;
  recordTypeEnum?: unknown;
  roomSpaceInventoryTypeID?: number;
  conditionOrder?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceInventoryCondition");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceInventoryConditionID != null) this.roomSpaceInventoryConditionID = (data.RoomSpaceInventoryConditionID != null ? parseInt(data.RoomSpaceInventoryConditionID, 10) : data.RoomSpaceInventoryConditionID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.RoomSpaceInventoryTypeID != null) this.roomSpaceInventoryTypeID = (data.RoomSpaceInventoryTypeID != null ? parseInt(data.RoomSpaceInventoryTypeID, 10) : data.RoomSpaceInventoryTypeID);
    if (data.ConditionOrder != null) this.conditionOrder = (data.ConditionOrder != null ? parseInt(data.ConditionOrder, 10) : data.ConditionOrder);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceInventoryCondition by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceInventoryCondition to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceInventoryCondition object or null (if id) or an array of RoomSpaceInventoryCondition objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryCondition | null>;
  static async select(param: Partial<Record<keyof RoomSpaceInventoryCondition, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryCondition[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceInventoryCondition, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryCondition | RoomSpaceInventoryCondition[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryCondition/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryCondition`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceInventoryCondition with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceInventoryCondition(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceInventoryCondition(entry));
      }
    }
  }
}

RoomSpaceInventoryCondition satisfies StarRezStructureStatic<RoomSpaceInventoryCondition>
