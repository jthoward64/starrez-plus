// Generated from XML description of MealPlanDiningHall

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class MealPlanDiningHall {
  mealPlanDiningHallID?: number;
  description?: string;
  capacityMin?: number;
  capacityMax?: number;
  viewOnWeb?: boolean;
  chargeItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "MealPlanDiningHall");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MealPlanDiningHallID != null) this.mealPlanDiningHallID = (data.MealPlanDiningHallID != null ? parseInt(data.MealPlanDiningHallID, 10) : data.MealPlanDiningHallID);
    if (data.Description != null) this.description = data.Description;
    if (data.CapacityMin != null) this.capacityMin = (data.CapacityMin != null ? parseInt(data.CapacityMin, 10) : data.CapacityMin);
    if (data.CapacityMax != null) this.capacityMax = (data.CapacityMax != null ? parseInt(data.CapacityMax, 10) : data.CapacityMax);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a MealPlanDiningHall by its ID or by exact match on other fields.
   * @param param Either the ID of the MealPlanDiningHall to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single MealPlanDiningHall object or null (if id) or an array of MealPlanDiningHall objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<MealPlanDiningHall | null>;
  static async select(param: Partial<Record<keyof MealPlanDiningHall, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MealPlanDiningHall[]>;
  static async select(param: number | Partial<Record<keyof MealPlanDiningHall, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MealPlanDiningHall | MealPlanDiningHall[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MealPlanDiningHall/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MealPlanDiningHall`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch MealPlanDiningHall with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new MealPlanDiningHall(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new MealPlanDiningHall(entry));
      }
    }
  }
}

MealPlanDiningHall satisfies StarRezStructureStatic<MealPlanDiningHall>
