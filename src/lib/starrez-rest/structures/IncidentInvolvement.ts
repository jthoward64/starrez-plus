// Generated from XML description of IncidentInvolvement

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.IncidentInvolvementID != null) this.incidentInvolvementID = (data.IncidentInvolvementID != null ? parseInt(data.IncidentInvolvementID, 10) : data.IncidentInvolvementID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Abbreviation != null) this.abbreviation = data.Abbreviation;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.IsManager != null) this.isManager = data.IsManager === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<IncidentInvolvement | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentInvolvement/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentInvolvement with id ${id}`);
    } else {
      return new IncidentInvolvement(await response.text());
    }
  }
}

IncidentInvolvement satisfies StarRezStructureStatic<IncidentInvolvement>
