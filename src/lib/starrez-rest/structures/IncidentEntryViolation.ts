// Generated from XML description of IncidentEntryViolation

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentEntryViolation {
  incidentEntryViolationID?: number;
  incidentEntryID?: number;
  incidentViolationID?: number;
  incidentEntryAppealID?: number;
  incidentTypeID?: number;
  incidentSubTypeID?: number;
  incidentSeverityID?: number;
  incidentPleaID?: number;
  incidentFindingID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentEntryViolation");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentEntryViolationID != null) this.incidentEntryViolationID = (data.IncidentEntryViolationID != null ? parseInt(data.IncidentEntryViolationID, 10) : data.IncidentEntryViolationID);
    if (data.IncidentEntryID != null) this.incidentEntryID = (data.IncidentEntryID != null ? parseInt(data.IncidentEntryID, 10) : data.IncidentEntryID);
    if (data.IncidentViolationID != null) this.incidentViolationID = (data.IncidentViolationID != null ? parseInt(data.IncidentViolationID, 10) : data.IncidentViolationID);
    if (data.IncidentEntryAppealID != null) this.incidentEntryAppealID = (data.IncidentEntryAppealID != null ? parseInt(data.IncidentEntryAppealID, 10) : data.IncidentEntryAppealID);
    if (data.IncidentTypeID != null) this.incidentTypeID = (data.IncidentTypeID != null ? parseInt(data.IncidentTypeID, 10) : data.IncidentTypeID);
    if (data.IncidentSubTypeID != null) this.incidentSubTypeID = (data.IncidentSubTypeID != null ? parseInt(data.IncidentSubTypeID, 10) : data.IncidentSubTypeID);
    if (data.IncidentSeverityID != null) this.incidentSeverityID = (data.IncidentSeverityID != null ? parseInt(data.IncidentSeverityID, 10) : data.IncidentSeverityID);
    if (data.IncidentPleaID != null) this.incidentPleaID = (data.IncidentPleaID != null ? parseInt(data.IncidentPleaID, 10) : data.IncidentPleaID);
    if (data.IncidentFindingID != null) this.incidentFindingID = (data.IncidentFindingID != null ? parseInt(data.IncidentFindingID, 10) : data.IncidentFindingID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a IncidentEntryViolation by its ID or by exact match on other fields.
   * @param param Either the ID of the IncidentEntryViolation to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single IncidentEntryViolation object or null (if id) or an array of IncidentEntryViolation objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<IncidentEntryViolation | null>;
  static async select(param: Partial<Record<keyof IncidentEntryViolation, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentEntryViolation[]>;
  static async select(param: number | Partial<Record<keyof IncidentEntryViolation, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentEntryViolation | IncidentEntryViolation[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentEntryViolation/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentEntryViolation`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentEntryViolation with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new IncidentEntryViolation(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new IncidentEntryViolation(entry));
      }
    }
  }
}

IncidentEntryViolation satisfies StarRezStructureStatic<IncidentEntryViolation>
