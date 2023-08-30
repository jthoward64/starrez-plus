// Generated from XML description of IncidentPlea

import { starRezXmlToJson } from "../parsing.js";

export class IncidentPlea {
  incidentPleaID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentPlea");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentPleaID != null) this.incidentPleaID = parseInt(data.IncidentPleaID, 10);
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
