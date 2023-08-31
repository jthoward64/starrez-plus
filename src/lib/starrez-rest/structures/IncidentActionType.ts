// Generated from XML description of IncidentActionType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentActionType {
  incidentActionTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentActionType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentActionTypeID != null) this.incidentActionTypeID = (data.IncidentActionTypeID != null ? parseInt(data.IncidentActionTypeID, 10) : data.IncidentActionTypeID);
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
   * Fetches a IncidentActionType by its ID or by exact match on other fields.
   * @param param Either the ID of the IncidentActionType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single IncidentActionType object or null (if id) or an array of IncidentActionType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<IncidentActionType | null>;
  static async select(param: Partial<Record<keyof IncidentActionType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentActionType[]>;
  static async select(param: number | Partial<Record<keyof IncidentActionType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<IncidentActionType | IncidentActionType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentActionType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentActionType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentActionType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new IncidentActionType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new IncidentActionType(entry));
      }
    }
  }
}

IncidentActionType satisfies StarRezStructureStatic<IncidentActionType>
