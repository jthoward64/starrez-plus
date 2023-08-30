// Generated from XML description of MealPlanDetail

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.MealPlanDetailID != null) this.mealPlanDetailID = parseInt(data.MealPlanDetailID, 10);
    if (data.MealPlanID != null) this.mealPlanID = parseInt(data.MealPlanID, 10);
    if (data.DayInWeekEnum != null) this.dayInWeekEnum = data.DayInWeekEnum;
    if (data.MealPlanDate != null) this.mealPlanDate = new Date(data.MealPlanDate);
    if (data.Breakfast != null) this.breakfast = parseInt(data.Breakfast, 10);
    if (data.Lunch != null) this.lunch = parseInt(data.Lunch, 10);
    if (data.Dinner != null) this.dinner = parseInt(data.Dinner, 10);
    if (data.Other != null) this.other = parseInt(data.Other, 10);
    if (data.Breakfast_MealPlanDiningHallID != null) this.breakfast_MealPlanDiningHallID = parseInt(data.Breakfast_MealPlanDiningHallID, 10);
    if (data.Lunch_MealPlanDiningHallID != null) this.lunch_MealPlanDiningHallID = parseInt(data.Lunch_MealPlanDiningHallID, 10);
    if (data.Dinner_MealPlanDiningHallID != null) this.dinner_MealPlanDiningHallID = parseInt(data.Dinner_MealPlanDiningHallID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<MealPlanDetail | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MealPlanDetail/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch MealPlanDetail with id ${id}`);
    } else {
      return new MealPlanDetail(await response.text());
    }
}

}
