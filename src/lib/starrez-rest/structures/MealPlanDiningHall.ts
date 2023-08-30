// Generated from XML description of MealPlanDiningHall

import { starRezXmlToJson } from "../parsing.js";
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

    if (data.MealPlanDiningHallID != null) this.mealPlanDiningHallID = parseInt(data.MealPlanDiningHallID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.CapacityMin != null) this.capacityMin = parseInt(data.CapacityMin, 10);
    if (data.CapacityMax != null) this.capacityMax = parseInt(data.CapacityMax, 10);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<MealPlanDiningHall | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MealPlanDiningHall/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch MealPlanDiningHall with id ${id}`);
    } else {
      return new MealPlanDiningHall(await response.text());
    }
  }
}

MealPlanDiningHall satisfies StarRezStructureStatic<MealPlanDiningHall>
