// Generated from XML description of IncidentViolation

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

    if (data.IncidentViolationID != null) this.incidentViolationID = (data.IncidentViolationID != null ? parseInt(data.IncidentViolationID, 10) : data.IncidentViolationID);
    if (data.IncidentID != null) this.incidentID = (data.IncidentID != null ? parseInt(data.IncidentID, 10) : data.IncidentID);
    if (data.IncidentTypeID != null) this.incidentTypeID = (data.IncidentTypeID != null ? parseInt(data.IncidentTypeID, 10) : data.IncidentTypeID);
    if (data.IncidentSubTypeID != null) this.incidentSubTypeID = (data.IncidentSubTypeID != null ? parseInt(data.IncidentSubTypeID, 10) : data.IncidentSubTypeID);
    if (data.IncidentSeverityID != null) this.incidentSeverityID = (data.IncidentSeverityID != null ? parseInt(data.IncidentSeverityID, 10) : data.IncidentSeverityID);
    if (data.Clery != null) this.clery = data.Clery === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a IncidentViolation by its ID or by exact match on other fields.
   * @param param Either the ID of the IncidentViolation to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single IncidentViolation object or null (if id) or an array of IncidentViolation objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<IncidentViolation | null>;
  static async select(param: Partial<Record<keyof IncidentViolation, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentViolation[]>;
  static async select(param: number | Partial<Record<keyof IncidentViolation, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentViolation | IncidentViolation[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentViolation/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentViolation`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentViolation with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new IncidentViolation(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new IncidentViolation(entry));
      }
    }
  }
}

IncidentViolation satisfies StarRezStructureStatic<IncidentViolation>
