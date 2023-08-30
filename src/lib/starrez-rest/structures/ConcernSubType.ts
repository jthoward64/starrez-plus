// Generated from XML description of ConcernSubType

import { starRezXmlToJson } from "../parsing.js";

export class ConcernSubType {
  concernSubTypeID?: number;
  concernTypeID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ConcernSubType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ConcernSubTypeID != null) this.concernSubTypeID = parseInt(data.ConcernSubTypeID, 10);
    if (data.ConcernTypeID != null) this.concernTypeID = parseInt(data.ConcernTypeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
