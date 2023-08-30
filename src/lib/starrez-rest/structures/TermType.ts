// Generated from XML description of TermType

import { starRezXmlToJson } from "../parsing.js";

export class TermType {
  termTypeID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TermType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TermTypeID != null) this.termTypeID = parseInt(data.TermTypeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
