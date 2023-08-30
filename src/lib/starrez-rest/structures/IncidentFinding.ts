// Generated from XML description of IncidentFinding

import { starRezXmlToJson } from "../parsing.js";

export class IncidentFinding {
  incidentFindingID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  isResponsible?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentFinding");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentFindingID != null) this.incidentFindingID = parseInt(data.IncidentFindingID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.IsResponsible != null) this.isResponsible = data.IsResponsible === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
