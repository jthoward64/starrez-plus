// Generated from XML description of MealPlanSession

import { starRezXmlToJson } from "../parsing.js";

export class MealPlanSession {
  mealPlanSessionID?: number;
  mealPlanID?: number;
  dateStart?: Date | null;
  dateEnd?: Date | null;
  transactionDateDue?: Date | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "MealPlanSession");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MealPlanSessionID != null) this.mealPlanSessionID = parseInt(data.MealPlanSessionID, 10);
    if (data.MealPlanID != null) this.mealPlanID = parseInt(data.MealPlanID, 10);
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.TransactionDateDue != null) this.transactionDateDue = new Date(data.TransactionDateDue);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
