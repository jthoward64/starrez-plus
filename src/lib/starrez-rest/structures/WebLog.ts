// Generated from XML description of WebLog

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebLog {
  webLogID?: number;
  logDateTime?: Date;
  machineName?: string;
  baseURL?: string;
  duration?: number;
  entryID?: number;
  activeUsers?: number;
  loggedInUsers?: number;
  webSectionID?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebLog");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebLogID != null) this.webLogID = (data.WebLogID != null ? parseInt(data.WebLogID, 10) : data.WebLogID);
    if (data.LogDateTime != null) this.logDateTime = (data.LogDateTime != null ? new Date(data.LogDateTime) : data.LogDateTime);
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.BaseURL != null) this.baseURL = data.BaseURL;
    if (data.Duration != null) this.duration = (data.Duration != null ? parseInt(data.Duration, 10) : data.Duration);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ActiveUsers != null) this.activeUsers = (data.ActiveUsers != null ? parseInt(data.ActiveUsers, 10) : data.ActiveUsers);
    if (data.LoggedInUsers != null) this.loggedInUsers = (data.LoggedInUsers != null ? parseInt(data.LoggedInUsers, 10) : data.LoggedInUsers);
    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebLog by its ID or by exact match on other fields.
   * @param param Either the ID of the WebLog to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebLog object or null (if id) or an array of WebLog objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebLog | null>;
  static async select(param: Partial<Record<keyof WebLog, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebLog[]>;
  static async select(param: number | Partial<Record<keyof WebLog, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebLog | WebLog[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebLog/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebLog`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebLog with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebLog(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebLog(entry));
      }
    }
  }
}

WebLog satisfies StarRezStructureStatic<WebLog>
