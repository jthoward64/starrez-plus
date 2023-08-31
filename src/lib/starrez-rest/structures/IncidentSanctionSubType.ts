// Generated from XML description of IncidentSanctionSubType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentSanctionSubType {
  incidentSanctionSubTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  incidentSanctionTypeID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentSanctionSubType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentSanctionSubTypeID != null) this.incidentSanctionSubTypeID = (data.IncidentSanctionSubTypeID != null ? parseInt(data.IncidentSanctionSubTypeID, 10) : data.IncidentSanctionSubTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.IncidentSanctionTypeID != null) this.incidentSanctionTypeID = (data.IncidentSanctionTypeID != null ? parseInt(data.IncidentSanctionTypeID, 10) : data.IncidentSanctionTypeID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<IncidentSanctionSubType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentSanctionSubType/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentSanctionSubType with id ${id}`);
    } else {
      return new IncidentSanctionSubType(await response.text());
    }
  }
}

IncidentSanctionSubType satisfies StarRezStructureStatic<IncidentSanctionSubType>
