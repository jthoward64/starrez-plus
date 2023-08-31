// Generated from XML description of MealPlanSession

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.MealPlanSessionID != null) this.mealPlanSessionID = (data.MealPlanSessionID != null ? parseInt(data.MealPlanSessionID, 10) : data.MealPlanSessionID);
    if (data.MealPlanID != null) this.mealPlanID = (data.MealPlanID != null ? parseInt(data.MealPlanID, 10) : data.MealPlanID);
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.TransactionDateDue != null) this.transactionDateDue = (data.TransactionDateDue != null ? new Date(data.TransactionDateDue) : data.TransactionDateDue);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<MealPlanSession | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MealPlanSession/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch MealPlanSession with id ${id}`);
    } else {
      return new MealPlanSession(await response.text());
    }
  }
}

MealPlanSession satisfies StarRezStructureStatic<MealPlanSession>
