// Generated from XML description of EntryTemporarySpace

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryTemporarySpace {
  entryTemporarySpaceID?: number;
  entryID?: number;
  roomSpaceID?: number;
  bookingID?: number;
  temporarySpaceTypeEnum?: unknown;
  startDate?: Date;
  endDate?: Date;
  reason?: string;
  notes?: string;
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
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryTemporarySpace");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryTemporarySpaceID != null) this.entryTemporarySpaceID = (data.EntryTemporarySpaceID != null ? parseInt(data.EntryTemporarySpaceID, 10) : data.EntryTemporarySpaceID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
    if (data.BookingID != null) this.bookingID = (data.BookingID != null ? parseInt(data.BookingID, 10) : data.BookingID);
    if (data.TemporarySpaceTypeEnum != null) this.temporarySpaceTypeEnum = data.TemporarySpaceTypeEnum;
    if (data.StartDate != null) this.startDate = (data.StartDate != null ? new Date(data.StartDate) : data.StartDate);
    if (data.EndDate != null) this.endDate = (data.EndDate != null ? new Date(data.EndDate) : data.EndDate);
    if (data.Reason != null) this.reason = data.Reason;
    if (data.Notes != null) this.notes = data.Notes;
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
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryTemporarySpace by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryTemporarySpace to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryTemporarySpace object or null (if id) or an array of EntryTemporarySpace objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryTemporarySpace | null>;
  static async select(param: Partial<Record<keyof EntryTemporarySpace, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryTemporarySpace[]>;
  static async select(param: number | Partial<Record<keyof EntryTemporarySpace, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryTemporarySpace | EntryTemporarySpace[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryTemporarySpace/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryTemporarySpace`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryTemporarySpace with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryTemporarySpace(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryTemporarySpace(entry));
      }
    }
  }
}

EntryTemporarySpace satisfies StarRezStructureStatic<EntryTemporarySpace>
