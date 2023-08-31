// Generated from XML description of WebMenu

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebMenu {
  webMenuID?: number;
  webModuleID?: number;
  description?: string;
  menuOrder?: number;
  comments?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebMenu");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebMenuID != null) this.webMenuID = (data.WebMenuID != null ? parseInt(data.WebMenuID, 10) : data.WebMenuID);
    if (data.WebModuleID != null) this.webModuleID = (data.WebModuleID != null ? parseInt(data.WebModuleID, 10) : data.WebModuleID);
    if (data.Description != null) this.description = data.Description;
    if (data.MenuOrder != null) this.menuOrder = (data.MenuOrder != null ? parseInt(data.MenuOrder, 10) : data.MenuOrder);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebMenu by its ID or by exact match on other fields.
   * @param param Either the ID of the WebMenu to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebMenu object or null (if id) or an array of WebMenu objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebMenu | null>;
  static async select(param: Partial<Record<keyof WebMenu, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebMenu[]>;
  static async select(param: number | Partial<Record<keyof WebMenu, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebMenu | WebMenu[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebMenu/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebMenu`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebMenu with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebMenu(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebMenu(entry));
      }
    }
  }
}

WebMenu satisfies StarRezStructureStatic<WebMenu>
