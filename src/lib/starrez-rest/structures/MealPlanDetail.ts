// Generated from XML description of MealPlanDetail

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class MealPlanDetail {
  mealPlanDetailID?: number;
  mealPlanID?: number;
  dayInWeekEnum?: unknown;
  mealPlanDate?: Date;
  breakfast?: number;
  lunch?: number;
  dinner?: number;
  other?: number;
  breakfast_MealPlanDiningHallID?: number;
  lunch_MealPlanDiningHallID?: number;
  dinner_MealPlanDiningHallID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "MealPlanDetail");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MealPlanDetailID != null) this.mealPlanDetailID = (data.MealPlanDetailID != null ? parseInt(data.MealPlanDetailID, 10) : data.MealPlanDetailID);
    if (data.MealPlanID != null) this.mealPlanID = (data.MealPlanID != null ? parseInt(data.MealPlanID, 10) : data.MealPlanID);
    if (data.DayInWeekEnum != null) this.dayInWeekEnum = data.DayInWeekEnum;
    if (data.MealPlanDate != null) this.mealPlanDate = (data.MealPlanDate != null ? new Date(data.MealPlanDate) : data.MealPlanDate);
    if (data.Breakfast != null) this.breakfast = (data.Breakfast != null ? parseInt(data.Breakfast, 10) : data.Breakfast);
    if (data.Lunch != null) this.lunch = (data.Lunch != null ? parseInt(data.Lunch, 10) : data.Lunch);
    if (data.Dinner != null) this.dinner = (data.Dinner != null ? parseInt(data.Dinner, 10) : data.Dinner);
    if (data.Other != null) this.other = (data.Other != null ? parseInt(data.Other, 10) : data.Other);
    if (data.Breakfast_MealPlanDiningHallID != null) this.breakfast_MealPlanDiningHallID = (data.Breakfast_MealPlanDiningHallID != null ? parseInt(data.Breakfast_MealPlanDiningHallID, 10) : data.Breakfast_MealPlanDiningHallID);
    if (data.Lunch_MealPlanDiningHallID != null) this.lunch_MealPlanDiningHallID = (data.Lunch_MealPlanDiningHallID != null ? parseInt(data.Lunch_MealPlanDiningHallID, 10) : data.Lunch_MealPlanDiningHallID);
    if (data.Dinner_MealPlanDiningHallID != null) this.dinner_MealPlanDiningHallID = (data.Dinner_MealPlanDiningHallID != null ? parseInt(data.Dinner_MealPlanDiningHallID, 10) : data.Dinner_MealPlanDiningHallID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<MealPlanDetail | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MealPlanDetail/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch MealPlanDetail with id ${id}`);
    } else {
      return new MealPlanDetail(await response.text());
    }
  }
}

MealPlanDetail satisfies StarRezStructureStatic<MealPlanDetail>
