// Generated from XML description of DashboardSharing

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class DashboardSharing {
  dashboardSharingID?: number;
  securityGroupID?: number;
  dashboardID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "DashboardSharing");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DashboardSharingID != null) this.dashboardSharingID = (data.DashboardSharingID != null ? parseInt(data.DashboardSharingID, 10) : data.DashboardSharingID);
    if (data.SecurityGroupID != null) this.securityGroupID = (data.SecurityGroupID != null ? parseInt(data.SecurityGroupID, 10) : data.SecurityGroupID);
    if (data.DashboardID != null) this.dashboardID = (data.DashboardID != null ? parseInt(data.DashboardID, 10) : data.DashboardID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a DashboardSharing by its ID or by exact match on other fields.
   * @param param Either the ID of the DashboardSharing to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single DashboardSharing object or null (if id) or an array of DashboardSharing objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<DashboardSharing | null>;
  static async select(param: Partial<Record<keyof DashboardSharing, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<DashboardSharing[]>;
  static async select(param: number | Partial<Record<keyof DashboardSharing, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<DashboardSharing | DashboardSharing[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DashboardSharing/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DashboardSharing`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch DashboardSharing with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new DashboardSharing(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new DashboardSharing(entry));
      }
    }
  }
}

DashboardSharing satisfies StarRezStructureStatic<DashboardSharing>
