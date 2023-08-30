// Generated from XML description of IncidentInvolvement

import { starRezXmlToJson } from "../parsing.js";

export class IncidentInvolvement {
  incidentInvolvementID?: number;
  recordTypeEnum?: unknown;
  abbreviation?: string;
  description?: string;
  comments?: string;
  isManager?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentInvolvement");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentInvolvementID != null) this.incidentInvolvementID = parseInt(data.IncidentInvolvementID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Abbreviation != null) this.abbreviation = data.Abbreviation;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.IsManager != null) this.isManager = data.IsManager === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
