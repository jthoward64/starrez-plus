// Generated from XML description of IncidentAppealDecision

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentAppealDecision {
  incidentAppealDecisionID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentAppealDecision");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentAppealDecisionID != null) this.incidentAppealDecisionID = (data.IncidentAppealDecisionID != null ? parseInt(data.IncidentAppealDecisionID, 10) : data.IncidentAppealDecisionID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<IncidentAppealDecision | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentAppealDecision/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentAppealDecision with id ${id}`);
    } else {
      return new IncidentAppealDecision(await response.text());
    }
  }
}

IncidentAppealDecision satisfies StarRezStructureStatic<IncidentAppealDecision>
