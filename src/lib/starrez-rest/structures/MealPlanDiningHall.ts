// Generated from XML description of MealPlanDiningHall

import { starRezXmlToJson } from "../parsing.js";

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
}
