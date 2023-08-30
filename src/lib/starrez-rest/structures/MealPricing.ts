// Generated from XML description of MealPricing

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class MealPricing {
  mealPricingID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  allowanceARate?: string;
  allowanceBRate?: string;
  allowanceCRate?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "MealPricing");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MealPricingID != null) this.mealPricingID = (data.MealPricingID != null ? parseInt(data.MealPricingID, 10) : data.MealPricingID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.AllowanceARate != null) this.allowanceARate = data.AllowanceARate;
    if (data.AllowanceBRate != null) this.allowanceBRate = data.AllowanceBRate;
    if (data.AllowanceCRate != null) this.allowanceCRate = data.AllowanceCRate;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<MealPricing | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MealPricing/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch MealPricing with id ${id}`);
    } else {
      return new MealPricing(await response.text());
    }
  }
}

MealPricing satisfies StarRezStructureStatic<MealPricing>
