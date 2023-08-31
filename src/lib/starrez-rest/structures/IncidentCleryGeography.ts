// Generated from XML description of IncidentCleryGeography

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentCleryGeography {
  incidentCleryGeographyID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentCleryGeography");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentCleryGeographyID != null) this.incidentCleryGeographyID = (data.IncidentCleryGeographyID != null ? parseInt(data.IncidentCleryGeographyID, 10) : data.IncidentCleryGeographyID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<IncidentCleryGeography | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentCleryGeography/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentCleryGeography with id ${id}`);
    } else {
      return new IncidentCleryGeography(await response.text());
    }
  }
}

IncidentCleryGeography satisfies StarRezStructureStatic<IncidentCleryGeography>
