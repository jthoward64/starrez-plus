// Generated from XML description of IncidentViolation

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentViolation {
  incidentViolationID?: number;
  incidentID?: number;
  incidentTypeID?: number;
  incidentSubTypeID?: number;
  incidentSeverityID?: number;
  clery?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentViolation");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentViolationID != null) this.incidentViolationID = parseInt(data.IncidentViolationID, 10);
    if (data.IncidentID != null) this.incidentID = parseInt(data.IncidentID, 10);
    if (data.IncidentTypeID != null) this.incidentTypeID = parseInt(data.IncidentTypeID, 10);
    if (data.IncidentSubTypeID != null) this.incidentSubTypeID = parseInt(data.IncidentSubTypeID, 10);
    if (data.IncidentSeverityID != null) this.incidentSeverityID = parseInt(data.IncidentSeverityID, 10);
    if (data.Clery != null) this.clery = data.Clery === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<IncidentViolation | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentViolation/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentViolation with id ${id}`);
    } else {
      return new IncidentViolation(await response.text());
    }
  }
}

IncidentViolation satisfies StarRezStructureStatic<IncidentViolation>
