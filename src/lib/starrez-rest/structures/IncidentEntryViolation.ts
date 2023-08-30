// Generated from XML description of IncidentEntryViolation

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.IncidentEntryViolationID != null) this.incidentEntryViolationID = (data.IncidentEntryViolationID != null ? parseInt(data.IncidentEntryViolationID, 10) : data.IncidentEntryViolationID);
    if (data.IncidentEntryID != null) this.incidentEntryID = (data.IncidentEntryID != null ? parseInt(data.IncidentEntryID, 10) : data.IncidentEntryID);
    if (data.IncidentViolationID != null) this.incidentViolationID = (data.IncidentViolationID != null ? parseInt(data.IncidentViolationID, 10) : data.IncidentViolationID);
    if (data.IncidentEntryAppealID != null) this.incidentEntryAppealID = (data.IncidentEntryAppealID != null ? parseInt(data.IncidentEntryAppealID, 10) : data.IncidentEntryAppealID);
    if (data.IncidentTypeID != null) this.incidentTypeID = (data.IncidentTypeID != null ? parseInt(data.IncidentTypeID, 10) : data.IncidentTypeID);
    if (data.IncidentSubTypeID != null) this.incidentSubTypeID = (data.IncidentSubTypeID != null ? parseInt(data.IncidentSubTypeID, 10) : data.IncidentSubTypeID);
    if (data.IncidentSeverityID != null) this.incidentSeverityID = (data.IncidentSeverityID != null ? parseInt(data.IncidentSeverityID, 10) : data.IncidentSeverityID);
    if (data.IncidentPleaID != null) this.incidentPleaID = (data.IncidentPleaID != null ? parseInt(data.IncidentPleaID, 10) : data.IncidentPleaID);
    if (data.IncidentFindingID != null) this.incidentFindingID = (data.IncidentFindingID != null ? parseInt(data.IncidentFindingID, 10) : data.IncidentFindingID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<IncidentEntryViolation | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentEntryViolation/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentEntryViolation with id ${id}`);
    } else {
      return new IncidentEntryViolation(await response.text());
    }
  }
}

IncidentEntryViolation satisfies StarRezStructureStatic<IncidentEntryViolation>
