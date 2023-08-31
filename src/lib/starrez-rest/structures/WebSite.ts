// Generated from XML description of WebSite

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebSite {
  webSiteID?: number;
  siteName?: string;
  description?: string;
  uRL?: string;
  header?: string;
  footer?: string;
  headerSQL?: string;
  footerSQL?: string;
  webSiteStatusEnum?: unknown;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebSite");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebSiteID != null) this.webSiteID = (data.WebSiteID != null ? parseInt(data.WebSiteID, 10) : data.WebSiteID);
    if (data.SiteName != null) this.siteName = data.SiteName;
    if (data.Description != null) this.description = data.Description;
    if (data.URL != null) this.uRL = data.URL;
    if (data.Header != null) this.header = data.Header;
    if (data.Footer != null) this.footer = data.Footer;
    if (data.HeaderSQL != null) this.headerSQL = data.HeaderSQL;
    if (data.FooterSQL != null) this.footerSQL = data.FooterSQL;
    if (data.WebSiteStatusEnum != null) this.webSiteStatusEnum = data.WebSiteStatusEnum;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebSite by its ID or by exact match on other fields.
   * @param param Either the ID of the WebSite to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebSite object or null (if id) or an array of WebSite objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebSite | null>;
  static async select(param: Partial<Record<keyof WebSite, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebSite[]>;
  static async select(param: number | Partial<Record<keyof WebSite, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebSite | WebSite[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebSite/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebSite`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebSite with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebSite(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebSite(entry));
      }
    }
  }
}

WebSite satisfies StarRezStructureStatic<WebSite>
