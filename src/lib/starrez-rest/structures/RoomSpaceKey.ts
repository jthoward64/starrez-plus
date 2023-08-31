// Generated from XML description of RoomSpaceKey

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceKey {
  roomSpaceKeyID?: number;
  roomSpaceID?: number;
  roomSpaceKeyTypeID?: number;
  roomSpaceKeyStatusEnum?: unknown;
  roomSpaceKeyBookingID?: number;
  serialNumber?: string;
  description?: string;
  location?: string;
  store?: string;
  cut?: string;
  details?: string;
  customBit1?: boolean;
  customBit2?: boolean;
  customString1?: string;
  customString2?: string;
  customString3?: string;
  customString4?: string;
  customString5?: string;
  customString6?: string;
  customDate1?: Date | null;
  customDate2?: Date | null;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceKey");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceKeyID != null) this.roomSpaceKeyID = (data.RoomSpaceKeyID != null ? parseInt(data.RoomSpaceKeyID, 10) : data.RoomSpaceKeyID);
    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
    if (data.RoomSpaceKeyTypeID != null) this.roomSpaceKeyTypeID = (data.RoomSpaceKeyTypeID != null ? parseInt(data.RoomSpaceKeyTypeID, 10) : data.RoomSpaceKeyTypeID);
    if (data.RoomSpaceKeyStatusEnum != null) this.roomSpaceKeyStatusEnum = data.RoomSpaceKeyStatusEnum;
    if (data.RoomSpaceKeyBookingID != null) this.roomSpaceKeyBookingID = (data.RoomSpaceKeyBookingID != null ? parseInt(data.RoomSpaceKeyBookingID, 10) : data.RoomSpaceKeyBookingID);
    if (data.SerialNumber != null) this.serialNumber = data.SerialNumber;
    if (data.Description != null) this.description = data.Description;
    if (data.Location != null) this.location = data.Location;
    if (data.Store != null) this.store = data.Store;
    if (data.Cut != null) this.cut = data.Cut;
    if (data.Details != null) this.details = data.Details;
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.CustomString3 != null) this.customString3 = data.CustomString3;
    if (data.CustomString4 != null) this.customString4 = data.CustomString4;
    if (data.CustomString5 != null) this.customString5 = data.CustomString5;
    if (data.CustomString6 != null) this.customString6 = data.CustomString6;
    if (data.CustomDate1 != null) this.customDate1 = (data.CustomDate1 != null ? new Date(data.CustomDate1) : data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = (data.CustomDate2 != null ? new Date(data.CustomDate2) : data.CustomDate2);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceKey by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceKey to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceKey object or null (if id) or an array of RoomSpaceKey objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceKey | null>;
  static async select(param: Partial<Record<keyof RoomSpaceKey, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceKey[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceKey, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceKey | RoomSpaceKey[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceKey/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceKey`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceKey with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceKey(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceKey(entry));
      }
    }
  }
}

RoomSpaceKey satisfies StarRezStructureStatic<RoomSpaceKey>
