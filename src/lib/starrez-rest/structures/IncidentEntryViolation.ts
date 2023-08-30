// Generated from XML description of IncidentEntryViolation

import { starRezXmlToJson } from "../parsing.js";

export class IncidentEntryViolation {
  incidentEntryViolationID?: number;
  incidentEntryID?: number;
  incidentViolationID?: number;
  incidentEntryAppealID?: number;
  incidentTypeID?: number;
  incidentSubTypeID?: number;
  incidentSeverityID?: number;
  incidentPleaID?: number;
  incidentFindingID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentEntryViolation");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentEntryViolationID != null) this.incidentEntryViolationID = parseInt(data.IncidentEntryViolationID, 10);
    if (data.IncidentEntryID != null) this.incidentEntryID = parseInt(data.IncidentEntryID, 10);
    if (data.IncidentViolationID != null) this.incidentViolationID = parseInt(data.IncidentViolationID, 10);
    if (data.IncidentEntryAppealID != null) this.incidentEntryAppealID = parseInt(data.IncidentEntryAppealID, 10);
    if (data.IncidentTypeID != null) this.incidentTypeID = parseInt(data.IncidentTypeID, 10);
    if (data.IncidentSubTypeID != null) this.incidentSubTypeID = parseInt(data.IncidentSubTypeID, 10);
    if (data.IncidentSeverityID != null) this.incidentSeverityID = parseInt(data.IncidentSeverityID, 10);
    if (data.IncidentPleaID != null) this.incidentPleaID = parseInt(data.IncidentPleaID, 10);
    if (data.IncidentFindingID != null) this.incidentFindingID = parseInt(data.IncidentFindingID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
