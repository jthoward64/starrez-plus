// Generated from XML description of MealPlanFree

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.MealPlanFreeID != null) this.mealPlanFreeID = parseInt(data.MealPlanFreeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.MealPlanID != null) this.mealPlanID = parseInt(data.MealPlanID, 10);
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
