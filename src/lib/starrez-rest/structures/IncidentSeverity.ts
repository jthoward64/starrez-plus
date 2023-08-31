// Generated from XML description of IncidentSeverity

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentSeverity {
  incidentSeverityID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentSeverity");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentSeverityID != null) this.incidentSeverityID = (data.IncidentSeverityID != null ? parseInt(data.IncidentSeverityID, 10) : data.IncidentSeverityID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a IncidentSeverity by its ID or by exact match on other fields.
   * @param param Either the ID of the IncidentSeverity to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single IncidentSeverity object or null (if id) or an array of IncidentSeverity objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<IncidentSeverity | null>;
  static async select(param: Partial<Record<keyof IncidentSeverity, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentSeverity[]>;
  static async select(param: number | Partial<Record<keyof IncidentSeverity, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentSeverity | IncidentSeverity[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentSeverity/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentSeverity`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentSeverity with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new IncidentSeverity(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new IncidentSeverity(entry));
      }
    }
  }
}

IncidentSeverity satisfies StarRezStructureStatic<IncidentSeverity>
