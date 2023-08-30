// Generated from XML description of LookupText

import { starRezXmlToJson } from "../parsing.js";

export class LookupText {
  lookupTextID?: number;
  lookupID?: number;
  lookupText?: string;
  lookupValue?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "LookupText");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.LookupTextID != null) this.lookupTextID = parseInt(data.LookupTextID, 10);
    if (data.LookupID != null) this.lookupID = parseInt(data.LookupID, 10);
    if (data.LookupText != null) this.lookupText = data.LookupText;
    if (data.LookupValue != null) this.lookupValue = data.LookupValue;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
