// Generated from XML description of EventRegistrationFee

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EventRegistrationFee {
  eventRegistrationFeeID?: number;
  eventID?: number;
  chargeToEntry?: boolean;
  chargeItemID?: number;
  description?: string;
  dateStart?: Date | null;
  dateEnd?: Date | null;
  amount?: string;
  comments?: string;
  registrationCode?: string;
  maxRegistrations?: number;
  viewOnWeb?: boolean;
  webDescription?: string;
  webOrder?: number;
  webComments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EventRegistrationFee");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EventRegistrationFeeID != null) this.eventRegistrationFeeID = (data.EventRegistrationFeeID != null ? parseInt(data.EventRegistrationFeeID, 10) : data.EventRegistrationFeeID);
    if (data.EventID != null) this.eventID = (data.EventID != null ? parseInt(data.EventID, 10) : data.EventID);
    if (data.ChargeToEntry != null) this.chargeToEntry = data.ChargeToEntry === 'true';
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.Description != null) this.description = data.Description;
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.RegistrationCode != null) this.registrationCode = data.RegistrationCode;
    if (data.MaxRegistrations != null) this.maxRegistrations = (data.MaxRegistrations != null ? parseInt(data.MaxRegistrations, 10) : data.MaxRegistrations);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebOrder != null) this.webOrder = (data.WebOrder != null ? parseInt(data.WebOrder, 10) : data.WebOrder);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EventRegistrationFee by its ID or by exact match on other fields.
   * @param param Either the ID of the EventRegistrationFee to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EventRegistrationFee object or null (if id) or an array of EventRegistrationFee objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EventRegistrationFee | null>;
  static async select(param: Partial<Record<keyof EventRegistrationFee, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EventRegistrationFee[]>;
  static async select(param: number | Partial<Record<keyof EventRegistrationFee, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EventRegistrationFee | EventRegistrationFee[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventRegistrationFee/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventRegistrationFee`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EventRegistrationFee with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EventRegistrationFee(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EventRegistrationFee(entry));
      }
    }
  }
}

EventRegistrationFee satisfies StarRezStructureStatic<EventRegistrationFee>
