// Generated from XML description of EntryMealPlanDetail

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryMealPlanDetail {
  entryMealPlanDetailID?: number;
  entryMealID?: number;
  dayInWeekEnum?: unknown;
  mealPlanDate?: Date;
  breakfast?: number;
  lunch?: number;
  dinner?: number;
  other?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryMealPlanDetail");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryMealPlanDetailID != null) this.entryMealPlanDetailID = parseInt(data.EntryMealPlanDetailID, 10);
    if (data.EntryMealID != null) this.entryMealID = parseInt(data.EntryMealID, 10);
    if (data.DayInWeekEnum != null) this.dayInWeekEnum = data.DayInWeekEnum;
    if (data.MealPlanDate != null) this.mealPlanDate = new Date(data.MealPlanDate);
    if (data.Breakfast != null) this.breakfast = parseInt(data.Breakfast, 10);
    if (data.Lunch != null) this.lunch = parseInt(data.Lunch, 10);
    if (data.Dinner != null) this.dinner = parseInt(data.Dinner, 10);
    if (data.Other != null) this.other = parseInt(data.Other, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryMealPlanDetail | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryMealPlanDetail/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryMealPlanDetail with id ${id}`);
    } else {
      return new EntryMealPlanDetail(await response.text());
    }
  }
}

EntryMealPlanDetail satisfies StarRezStructureStatic<EntryMealPlanDetail>
