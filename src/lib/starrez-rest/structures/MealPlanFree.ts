// Generated from XML description of MealPlanFree

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<MealPlanFree | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MealPlanFree/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch MealPlanFree with id ${id}`);
    } else {
      return new MealPlanFree(await response.text());
    }
  }
}

MealPlanFree satisfies StarRezStructureStatic<MealPlanFree>
