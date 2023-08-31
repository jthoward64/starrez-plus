// Generated from XML description of PortalStepLink

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalStepLink {
  portalStepLinkID?: number;
  portalStepID?: number;
  next_PortalStepID?: number;
  checkOrder?: number;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalStepLink");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalStepLinkID != null) this.portalStepLinkID = (data.PortalStepLinkID != null ? parseInt(data.PortalStepLinkID, 10) : data.PortalStepLinkID);
    if (data.PortalStepID != null) this.portalStepID = (data.PortalStepID != null ? parseInt(data.PortalStepID, 10) : data.PortalStepID);
    if (data.Next_PortalStepID != null) this.next_PortalStepID = (data.Next_PortalStepID != null ? parseInt(data.Next_PortalStepID, 10) : data.Next_PortalStepID);
    if (data.CheckOrder != null) this.checkOrder = (data.CheckOrder != null ? parseInt(data.CheckOrder, 10) : data.CheckOrder);
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
   * Fetches a PortalStepLink by its ID or by exact match on other fields.
   * @param param Either the ID of the PortalStepLink to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PortalStepLink object or null (if id) or an array of PortalStepLink objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PortalStepLink | null>;
  static async select(param: Partial<Record<keyof PortalStepLink, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalStepLink[]>;
  static async select(param: number | Partial<Record<keyof PortalStepLink, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalStepLink | PortalStepLink[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalStepLink/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalStepLink`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalStepLink with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PortalStepLink(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PortalStepLink(entry));
      }
    }
  }
}

PortalStepLink satisfies StarRezStructureStatic<PortalStepLink>
