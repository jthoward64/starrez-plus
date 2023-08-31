// Generated from XML description of WaitList

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WaitList {
  waitListID?: number;
  termID?: number;
  genderTypeEnum?: unknown;
  description?: string;
  comments?: string;
  lease?: boolean;
  removeEntriesWhenBooked?: boolean;
  roomTypeID?: number;
  roomLocationID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WaitList");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WaitListID != null) this.waitListID = (data.WaitListID != null ? parseInt(data.WaitListID, 10) : data.WaitListID);
    if (data.TermID != null) this.termID = (data.TermID != null ? parseInt(data.TermID, 10) : data.TermID);
    if (data.GenderTypeEnum != null) this.genderTypeEnum = data.GenderTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Lease != null) this.lease = data.Lease === 'true';
    if (data.RemoveEntriesWhenBooked != null) this.removeEntriesWhenBooked = data.RemoveEntriesWhenBooked === 'true';
    if (data.RoomTypeID != null) this.roomTypeID = (data.RoomTypeID != null ? parseInt(data.RoomTypeID, 10) : data.RoomTypeID);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WaitList by its ID or by exact match on other fields.
   * @param param Either the ID of the WaitList to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WaitList object or null (if id) or an array of WaitList objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WaitList | null>;
  static async select(param: Partial<Record<keyof WaitList, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WaitList[]>;
  static async select(param: number | Partial<Record<keyof WaitList, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WaitList | WaitList[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitList/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitList`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WaitList with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WaitList(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WaitList(entry));
      }
    }
  }
}

WaitList satisfies StarRezStructureStatic<WaitList>
