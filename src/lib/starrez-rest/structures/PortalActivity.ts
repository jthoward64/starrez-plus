// Generated from XML description of PortalActivity

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalActivity {
  portalActivityID?: number;
  portalSiteID?: number;
  webServerName?: string;
  dateCreated?: Date;
  loggedInUsers?: number;
  activeUsers?: number;
  total_PortalActivityID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalActivity");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalActivityID != null) this.portalActivityID = (data.PortalActivityID != null ? parseInt(data.PortalActivityID, 10) : data.PortalActivityID);
    if (data.PortalSiteID != null) this.portalSiteID = (data.PortalSiteID != null ? parseInt(data.PortalSiteID, 10) : data.PortalSiteID);
    if (data.WebServerName != null) this.webServerName = data.WebServerName;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.LoggedInUsers != null) this.loggedInUsers = (data.LoggedInUsers != null ? parseInt(data.LoggedInUsers, 10) : data.LoggedInUsers);
    if (data.ActiveUsers != null) this.activeUsers = (data.ActiveUsers != null ? parseInt(data.ActiveUsers, 10) : data.ActiveUsers);
    if (data.Total_PortalActivityID != null) this.total_PortalActivityID = (data.Total_PortalActivityID != null ? parseInt(data.Total_PortalActivityID, 10) : data.Total_PortalActivityID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a PortalActivity by its ID or by exact match on other fields.
   * @param param Either the ID of the PortalActivity to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PortalActivity object or null (if id) or an array of PortalActivity objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PortalActivity | null>;
  static async select(param: Partial<Record<keyof PortalActivity, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalActivity[]>;
  static async select(param: number | Partial<Record<keyof PortalActivity, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalActivity | PortalActivity[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalActivity/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalActivity`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalActivity with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PortalActivity(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PortalActivity(entry));
      }
    }
  }
}

PortalActivity satisfies StarRezStructureStatic<PortalActivity>
