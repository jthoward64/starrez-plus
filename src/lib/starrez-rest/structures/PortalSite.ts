// Generated from XML description of PortalSite

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalSite {
  portalSiteID?: number;
  description?: string;
  title?: string;
  url?: string;
  portalThemeID?: number;
  eventID?: number;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalSite");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalSiteID != null) this.portalSiteID = (data.PortalSiteID != null ? parseInt(data.PortalSiteID, 10) : data.PortalSiteID);
    if (data.Description != null) this.description = data.Description;
    if (data.Title != null) this.title = data.Title;
    if (data.Url != null) this.url = data.Url;
    if (data.PortalThemeID != null) this.portalThemeID = (data.PortalThemeID != null ? parseInt(data.PortalThemeID, 10) : data.PortalThemeID);
    if (data.EventID != null) this.eventID = (data.EventID != null ? parseInt(data.EventID, 10) : data.EventID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a PortalSite by its ID or by exact match on other fields.
   * @param param Either the ID of the PortalSite to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PortalSite object or null (if id) or an array of PortalSite objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PortalSite | null>;
  static async select(param: Partial<Record<keyof PortalSite, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalSite[]>;
  static async select(param: number | Partial<Record<keyof PortalSite, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalSite | PortalSite[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalSite/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalSite`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalSite with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PortalSite(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PortalSite(entry));
      }
    }
  }
}

PortalSite satisfies StarRezStructureStatic<PortalSite>
