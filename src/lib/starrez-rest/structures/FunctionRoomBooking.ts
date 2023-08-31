// Generated from XML description of FunctionRoomBooking

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionRoomBooking {
  functionRoomBookingID?: number;
  functionRoomID?: number;
  functionBookingID?: number;
  functionRoomSetupID?: number;
  functionRoomRateID?: number;
  functionRoomBookingStatusEnum?: unknown;
  functionRoomRateAmount?: string;
  functionRoomRateAmountCost?: string;
  setupNotes?: string;
  comments?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionRoomBooking");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionRoomBookingID != null) this.functionRoomBookingID = (data.FunctionRoomBookingID != null ? parseInt(data.FunctionRoomBookingID, 10) : data.FunctionRoomBookingID);
    if (data.FunctionRoomID != null) this.functionRoomID = (data.FunctionRoomID != null ? parseInt(data.FunctionRoomID, 10) : data.FunctionRoomID);
    if (data.FunctionBookingID != null) this.functionBookingID = (data.FunctionBookingID != null ? parseInt(data.FunctionBookingID, 10) : data.FunctionBookingID);
    if (data.FunctionRoomSetupID != null) this.functionRoomSetupID = (data.FunctionRoomSetupID != null ? parseInt(data.FunctionRoomSetupID, 10) : data.FunctionRoomSetupID);
    if (data.FunctionRoomRateID != null) this.functionRoomRateID = (data.FunctionRoomRateID != null ? parseInt(data.FunctionRoomRateID, 10) : data.FunctionRoomRateID);
    if (data.FunctionRoomBookingStatusEnum != null) this.functionRoomBookingStatusEnum = data.FunctionRoomBookingStatusEnum;
    if (data.FunctionRoomRateAmount != null) this.functionRoomRateAmount = data.FunctionRoomRateAmount;
    if (data.FunctionRoomRateAmountCost != null) this.functionRoomRateAmountCost = data.FunctionRoomRateAmountCost;
    if (data.SetupNotes != null) this.setupNotes = data.SetupNotes;
    if (data.Comments != null) this.comments = data.Comments;
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
   * Fetches a FunctionRoomBooking by its ID or by exact match on other fields.
   * @param param Either the ID of the FunctionRoomBooking to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FunctionRoomBooking object or null (if id) or an array of FunctionRoomBooking objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FunctionRoomBooking | null>;
  static async select(param: Partial<Record<keyof FunctionRoomBooking, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionRoomBooking[]>;
  static async select(param: number | Partial<Record<keyof FunctionRoomBooking, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionRoomBooking | FunctionRoomBooking[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionRoomBooking/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionRoomBooking`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionRoomBooking with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FunctionRoomBooking(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FunctionRoomBooking(entry));
      }
    }
  }
}

FunctionRoomBooking satisfies StarRezStructureStatic<FunctionRoomBooking>
