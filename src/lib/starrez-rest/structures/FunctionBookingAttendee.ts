// Generated from XML description of FunctionBookingAttendee

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionBookingAttendee {
  functionBookingAttendeeID?: number;
  functionBookingID?: number;
  entryID?: number;
  quantity?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionBookingAttendee");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionBookingAttendeeID != null) this.functionBookingAttendeeID = (data.FunctionBookingAttendeeID != null ? parseInt(data.FunctionBookingAttendeeID, 10) : data.FunctionBookingAttendeeID);
    if (data.FunctionBookingID != null) this.functionBookingID = (data.FunctionBookingID != null ? parseInt(data.FunctionBookingID, 10) : data.FunctionBookingID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.Quantity != null) this.quantity = (data.Quantity != null ? parseInt(data.Quantity, 10) : data.Quantity);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a FunctionBookingAttendee by its ID or by exact match on other fields.
   * @param param Either the ID of the FunctionBookingAttendee to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FunctionBookingAttendee object or null (if id) or an array of FunctionBookingAttendee objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FunctionBookingAttendee | null>;
  static async select(param: Partial<Record<keyof FunctionBookingAttendee, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionBookingAttendee[]>;
  static async select(param: number | Partial<Record<keyof FunctionBookingAttendee, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionBookingAttendee | FunctionBookingAttendee[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBookingAttendee/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBookingAttendee`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionBookingAttendee with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FunctionBookingAttendee(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FunctionBookingAttendee(entry));
      }
    }
  }
}

FunctionBookingAttendee satisfies StarRezStructureStatic<FunctionBookingAttendee>
