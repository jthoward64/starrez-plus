// Generated from XML description of EndOfSession

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EndOfSession {
  endOfSessionID?: number;
  endOfSessionTypeEnum?: unknown;
  dateSession?: Date;
  comments?: string;
  machineName?: string;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EndOfSession");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EndOfSessionID != null) this.endOfSessionID = (data.EndOfSessionID != null ? parseInt(data.EndOfSessionID, 10) : data.EndOfSessionID);
    if (data.EndOfSessionTypeEnum != null) this.endOfSessionTypeEnum = data.EndOfSessionTypeEnum;
    if (data.DateSession != null) this.dateSession = (data.DateSession != null ? new Date(data.DateSession) : data.DateSession);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EndOfSession by its ID or by exact match on other fields.
   * @param param Either the ID of the EndOfSession to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EndOfSession object or null (if id) or an array of EndOfSession objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EndOfSession | null>;
  static async select(param: Partial<Record<keyof EndOfSession, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EndOfSession[]>;
  static async select(param: number | Partial<Record<keyof EndOfSession, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EndOfSession | EndOfSession[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EndOfSession/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EndOfSession`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EndOfSession with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EndOfSession(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EndOfSession(entry));
      }
    }
  }
}

EndOfSession satisfies StarRezStructureStatic<EndOfSession>
