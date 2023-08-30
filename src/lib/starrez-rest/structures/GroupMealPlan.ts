// Generated from XML description of GroupMealPlan

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.GroupMealPlanID != null) this.groupMealPlanID = parseInt(data.GroupMealPlanID, 10);
    if (data.GroupID != null) this.groupID = parseInt(data.GroupID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.MealPlanID != null) this.mealPlanID = parseInt(data.MealPlanID, 10);
    if (data.GuestEstimate != null) this.guestEstimate = parseInt(data.GuestEstimate, 10);
    if (data.GuestGuarantee != null) this.guestGuarantee = parseInt(data.GuestGuarantee, 10);
    if (data.GuestMaximum != null) this.guestMaximum = parseInt(data.GuestMaximum, 10);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebOrder != null) this.webOrder = parseInt(data.WebOrder, 10);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
