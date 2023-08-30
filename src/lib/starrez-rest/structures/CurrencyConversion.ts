// Generated from XML description of CurrencyConversion

import { starRezXmlToJson } from "../parsing.js";

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
}
