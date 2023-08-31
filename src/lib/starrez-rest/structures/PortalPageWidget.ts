// Generated from XML description of PortalPageWidget

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalPageWidget {
  portalPageWidgetID?: number;
  portalPageID?: number;
  sortOrder?: number;
  sectionNumber?: number;
  description?: string;
  className?: string;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalPageWidget");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalPageWidgetID != null) this.portalPageWidgetID = (data.PortalPageWidgetID != null ? parseInt(data.PortalPageWidgetID, 10) : data.PortalPageWidgetID);
    if (data.PortalPageID != null) this.portalPageID = (data.PortalPageID != null ? parseInt(data.PortalPageID, 10) : data.PortalPageID);
    if (data.SortOrder != null) this.sortOrder = (data.SortOrder != null ? parseInt(data.SortOrder, 10) : data.SortOrder);
    if (data.SectionNumber != null) this.sectionNumber = (data.SectionNumber != null ? parseInt(data.SectionNumber, 10) : data.SectionNumber);
    if (data.Description != null) this.description = data.Description;
    if (data.ClassName != null) this.className = data.ClassName;
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
   * Fetches a PortalPageWidget by its ID or by exact match on other fields.
   * @param param Either the ID of the PortalPageWidget to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PortalPageWidget object or null (if id) or an array of PortalPageWidget objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PortalPageWidget | null>;
  static async select(param: Partial<Record<keyof PortalPageWidget, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalPageWidget[]>;
  static async select(param: number | Partial<Record<keyof PortalPageWidget, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalPageWidget | PortalPageWidget[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalPageWidget/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalPageWidget`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalPageWidget with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PortalPageWidget(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PortalPageWidget(entry));
      }
    }
  }
}

PortalPageWidget satisfies StarRezStructureStatic<PortalPageWidget>
