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

  /**
   * Fetches a MealPlanDetail by its ID or by exact match on other fields.
   * @param param Either the ID of the MealPlanDetail to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single MealPlanDetail object or null (if id) or an array of MealPlanDetail objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<MealPlanDetail | null>;
  static async select(param: Partial<Record<keyof MealPlanDetail, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MealPlanDetail[]>;
  static async select(param: number | Partial<Record<keyof MealPlanDetail, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MealPlanDetail | MealPlanDetail[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MealPlanDetail/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MealPlanDetail`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch MealPlanDetail with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new MealPlanDetail(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new MealPlanDetail(entry));
      }
    }
  }
}

MealPlanDetail satisfies StarRezStructureStatic<MealPlanDetail>
