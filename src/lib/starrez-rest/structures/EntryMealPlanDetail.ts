// Generated from XML description of EntryMealPlanDetail

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

    if (data.EntryMealPlanDetailID != null) this.entryMealPlanDetailID = (data.EntryMealPlanDetailID != null ? parseInt(data.EntryMealPlanDetailID, 10) : data.EntryMealPlanDetailID);
    if (data.EntryMealID != null) this.entryMealID = (data.EntryMealID != null ? parseInt(data.EntryMealID, 10) : data.EntryMealID);
    if (data.DayInWeekEnum != null) this.dayInWeekEnum = data.DayInWeekEnum;
    if (data.MealPlanDate != null) this.mealPlanDate = (data.MealPlanDate != null ? new Date(data.MealPlanDate) : data.MealPlanDate);
    if (data.Breakfast != null) this.breakfast = (data.Breakfast != null ? parseInt(data.Breakfast, 10) : data.Breakfast);
    if (data.Lunch != null) this.lunch = (data.Lunch != null ? parseInt(data.Lunch, 10) : data.Lunch);
    if (data.Dinner != null) this.dinner = (data.Dinner != null ? parseInt(data.Dinner, 10) : data.Dinner);
    if (data.Other != null) this.other = (data.Other != null ? parseInt(data.Other, 10) : data.Other);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryMealPlanDetail by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryMealPlanDetail to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryMealPlanDetail object or null (if id) or an array of EntryMealPlanDetail objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryMealPlanDetail | null>;
  static async select(param: Partial<Record<keyof EntryMealPlanDetail, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryMealPlanDetail[]>;
  static async select(param: number | Partial<Record<keyof EntryMealPlanDetail, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryMealPlanDetail | EntryMealPlanDetail[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryMealPlanDetail/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryMealPlanDetail`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryMealPlanDetail with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryMealPlanDetail(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryMealPlanDetail(entry));
      }
    }
  }
}

EntryMealPlanDetail satisfies StarRezStructureStatic<EntryMealPlanDetail>
