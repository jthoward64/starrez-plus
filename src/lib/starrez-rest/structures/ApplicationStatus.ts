// Generated from XML description of ApplicationStatus

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ApplicationStatus {
  applicationStatusID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ApplicationStatus");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ApplicationStatusID != null) this.applicationStatusID = (data.ApplicationStatusID != null ? parseInt(data.ApplicationStatusID, 10) : data.ApplicationStatusID);
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
   * Fetches a ApplicationStatus by its ID or by exact match on other fields.
   * @param param Either the ID of the ApplicationStatus to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ApplicationStatus object or null (if id) or an array of ApplicationStatus objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ApplicationStatus | null>;
  static async select(param: Partial<Record<keyof ApplicationStatus, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ApplicationStatus[]>;
  static async select(param: number | Partial<Record<keyof ApplicationStatus, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ApplicationStatus | ApplicationStatus[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ApplicationStatus/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ApplicationStatus`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ApplicationStatus with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ApplicationStatus(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ApplicationStatus(entry));
      }
    }
  }
}

ApplicationStatus satisfies StarRezStructureStatic<ApplicationStatus>
