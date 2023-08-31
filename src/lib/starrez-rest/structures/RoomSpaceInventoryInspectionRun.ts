// Generated from XML description of RoomSpaceInventoryInspectionRun

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceInventoryInspectionRun {
  roomSpaceInventoryInspectionRunID?: number;
  recordTypeEnum?: unknown;
  date?: Date | null;
  description?: string;
  assignedTo_SecurityUserID?: number;
  termSessionID?: number;
  chargeItemID?: number;
  categoryID?: number;
  inspectionProcessEnum?: unknown;
  viewOnWeb?: boolean;
  chargeDescription?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceInventoryInspectionRun");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceInventoryInspectionRunID != null) this.roomSpaceInventoryInspectionRunID = (data.RoomSpaceInventoryInspectionRunID != null ? parseInt(data.RoomSpaceInventoryInspectionRunID, 10) : data.RoomSpaceInventoryInspectionRunID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Date != null) this.date = (data.Date != null ? new Date(data.Date) : data.Date);
    if (data.Description != null) this.description = data.Description;
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = (data.AssignedTo_SecurityUserID != null ? parseInt(data.AssignedTo_SecurityUserID, 10) : data.AssignedTo_SecurityUserID);
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.InspectionProcessEnum != null) this.inspectionProcessEnum = data.InspectionProcessEnum;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.ChargeDescription != null) this.chargeDescription = data.ChargeDescription;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceInventoryInspectionRun by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceInventoryInspectionRun to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceInventoryInspectionRun object or null (if id) or an array of RoomSpaceInventoryInspectionRun objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryInspectionRun | null>;
  static async select(param: Partial<Record<keyof RoomSpaceInventoryInspectionRun, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryInspectionRun[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceInventoryInspectionRun, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryInspectionRun | RoomSpaceInventoryInspectionRun[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryInspectionRun/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryInspectionRun`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceInventoryInspectionRun with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceInventoryInspectionRun(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceInventoryInspectionRun(entry));
      }
    }
  }
}

RoomSpaceInventoryInspectionRun satisfies StarRezStructureStatic<RoomSpaceInventoryInspectionRun>
