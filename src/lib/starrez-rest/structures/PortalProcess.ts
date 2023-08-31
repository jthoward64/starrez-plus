// Generated from XML description of PortalProcess

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalProcess {
  portalProcessID?: number;
  portalSiteID?: number;
  description?: string;
  className?: string;
  menuOrder?: number;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalProcess");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalProcessID != null) this.portalProcessID = (data.PortalProcessID != null ? parseInt(data.PortalProcessID, 10) : data.PortalProcessID);
    if (data.PortalSiteID != null) this.portalSiteID = (data.PortalSiteID != null ? parseInt(data.PortalSiteID, 10) : data.PortalSiteID);
    if (data.Description != null) this.description = data.Description;
    if (data.ClassName != null) this.className = data.ClassName;
    if (data.MenuOrder != null) this.menuOrder = (data.MenuOrder != null ? parseInt(data.MenuOrder, 10) : data.MenuOrder);
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
   * Fetches a PortalProcess by its ID or by exact match on other fields.
   * @param param Either the ID of the PortalProcess to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PortalProcess object or null (if id) or an array of PortalProcess objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PortalProcess | null>;
  static async select(param: Partial<Record<keyof PortalProcess, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalProcess[]>;
  static async select(param: number | Partial<Record<keyof PortalProcess, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalProcess | PortalProcess[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalProcess/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalProcess`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalProcess with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PortalProcess(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PortalProcess(entry));
      }
    }
  }
}

PortalProcess satisfies StarRezStructureStatic<PortalProcess>
