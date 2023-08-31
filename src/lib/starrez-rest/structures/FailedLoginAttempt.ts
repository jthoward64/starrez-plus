// Generated from XML description of FailedLoginAttempt

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FailedLoginAttempt {
  failedLoginAttemptID?: number;
  loginName?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FailedLoginAttempt");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FailedLoginAttemptID != null) this.failedLoginAttemptID = (data.FailedLoginAttemptID != null ? parseInt(data.FailedLoginAttemptID, 10) : data.FailedLoginAttemptID);
    if (data.LoginName != null) this.loginName = data.LoginName;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a FailedLoginAttempt by its ID or by exact match on other fields.
   * @param param Either the ID of the FailedLoginAttempt to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FailedLoginAttempt object or null (if id) or an array of FailedLoginAttempt objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FailedLoginAttempt | null>;
  static async select(param: Partial<Record<keyof FailedLoginAttempt, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FailedLoginAttempt[]>;
  static async select(param: number | Partial<Record<keyof FailedLoginAttempt, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FailedLoginAttempt | FailedLoginAttempt[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FailedLoginAttempt/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FailedLoginAttempt`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FailedLoginAttempt with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FailedLoginAttempt(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FailedLoginAttempt(entry));
      }
    }
  }
}

FailedLoginAttempt satisfies StarRezStructureStatic<FailedLoginAttempt>
