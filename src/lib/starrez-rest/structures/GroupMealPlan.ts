// Generated from XML description of GroupMealPlan

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<GroupMealPlan | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GroupMealPlan/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch GroupMealPlan with id ${id}`);
    } else {
      return new GroupMealPlan(await response.text());
    }
  }
}

GroupMealPlan satisfies StarRezStructureStatic<GroupMealPlan>
