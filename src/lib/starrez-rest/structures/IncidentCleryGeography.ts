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

  /**
   * Fetches a IncidentCleryGeography by its ID or by exact match on other fields.
   * @param param Either the ID of the IncidentCleryGeography to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single IncidentCleryGeography object or null (if id) or an array of IncidentCleryGeography objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<IncidentCleryGeography | null>;
  static async select(param: Partial<Record<keyof IncidentCleryGeography, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentCleryGeography[]>;
  static async select(param: number | Partial<Record<keyof IncidentCleryGeography, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentCleryGeography | IncidentCleryGeography[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentCleryGeography/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentCleryGeography`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentCleryGeography with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new IncidentCleryGeography(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new IncidentCleryGeography(entry));
      }
    }
  }
}

IncidentCleryGeography satisfies StarRezStructureStatic<IncidentCleryGeography>
