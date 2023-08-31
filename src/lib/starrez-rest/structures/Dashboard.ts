// Generated from XML description of Dashboard

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Dashboard {
  dashboardID?: number;
  description?: string;
  comments?: string;
  owner_SecurityUserID?: number;
  dashboardLayoutTypeEnum?: unknown;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Dashboard");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DashboardID != null) this.dashboardID = (data.DashboardID != null ? parseInt(data.DashboardID, 10) : data.DashboardID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Owner_SecurityUserID != null) this.owner_SecurityUserID = (data.Owner_SecurityUserID != null ? parseInt(data.Owner_SecurityUserID, 10) : data.Owner_SecurityUserID);
    if (data.DashboardLayoutTypeEnum != null) this.dashboardLayoutTypeEnum = data.DashboardLayoutTypeEnum;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Dashboard by its ID or by exact match on other fields.
   * @param param Either the ID of the Dashboard to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Dashboard object or null (if id) or an array of Dashboard objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Dashboard | null>;
  static async select(param: Partial<Record<keyof Dashboard, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Dashboard[]>;
  static async select(param: number | Partial<Record<keyof Dashboard, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Dashboard | Dashboard[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Dashboard/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Dashboard`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Dashboard with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Dashboard(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Dashboard(entry));
      }
    }
  }
}

Dashboard satisfies StarRezStructureStatic<Dashboard>
