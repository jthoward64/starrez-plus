// Generated from XML description of IncidentType

import { starRezXmlToJson } from "../parsing.js";

export class IncidentType {
  incidentTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  grade?: number;
  comments?: string;
  categoryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentTypeID != null) this.incidentTypeID = parseInt(data.IncidentTypeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Grade != null) this.grade = parseInt(data.Grade, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
