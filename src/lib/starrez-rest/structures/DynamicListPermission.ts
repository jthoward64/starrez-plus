// Generated from XML description of DynamicListPermission

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class DynamicListPermission {
  dynamicListPermissionID?: number;
  dynamicListID?: number;
  accessTypeEnum?: unknown;
  securityGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "DynamicListPermission");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DynamicListPermissionID != null) this.dynamicListPermissionID = (data.DynamicListPermissionID != null ? parseInt(data.DynamicListPermissionID, 10) : data.DynamicListPermissionID);
    if (data.DynamicListID != null) this.dynamicListID = (data.DynamicListID != null ? parseInt(data.DynamicListID, 10) : data.DynamicListID);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = (data.SecurityGroupID != null ? parseInt(data.SecurityGroupID, 10) : data.SecurityGroupID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a DynamicListPermission by its ID or by exact match on other fields.
   * @param param Either the ID of the DynamicListPermission to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single DynamicListPermission object or null (if id) or an array of DynamicListPermission objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<DynamicListPermission | null>;
  static async select(param: Partial<Record<keyof DynamicListPermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<DynamicListPermission[]>;
  static async select(param: number | Partial<Record<keyof DynamicListPermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<DynamicListPermission | DynamicListPermission[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DynamicListPermission/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DynamicListPermission`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch DynamicListPermission with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new DynamicListPermission(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new DynamicListPermission(entry));
      }
    }
  }
}

DynamicListPermission satisfies StarRezStructureStatic<DynamicListPermission>
