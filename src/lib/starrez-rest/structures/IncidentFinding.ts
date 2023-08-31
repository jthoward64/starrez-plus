// Generated from XML description of IncidentFinding

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.IncidentFindingID != null) this.incidentFindingID = (data.IncidentFindingID != null ? parseInt(data.IncidentFindingID, 10) : data.IncidentFindingID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.IsResponsible != null) this.isResponsible = data.IsResponsible === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<IncidentFinding | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentFinding/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentFinding with id ${id}`);
    } else {
      return new IncidentFinding(await response.text());
    }
  }
}

IncidentFinding satisfies StarRezStructureStatic<IncidentFinding>
