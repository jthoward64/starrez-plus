// Generated from XML description of IncidentActionEntry

import { starRezXmlToJson } from "../parsing.js";

export class IncidentActionEntry {
  incidentActionEntryID?: number;
  incidentActionID?: number;
  entryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentActionEntry");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentActionEntryID != null) this.incidentActionEntryID = parseInt(data.IncidentActionEntryID, 10);
    if (data.IncidentActionID != null) this.incidentActionID = parseInt(data.IncidentActionID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
