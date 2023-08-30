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
