// Generated from XML description of Nationality

import { starRezXmlToJson } from "../parsing.js";

export class Nationality {
  nationalityID?: number;
  description?: string;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Nationality");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.NationalityID != null) this.nationalityID = parseInt(data.NationalityID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
