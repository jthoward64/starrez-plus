// Generated from XML description of FunctionBooking

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionBooking {
  functionBookingID?: number;
  eventID?: number;
  functionTypeID?: number;
  description?: string;
  dateStart?: Date;
  dateEnd?: Date;
  activeDateStart?: Date | null;
  activeDateEnd?: Date | null;
  assigned_SecurityUserID?: number;
  attendeeGuarantee?: number;
  attendeeEstimate?: number;
  attendeeMaximum?: number;
  allowQuantity?: boolean;
  quantityMaximum?: number;
  serviceFeePercentage?: number;
  setupNotes?: string;
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
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  viewOnWeb?: boolean;
  webDescription?: string;
  webOrder?: number;
  webComments?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionBooking");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionBookingID != null) this.functionBookingID = (data.FunctionBookingID != null ? parseInt(data.FunctionBookingID, 10) : data.FunctionBookingID);
    if (data.EventID != null) this.eventID = (data.EventID != null ? parseInt(data.EventID, 10) : data.EventID);
    if (data.FunctionTypeID != null) this.functionTypeID = (data.FunctionTypeID != null ? parseInt(data.FunctionTypeID, 10) : data.FunctionTypeID);
    if (data.Description != null) this.description = data.Description;
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.ActiveDateStart != null) this.activeDateStart = (data.ActiveDateStart != null ? new Date(data.ActiveDateStart) : data.ActiveDateStart);
    if (data.ActiveDateEnd != null) this.activeDateEnd = (data.ActiveDateEnd != null ? new Date(data.ActiveDateEnd) : data.ActiveDateEnd);
    if (data.Assigned_SecurityUserID != null) this.assigned_SecurityUserID = (data.Assigned_SecurityUserID != null ? parseInt(data.Assigned_SecurityUserID, 10) : data.Assigned_SecurityUserID);
    if (data.AttendeeGuarantee != null) this.attendeeGuarantee = (data.AttendeeGuarantee != null ? parseInt(data.AttendeeGuarantee, 10) : data.AttendeeGuarantee);
    if (data.AttendeeEstimate != null) this.attendeeEstimate = (data.AttendeeEstimate != null ? parseInt(data.AttendeeEstimate, 10) : data.AttendeeEstimate);
    if (data.AttendeeMaximum != null) this.attendeeMaximum = (data.AttendeeMaximum != null ? parseInt(data.AttendeeMaximum, 10) : data.AttendeeMaximum);
    if (data.AllowQuantity != null) this.allowQuantity = data.AllowQuantity === 'true';
    if (data.QuantityMaximum != null) this.quantityMaximum = (data.QuantityMaximum != null ? parseInt(data.QuantityMaximum, 10) : data.QuantityMaximum);
    if (data.ServiceFeePercentage != null) this.serviceFeePercentage = (data.ServiceFeePercentage != null ? parseInt(data.ServiceFeePercentage, 10) : data.ServiceFeePercentage);
    if (data.SetupNotes != null) this.setupNotes = data.SetupNotes;
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
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebOrder != null) this.webOrder = (data.WebOrder != null ? parseInt(data.WebOrder, 10) : data.WebOrder);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a FunctionBooking by its ID or by exact match on other fields.
   * @param param Either the ID of the FunctionBooking to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FunctionBooking object or null (if id) or an array of FunctionBooking objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FunctionBooking | null>;
  static async select(param: Partial<Record<keyof FunctionBooking, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionBooking[]>;
  static async select(param: number | Partial<Record<keyof FunctionBooking, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FunctionBooking | FunctionBooking[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBooking/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBooking`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionBooking with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FunctionBooking(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FunctionBooking(entry));
      }
    }
  }
}

FunctionBooking satisfies StarRezStructureStatic<FunctionBooking>
