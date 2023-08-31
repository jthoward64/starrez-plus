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

  /**
   * Fetches a IncidentInvolvement by its ID or by exact match on other fields.
   * @param param Either the ID of the IncidentInvolvement to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single IncidentInvolvement object or null (if id) or an array of IncidentInvolvement objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<IncidentInvolvement | null>;
  static async select(param: Partial<Record<keyof IncidentInvolvement, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentInvolvement[]>;
  static async select(param: number | Partial<Record<keyof IncidentInvolvement, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentInvolvement | IncidentInvolvement[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentInvolvement/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentInvolvement`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentInvolvement with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new IncidentInvolvement(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new IncidentInvolvement(entry));
      }
    }
  }
}

IncidentInvolvement satisfies StarRezStructureStatic<IncidentInvolvement>
