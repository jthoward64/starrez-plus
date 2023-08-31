// Generated from XML description of MealPlanFree

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class MealPlanFree {
  mealPlanFreeID?: number;
  recordTypeEnum?: unknown;
  mealPlanID?: number;
  dateStart?: Date | null;
  dateEnd?: Date | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "MealPlanFree");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MealPlanFreeID != null) this.mealPlanFreeID = (data.MealPlanFreeID != null ? parseInt(data.MealPlanFreeID, 10) : data.MealPlanFreeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.MealPlanID != null) this.mealPlanID = (data.MealPlanID != null ? parseInt(data.MealPlanID, 10) : data.MealPlanID);
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a MealPlanFree by its ID or by exact match on other fields.
   * @param param Either the ID of the MealPlanFree to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single MealPlanFree object or null (if id) or an array of MealPlanFree objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<MealPlanFree | null>;
  static async select(param: Partial<Record<keyof MealPlanFree, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MealPlanFree[]>;
  static async select(param: number | Partial<Record<keyof MealPlanFree, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MealPlanFree | MealPlanFree[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MealPlanFree/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MealPlanFree`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch MealPlanFree with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new MealPlanFree(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new MealPlanFree(entry));
      }
    }
  }
}

MealPlanFree satisfies StarRezStructureStatic<MealPlanFree>
