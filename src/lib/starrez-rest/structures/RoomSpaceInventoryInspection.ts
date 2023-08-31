// Generated from XML description of RoomSpaceInventoryInspection

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceInventoryInspection {
  roomSpaceInventoryInspectionID?: number;
  roomSpaceInventoryInspectionRunID?: number;
  roomSpaceID?: number;
  entryID?: number;
  inspectionStatusEnum?: unknown;
  description?: string;
  dateInspected?: Date | null;
  dateReviewed?: Date | null;
  comments?: string;
  signature?: any | null;
  signatureStaff?: any | null;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceInventoryInspection");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceInventoryInspectionID != null) this.roomSpaceInventoryInspectionID = (data.RoomSpaceInventoryInspectionID != null ? parseInt(data.RoomSpaceInventoryInspectionID, 10) : data.RoomSpaceInventoryInspectionID);
    if (data.RoomSpaceInventoryInspectionRunID != null) this.roomSpaceInventoryInspectionRunID = (data.RoomSpaceInventoryInspectionRunID != null ? parseInt(data.RoomSpaceInventoryInspectionRunID, 10) : data.RoomSpaceInventoryInspectionRunID);
    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.InspectionStatusEnum != null) this.inspectionStatusEnum = data.InspectionStatusEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.DateInspected != null) this.dateInspected = (data.DateInspected != null ? new Date(data.DateInspected) : data.DateInspected);
    if (data.DateReviewed != null) this.dateReviewed = (data.DateReviewed != null ? new Date(data.DateReviewed) : data.DateReviewed);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Signature != null) this.signature = data.Signature;
    if (data.SignatureStaff != null) this.signatureStaff = data.SignatureStaff;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceInventoryInspection by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceInventoryInspection to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceInventoryInspection object or null (if id) or an array of RoomSpaceInventoryInspection objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryInspection | null>;
  static async select(param: Partial<Record<keyof RoomSpaceInventoryInspection, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryInspection[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceInventoryInspection, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryInspection | RoomSpaceInventoryInspection[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryInspection/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryInspection`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceInventoryInspection with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceInventoryInspection(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceInventoryInspection(entry));
      }
    }
  }
}

RoomSpaceInventoryInspection satisfies StarRezStructureStatic<RoomSpaceInventoryInspection>
