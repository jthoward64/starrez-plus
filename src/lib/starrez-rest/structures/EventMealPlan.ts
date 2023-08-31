// Generated from XML description of EventMealPlan

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EventMealPlan {
  eventMealPlanID?: number;
  eventID?: number;
  description?: string;
  mealPlanID?: number;
  guestEstimate?: number;
  guestGuarantee?: number;
  guestMaximum?: number;
  amount?: string;
  comments?: string;
  viewOnWeb?: boolean;
  webDescription?: string;
  webOrder?: number;
  webComments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EventMealPlan");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EventMealPlanID != null) this.eventMealPlanID = (data.EventMealPlanID != null ? parseInt(data.EventMealPlanID, 10) : data.EventMealPlanID);
    if (data.EventID != null) this.eventID = (data.EventID != null ? parseInt(data.EventID, 10) : data.EventID);
    if (data.Description != null) this.description = data.Description;
    if (data.MealPlanID != null) this.mealPlanID = (data.MealPlanID != null ? parseInt(data.MealPlanID, 10) : data.MealPlanID);
    if (data.GuestEstimate != null) this.guestEstimate = (data.GuestEstimate != null ? parseInt(data.GuestEstimate, 10) : data.GuestEstimate);
    if (data.GuestGuarantee != null) this.guestGuarantee = (data.GuestGuarantee != null ? parseInt(data.GuestGuarantee, 10) : data.GuestGuarantee);
    if (data.GuestMaximum != null) this.guestMaximum = (data.GuestMaximum != null ? parseInt(data.GuestMaximum, 10) : data.GuestMaximum);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.Comments != null) this.comments = data.Comments;
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
   * Fetches a EventMealPlan by its ID or by exact match on other fields.
   * @param param Either the ID of the EventMealPlan to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EventMealPlan object or null (if id) or an array of EventMealPlan objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EventMealPlan | null>;
  static async select(param: Partial<Record<keyof EventMealPlan, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EventMealPlan[]>;
  static async select(param: number | Partial<Record<keyof EventMealPlan, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EventMealPlan | EventMealPlan[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventMealPlan/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventMealPlan`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EventMealPlan with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EventMealPlan(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EventMealPlan(entry));
      }
    }
  }
}

EventMealPlan satisfies StarRezStructureStatic<EventMealPlan>
