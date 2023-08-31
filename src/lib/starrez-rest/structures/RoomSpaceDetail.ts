// Generated from XML description of RoomSpaceDetail

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceDetail {
  roomSpaceDetailID?: number;
  roomSpaceID?: number;
  roomService1Date?: Date | null;
  roomService2Date?: Date | null;
  roomService3Date?: Date | null;
  roomService1Comments?: string;
  roomService2Comments?: string;
  roomService3Comments?: string;
  roomService1Force?: boolean;
  roomService2Force?: boolean;
  roomService3Force?: boolean;
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
    const data = starRezXmlToJson(xml, "RoomSpaceDetail");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceDetailID != null) this.roomSpaceDetailID = (data.RoomSpaceDetailID != null ? parseInt(data.RoomSpaceDetailID, 10) : data.RoomSpaceDetailID);
    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
    if (data.RoomService1Date != null) this.roomService1Date = (data.RoomService1Date != null ? new Date(data.RoomService1Date) : data.RoomService1Date);
    if (data.RoomService2Date != null) this.roomService2Date = (data.RoomService2Date != null ? new Date(data.RoomService2Date) : data.RoomService2Date);
    if (data.RoomService3Date != null) this.roomService3Date = (data.RoomService3Date != null ? new Date(data.RoomService3Date) : data.RoomService3Date);
    if (data.RoomService1Comments != null) this.roomService1Comments = data.RoomService1Comments;
    if (data.RoomService2Comments != null) this.roomService2Comments = data.RoomService2Comments;
    if (data.RoomService3Comments != null) this.roomService3Comments = data.RoomService3Comments;
    if (data.RoomService1Force != null) this.roomService1Force = data.RoomService1Force === 'true';
    if (data.RoomService2Force != null) this.roomService2Force = data.RoomService2Force === 'true';
    if (data.RoomService3Force != null) this.roomService3Force = data.RoomService3Force === 'true';
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
   * Fetches a RoomSpaceDetail by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceDetail to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceDetail object or null (if id) or an array of RoomSpaceDetail objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceDetail | null>;
  static async select(param: Partial<Record<keyof RoomSpaceDetail, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceDetail[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceDetail, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceDetail | RoomSpaceDetail[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceDetail/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceDetail`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceDetail with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceDetail(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceDetail(entry));
      }
    }
  }
}

RoomSpaceDetail satisfies StarRezStructureStatic<RoomSpaceDetail>
