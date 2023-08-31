// Generated from XML description of Housekeeping

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Housekeeping {
  housekeepingID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  transactionTemplateID?: number;
  roomService1CheckIn_TriStateEnum?: unknown;
  roomService1CheckOut_TriStateEnum?: unknown;
  roomService2CheckIn_TriStateEnum?: unknown;
  roomService2CheckOut_TriStateEnum?: unknown;
  roomService3CheckIn_TriStateEnum?: unknown;
  roomService3CheckOut_TriStateEnum?: unknown;
  comments?: string;
  roomService1CheckInClearComment?: boolean;
  roomService1CheckOutClearComment?: boolean;
  roomService2CheckInClearComment?: boolean;
  roomService2CheckOutClearComment?: boolean;
  roomService3CheckInClearComment?: boolean;
  roomService3CheckOutClearComment?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Housekeeping");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.HousekeepingID != null) this.housekeepingID = (data.HousekeepingID != null ? parseInt(data.HousekeepingID, 10) : data.HousekeepingID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.TransactionTemplateID != null) this.transactionTemplateID = (data.TransactionTemplateID != null ? parseInt(data.TransactionTemplateID, 10) : data.TransactionTemplateID);
    if (data.RoomService1CheckIn_TriStateEnum != null) this.roomService1CheckIn_TriStateEnum = data.RoomService1CheckIn_TriStateEnum;
    if (data.RoomService1CheckOut_TriStateEnum != null) this.roomService1CheckOut_TriStateEnum = data.RoomService1CheckOut_TriStateEnum;
    if (data.RoomService2CheckIn_TriStateEnum != null) this.roomService2CheckIn_TriStateEnum = data.RoomService2CheckIn_TriStateEnum;
    if (data.RoomService2CheckOut_TriStateEnum != null) this.roomService2CheckOut_TriStateEnum = data.RoomService2CheckOut_TriStateEnum;
    if (data.RoomService3CheckIn_TriStateEnum != null) this.roomService3CheckIn_TriStateEnum = data.RoomService3CheckIn_TriStateEnum;
    if (data.RoomService3CheckOut_TriStateEnum != null) this.roomService3CheckOut_TriStateEnum = data.RoomService3CheckOut_TriStateEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.RoomService1CheckInClearComment != null) this.roomService1CheckInClearComment = data.RoomService1CheckInClearComment === 'true';
    if (data.RoomService1CheckOutClearComment != null) this.roomService1CheckOutClearComment = data.RoomService1CheckOutClearComment === 'true';
    if (data.RoomService2CheckInClearComment != null) this.roomService2CheckInClearComment = data.RoomService2CheckInClearComment === 'true';
    if (data.RoomService2CheckOutClearComment != null) this.roomService2CheckOutClearComment = data.RoomService2CheckOutClearComment === 'true';
    if (data.RoomService3CheckInClearComment != null) this.roomService3CheckInClearComment = data.RoomService3CheckInClearComment === 'true';
    if (data.RoomService3CheckOutClearComment != null) this.roomService3CheckOutClearComment = data.RoomService3CheckOutClearComment === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Housekeeping by its ID or by exact match on other fields.
   * @param param Either the ID of the Housekeeping to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Housekeeping object or null (if id) or an array of Housekeeping objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Housekeeping | null>;
  static async select(param: Partial<Record<keyof Housekeeping, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Housekeeping[]>;
  static async select(param: number | Partial<Record<keyof Housekeeping, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Housekeeping | Housekeeping[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Housekeeping/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Housekeeping`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Housekeeping with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Housekeeping(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Housekeeping(entry));
      }
    }
  }
}

Housekeeping satisfies StarRezStructureStatic<Housekeeping>
