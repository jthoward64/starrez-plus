// Generated from XML description of RoomSpaceClosed

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceClosed {
  roomSpaceClosedID?: number;
  roomSpaceID?: number;
  roomSpaceClosedReasonEnum?: unknown;
  roomTypeCapacityID?: number;
  roomConfigurationID?: number;
  bookingID?: number;
  dateStart?: Date;
  dateEnd?: Date;
  comments?: string;
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
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceClosed");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceClosedID != null) this.roomSpaceClosedID = (data.RoomSpaceClosedID != null ? parseInt(data.RoomSpaceClosedID, 10) : data.RoomSpaceClosedID);
    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
    if (data.RoomSpaceClosedReasonEnum != null) this.roomSpaceClosedReasonEnum = data.RoomSpaceClosedReasonEnum;
    if (data.RoomTypeCapacityID != null) this.roomTypeCapacityID = (data.RoomTypeCapacityID != null ? parseInt(data.RoomTypeCapacityID, 10) : data.RoomTypeCapacityID);
    if (data.RoomConfigurationID != null) this.roomConfigurationID = (data.RoomConfigurationID != null ? parseInt(data.RoomConfigurationID, 10) : data.RoomConfigurationID);
    if (data.BookingID != null) this.bookingID = (data.BookingID != null ? parseInt(data.BookingID, 10) : data.BookingID);
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.Comments != null) this.comments = data.Comments;
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
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomSpaceClosed by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomSpaceClosed to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomSpaceClosed object or null (if id) or an array of RoomSpaceClosed objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceClosed | null>;
  static async select(param: Partial<Record<keyof RoomSpaceClosed, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceClosed[]>;
  static async select(param: number | Partial<Record<keyof RoomSpaceClosed, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomSpaceClosed | RoomSpaceClosed[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceClosed/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceClosed`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceClosed with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomSpaceClosed(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomSpaceClosed(entry));
      }
    }
  }
}

RoomSpaceClosed satisfies StarRezStructureStatic<RoomSpaceClosed>
