// Generated from XML description of IncidentAppealType

import { starRezXmlToJson } from "../parsing.js";

export class IncidentAppealType {
  incidentAppealTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentAppealType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentAppealTypeID != null) this.incidentAppealTypeID = parseInt(data.IncidentAppealTypeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
