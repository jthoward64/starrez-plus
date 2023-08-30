// Generated from XML description of CurrencyConversion

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class CurrencyConversion {
  currencyConversionID?: number;
  description?: string;
  conversionRate?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "CurrencyConversion");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CurrencyConversionID != null) this.currencyConversionID = parseInt(data.CurrencyConversionID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.ConversionRate != null) this.conversionRate = data.ConversionRate;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<CurrencyConversion | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CurrencyConversion/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch CurrencyConversion with id ${id}`);
    } else {
      return new CurrencyConversion(await response.text());
    }
}

}