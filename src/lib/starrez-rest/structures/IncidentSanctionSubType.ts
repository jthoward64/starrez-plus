// Generated from XML description of IncidentSanctionSubType

import { starRezXmlToJson } from "../parsing.js";

export class IncidentSanctionSubType {
  incidentSanctionSubTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  incidentSanctionTypeID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentSanctionSubType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentSanctionSubTypeID != null) this.incidentSanctionSubTypeID = parseInt(data.IncidentSanctionSubTypeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.IncidentSanctionTypeID != null) this.incidentSanctionTypeID = parseInt(data.IncidentSanctionTypeID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
