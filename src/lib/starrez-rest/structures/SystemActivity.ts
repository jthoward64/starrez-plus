// Generated from XML description of SystemActivity

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class SystemActivity {
  systemActivityID?: number;
  client?: any;
  tracking?: any;
  activityKey?: any;
  instance?: any;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "SystemActivity");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.SystemActivityID != null) this.systemActivityID = (data.SystemActivityID != null ? parseInt(data.SystemActivityID, 10) : data.SystemActivityID);
    if (data.Client != null) this.client = data.Client;
    if (data.Tracking != null) this.tracking = data.Tracking;
    if (data.ActivityKey != null) this.activityKey = data.ActivityKey;
    if (data.Instance != null) this.instance = data.Instance;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a SystemActivity by its ID or by exact match on other fields.
   * @param param Either the ID of the SystemActivity to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single SystemActivity object or null (if id) or an array of SystemActivity objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<SystemActivity | null>;
  static async select(param: Partial<Record<keyof SystemActivity, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SystemActivity[]>;
  static async select(param: number | Partial<Record<keyof SystemActivity, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SystemActivity | SystemActivity[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SystemActivity/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SystemActivity`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch SystemActivity with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new SystemActivity(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new SystemActivity(entry));
      }
    }
  }
}

SystemActivity satisfies StarRezStructureStatic<SystemActivity>
