// Generated from XML description of CategoryPermission

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class CategoryPermission {
  categoryPermissionID?: number;
  categoryID?: number;
  accessTypeEnum?: unknown;
  securityGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "CategoryPermission");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CategoryPermissionID != null) this.categoryPermissionID = (data.CategoryPermissionID != null ? parseInt(data.CategoryPermissionID, 10) : data.CategoryPermissionID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = (data.SecurityGroupID != null ? parseInt(data.SecurityGroupID, 10) : data.SecurityGroupID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a CategoryPermission by its ID or by exact match on other fields.
   * @param param Either the ID of the CategoryPermission to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single CategoryPermission object or null (if id) or an array of CategoryPermission objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<CategoryPermission | null>;
  static async select(param: Partial<Record<keyof CategoryPermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CategoryPermission[]>;
  static async select(param: number | Partial<Record<keyof CategoryPermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CategoryPermission | CategoryPermission[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CategoryPermission/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CategoryPermission`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch CategoryPermission with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new CategoryPermission(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new CategoryPermission(entry));
      }
    }
  }
}

CategoryPermission satisfies StarRezStructureStatic<CategoryPermission>
