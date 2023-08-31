// Generated from XML description of RoomManager

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomManager {
  roomManagerID?: number;
  recordTypeEnum?: unknown;
  contactID?: number;
  description?: string;
  leaseDateStart?: Date | null;
  leaseDateEnd?: Date | null;
  amountRent?: string;
  amountBond?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomManager");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomManagerID != null) this.roomManagerID = (data.RoomManagerID != null ? parseInt(data.RoomManagerID, 10) : data.RoomManagerID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.ContactID != null) this.contactID = (data.ContactID != null ? parseInt(data.ContactID, 10) : data.ContactID);
    if (data.Description != null) this.description = data.Description;
    if (data.LeaseDateStart != null) this.leaseDateStart = (data.LeaseDateStart != null ? new Date(data.LeaseDateStart) : data.LeaseDateStart);
    if (data.LeaseDateEnd != null) this.leaseDateEnd = (data.LeaseDateEnd != null ? new Date(data.LeaseDateEnd) : data.LeaseDateEnd);
    if (data.AmountRent != null) this.amountRent = data.AmountRent;
    if (data.AmountBond != null) this.amountBond = data.AmountBond;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomManager by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomManager to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomManager object or null (if id) or an array of RoomManager objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomManager | null>;
  static async select(param: Partial<Record<keyof RoomManager, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomManager[]>;
  static async select(param: number | Partial<Record<keyof RoomManager, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomManager | RoomManager[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomManager/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomManager`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomManager with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomManager(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomManager(entry));
      }
    }
  }
}

RoomManager satisfies StarRezStructureStatic<RoomManager>
