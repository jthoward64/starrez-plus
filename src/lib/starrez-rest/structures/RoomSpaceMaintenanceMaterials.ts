// Generated from XML description of RoomSpaceMaintenanceMaterials

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceMaintenanceMaterials {
  roomSpaceMaintenanceMaterialsID?: number;
  roomSpaceMaintenanceID?: number;
  type?: string;
  description?: string;
  quantity?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceMaintenanceMaterials");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceMaintenanceMaterialsID != null) this.roomSpaceMaintenanceMaterialsID = (data.RoomSpaceMaintenanceMaterialsID != null ? parseInt(data.RoomSpaceMaintenanceMaterialsID, 10) : data.RoomSpaceMaintenanceMaterialsID);
    if (data.RoomSpaceMaintenanceID != null) this.roomSpaceMaintenanceID = (data.RoomSpaceMaintenanceID != null ? parseInt(data.RoomSpaceMaintenanceID, 10) : data.RoomSpaceMaintenanceID);
    if (data.Type != null) this.type = data.Type;
    if (data.Description != null) this.description = data.Description;
    if (data.Quantity != null) this.quantity = (data.Quantity != null ? parseInt(data.Quantity, 10) : data.Quantity);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceMaintenanceMaterials by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceMaintenanceMaterials to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceMaintenanceMaterials object or null (if id) or an array of RoomSpaceMaintenanceMaterials objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenanceMaterials | null>;
  static async select(param: Partial<Record<keyof RoomSpaceMaintenanceMaterials, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenanceMaterials[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceMaintenanceMaterials, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceMaintenanceMaterials | RoomSpaceMaintenanceMaterials[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceMaintenanceMaterials/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceMaintenanceMaterials`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceMaintenanceMaterials with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceMaintenanceMaterials(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceMaintenanceMaterials(entry));
      }
    }
  }
}

RoomSpaceMaintenanceMaterials satisfies StarRezStructureStatic<RoomSpaceMaintenanceMaterials>
