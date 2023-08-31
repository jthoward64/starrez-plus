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

  /**
   * Fetches a IncidentSanctionSubType by its ID or by exact match on other fields.
   * @param param Either the ID of the IncidentSanctionSubType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single IncidentSanctionSubType object or null (if id) or an array of IncidentSanctionSubType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<IncidentSanctionSubType | null>;
  static async select(param: Partial<Record<keyof IncidentSanctionSubType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentSanctionSubType[]>;
  static async select(param: number | Partial<Record<keyof IncidentSanctionSubType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentSanctionSubType | IncidentSanctionSubType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentSanctionSubType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentSanctionSubType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentSanctionSubType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new IncidentSanctionSubType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new IncidentSanctionSubType(entry));
      }
    }
  }
}

IncidentSanctionSubType satisfies StarRezStructureStatic<IncidentSanctionSubType>
