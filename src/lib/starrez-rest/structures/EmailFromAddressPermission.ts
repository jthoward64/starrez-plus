// Generated from XML description of EmailFromAddressPermission

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EmailFromAddressPermission {
  emailFromAddressPermissionID?: number;
  emailFromAddressID?: number;
  accessTypeEnum?: unknown;
  securityGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EmailFromAddressPermission");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EmailFromAddressPermissionID != null) this.emailFromAddressPermissionID = (data.EmailFromAddressPermissionID != null ? parseInt(data.EmailFromAddressPermissionID, 10) : data.EmailFromAddressPermissionID);
    if (data.EmailFromAddressID != null) this.emailFromAddressID = (data.EmailFromAddressID != null ? parseInt(data.EmailFromAddressID, 10) : data.EmailFromAddressID);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = (data.SecurityGroupID != null ? parseInt(data.SecurityGroupID, 10) : data.SecurityGroupID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EmailFromAddressPermission by its ID or by exact match on other fields.
   * @param param Either the ID of the EmailFromAddressPermission to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EmailFromAddressPermission object or null (if id) or an array of EmailFromAddressPermission objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EmailFromAddressPermission | null>;
  static async select(param: Partial<Record<keyof EmailFromAddressPermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EmailFromAddressPermission[]>;
  static async select(param: number | Partial<Record<keyof EmailFromAddressPermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EmailFromAddressPermission | EmailFromAddressPermission[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EmailFromAddressPermission/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EmailFromAddressPermission`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EmailFromAddressPermission with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EmailFromAddressPermission(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EmailFromAddressPermission(entry));
      }
    }
  }
}

EmailFromAddressPermission satisfies StarRezStructureStatic<EmailFromAddressPermission>
