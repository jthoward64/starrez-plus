// Generated from XML description of IncidentSubType

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentSubType {
  incidentSubTypeID?: number;
  recordTypeEnum?: unknown;
  incidentTypeID?: number;
  incidentSeverityID?: number;
  description?: string;
  comments?: string;
  clery?: boolean;
  cleryOrder?: number;
  alwaysCountInClery?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentSubType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentSubTypeID != null) this.incidentSubTypeID = (data.IncidentSubTypeID != null ? parseInt(data.IncidentSubTypeID, 10) : data.IncidentSubTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.IncidentTypeID != null) this.incidentTypeID = (data.IncidentTypeID != null ? parseInt(data.IncidentTypeID, 10) : data.IncidentTypeID);
    if (data.IncidentSeverityID != null) this.incidentSeverityID = (data.IncidentSeverityID != null ? parseInt(data.IncidentSeverityID, 10) : data.IncidentSeverityID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Clery != null) this.clery = data.Clery === 'true';
    if (data.CleryOrder != null) this.cleryOrder = (data.CleryOrder != null ? parseInt(data.CleryOrder, 10) : data.CleryOrder);
    if (data.AlwaysCountInClery != null) this.alwaysCountInClery = data.AlwaysCountInClery === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<IncidentSubType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentSubType/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentSubType with id ${id}`);
    } else {
      return new IncidentSubType(await response.text());
    }
  }
}

IncidentSubType satisfies StarRezStructureStatic<IncidentSubType>
