// Generated from XML description of GroupMealPlan

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class GroupMealPlan {
  groupMealPlanID?: number;
  groupID?: number;
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
    const data = starRezXmlToJson(xml, "GroupMealPlan");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GroupMealPlanID != null) this.groupMealPlanID = (data.GroupMealPlanID != null ? parseInt(data.GroupMealPlanID, 10) : data.GroupMealPlanID);
    if (data.GroupID != null) this.groupID = (data.GroupID != null ? parseInt(data.GroupID, 10) : data.GroupID);
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
   * Fetches a GroupMealPlan by its ID or by exact match on other fields.
   * @param param Either the ID of the GroupMealPlan to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single GroupMealPlan object or null (if id) or an array of GroupMealPlan objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<GroupMealPlan | null>;
  static async select(param: Partial<Record<keyof GroupMealPlan, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GroupMealPlan[]>;
  static async select(param: number | Partial<Record<keyof GroupMealPlan, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GroupMealPlan | GroupMealPlan[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GroupMealPlan/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GroupMealPlan`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch GroupMealPlan with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new GroupMealPlan(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new GroupMealPlan(entry));
      }
    }
  }
}

GroupMealPlan satisfies StarRezStructureStatic<GroupMealPlan>
