// Generated from XML description of RoomSpaceMaintenanceJobAction

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceMaintenanceJobAction {
  roomSpaceMaintenanceJobActionID?: number;
  roomSpaceMaintenanceID?: number;
  roomSpaceMaintenanceJobActionDate?: Date;
  type?: string;
  description?: string;
  technician?: string;
  hourlyRate?: number;
  materialCost?: number;
  hours?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceMaintenanceJobAction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceMaintenanceJobActionID != null) this.roomSpaceMaintenanceJobActionID = (data.RoomSpaceMaintenanceJobActionID != null ? parseInt(data.RoomSpaceMaintenanceJobActionID, 10) : data.RoomSpaceMaintenanceJobActionID);
    if (data.RoomSpaceMaintenanceID != null) this.roomSpaceMaintenanceID = (data.RoomSpaceMaintenanceID != null ? parseInt(data.RoomSpaceMaintenanceID, 10) : data.RoomSpaceMaintenanceID);
    if (data.RoomSpaceMaintenanceJobActionDate != null) this.roomSpaceMaintenanceJobActionDate = (data.RoomSpaceMaintenanceJobActionDate != null ? new Date(data.RoomSpaceMaintenanceJobActionDate) : data.RoomSpaceMaintenanceJobActionDate);
    if (data.Type != null) this.type = data.Type;
    if (data.Description != null) this.description = data.Description;
    if (data.Technician != null) this.technician = data.Technician;
    if (data.HourlyRate != null) this.hourlyRate = (data.HourlyRate != null ? parseFloat(data.HourlyRate) : data.HourlyRate);
    if (data.MaterialCost != null) this.materialCost = (data.MaterialCost != null ? parseFloat(data.MaterialCost) : data.MaterialCost);
    if (data.Hours != null) this.hours = (data.Hours != null ? parseFloat(data.Hours) : data.Hours);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceMaintenanceJobAction by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceMaintenanceJobAction to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceMaintenanceJobAction object or null (if id) or an array of RoomSpaceMaintenanceJobAction objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenanceJobAction | null>;
  static async select(param: Partial<Record<keyof RoomSpaceMaintenanceJobAction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenanceJobAction[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceMaintenanceJobAction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenanceJobAction | RoomSpaceMaintenanceJobAction[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceMaintenanceJobAction/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceMaintenanceJobAction`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceMaintenanceJobAction with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceMaintenanceJobAction(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceMaintenanceJobAction(entry));
      }
    }
  }
}

RoomSpaceMaintenanceJobAction satisfies StarRezStructureStatic<RoomSpaceMaintenanceJobAction>
