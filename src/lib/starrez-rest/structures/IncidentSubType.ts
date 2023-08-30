// Generated from XML description of IncidentSubType

import { starRezXmlToJson } from "../parsing.js";

export class IncidentSubType {
  incidentSubTypeID?: number;
  recordTypeEnum?: unknown;
  incidentTypeID?: number;
  incidentSeverityID?: number;
  description?: string;
  comments?: string;
  clery?: boolean;
  cleryOrder?: number;
  alwaysCountInClery?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentSubType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentSubTypeID != null) this.incidentSubTypeID = parseInt(data.IncidentSubTypeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.IncidentTypeID != null) this.incidentTypeID = parseInt(data.IncidentTypeID, 10);
    if (data.IncidentSeverityID != null) this.incidentSeverityID = parseInt(data.IncidentSeverityID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Clery != null) this.clery = data.Clery === 'true';
    if (data.CleryOrder != null) this.cleryOrder = parseInt(data.CleryOrder, 10);
    if (data.AlwaysCountInClery != null) this.alwaysCountInClery = data.AlwaysCountInClery === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
