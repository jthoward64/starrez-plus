// Generated from XML description of TemplatePermission

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TemplatePermission {
  templatePermissionID?: number;
  templateID?: number;
  accessTypeEnum?: unknown;
  securityGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TemplatePermission");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TemplatePermissionID != null) this.templatePermissionID = (data.TemplatePermissionID != null ? parseInt(data.TemplatePermissionID, 10) : data.TemplatePermissionID);
    if (data.TemplateID != null) this.templateID = (data.TemplateID != null ? parseInt(data.TemplateID, 10) : data.TemplateID);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = (data.SecurityGroupID != null ? parseInt(data.SecurityGroupID, 10) : data.SecurityGroupID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a TemplatePermission by its ID or by exact match on other fields.
   * @param param Either the ID of the TemplatePermission to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TemplatePermission object or null (if id) or an array of TemplatePermission objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TemplatePermission | null>;
  static async select(param: Partial<Record<keyof TemplatePermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TemplatePermission[]>;
  static async select(param: number | Partial<Record<keyof TemplatePermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TemplatePermission | TemplatePermission[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TemplatePermission/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TemplatePermission`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TemplatePermission with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TemplatePermission(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TemplatePermission(entry));
      }
    }
  }
}

TemplatePermission satisfies StarRezStructureStatic<TemplatePermission>
