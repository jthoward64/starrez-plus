// Generated from XML description of IncidentSubType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a IncidentSubType by its ID or by exact match on other fields.
   * @param param Either the ID of the IncidentSubType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single IncidentSubType object or null (if id) or an array of IncidentSubType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<IncidentSubType | null>;
  static async select(param: Partial<Record<keyof IncidentSubType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentSubType[]>;
  static async select(param: number | Partial<Record<keyof IncidentSubType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentSubType | IncidentSubType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentSubType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentSubType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentSubType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new IncidentSubType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new IncidentSubType(entry));
      }
    }
  }
}

IncidentSubType satisfies StarRezStructureStatic<IncidentSubType>
