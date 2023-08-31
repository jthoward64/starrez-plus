// Generated from XML description of ReportPermission

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ReportPermission {
  reportPermissionID?: number;
  reportID?: number;
  accessTypeEnum?: unknown;
  securityGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ReportPermission");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ReportPermissionID != null) this.reportPermissionID = (data.ReportPermissionID != null ? parseInt(data.ReportPermissionID, 10) : data.ReportPermissionID);
    if (data.ReportID != null) this.reportID = (data.ReportID != null ? parseInt(data.ReportID, 10) : data.ReportID);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = (data.SecurityGroupID != null ? parseInt(data.SecurityGroupID, 10) : data.SecurityGroupID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a ReportPermission by its ID or by exact match on other fields.
   * @param param Either the ID of the ReportPermission to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ReportPermission object or null (if id) or an array of ReportPermission objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ReportPermission | null>;
  static async select(param: Partial<Record<keyof ReportPermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ReportPermission[]>;
  static async select(param: number | Partial<Record<keyof ReportPermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ReportPermission | ReportPermission[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportPermission/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportPermission`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ReportPermission with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ReportPermission(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ReportPermission(entry));
      }
    }
  }
}

ReportPermission satisfies StarRezStructureStatic<ReportPermission>
