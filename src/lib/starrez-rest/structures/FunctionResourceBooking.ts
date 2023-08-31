// Generated from XML description of FunctionResourceBooking

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionResourceBooking {
  functionResourceBookingID?: number;
  functionRoomBookingID?: number;
  functionResourceID?: number;
  quantity?: number;
  functionResourceAmount?: string;
  functionResourceAmountCost?: string;
  setupNotes?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionResourceBooking");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionResourceBookingID != null) this.functionResourceBookingID = (data.FunctionResourceBookingID != null ? parseInt(data.FunctionResourceBookingID, 10) : data.FunctionResourceBookingID);
    if (data.FunctionRoomBookingID != null) this.functionRoomBookingID = (data.FunctionRoomBookingID != null ? parseInt(data.FunctionRoomBookingID, 10) : data.FunctionRoomBookingID);
    if (data.FunctionResourceID != null) this.functionResourceID = (data.FunctionResourceID != null ? parseInt(data.FunctionResourceID, 10) : data.FunctionResourceID);
    if (data.Quantity != null) this.quantity = (data.Quantity != null ? parseInt(data.Quantity, 10) : data.Quantity);
    if (data.FunctionResourceAmount != null) this.functionResourceAmount = data.FunctionResourceAmount;
    if (data.FunctionResourceAmountCost != null) this.functionResourceAmountCost = data.FunctionResourceAmountCost;
    if (data.SetupNotes != null) this.setupNotes = data.SetupNotes;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a FunctionResourceBooking by its ID or by exact match on other fields.
   * @param param Either the ID of the FunctionResourceBooking to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FunctionResourceBooking object or null (if id) or an array of FunctionResourceBooking objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FunctionResourceBooking | null>;
  static async select(param: Partial<Record<keyof FunctionResourceBooking, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionResourceBooking[]>;
  static async select(param: number | Partial<Record<keyof FunctionResourceBooking, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionResourceBooking | FunctionResourceBooking[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionResourceBooking/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionResourceBooking`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionResourceBooking with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FunctionResourceBooking(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FunctionResourceBooking(entry));
      }
    }
  }
}

FunctionResourceBooking satisfies StarRezStructureStatic<FunctionResourceBooking>
