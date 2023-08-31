// Generated from XML description of WebSection

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebSection {
  webSectionID?: number;
  webMenuID?: number;
  sectionName?: string;
  description?: string;
  sectionOrder?: number;
  source?: string;
  parentID?: number;
  multiUseEnum?: unknown;
  dateDependent?: boolean;
  next_WebSectionID?: number;
  visible?: boolean;
  roomSelectionTimeslotApplies?: boolean;
  required?: boolean;
  accessRoles?: string;
  comments?: string;
  securityUserID?: number;
  source_WebSectionID?: number;
  sectionNameSubText?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebSection");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.WebMenuID != null) this.webMenuID = (data.WebMenuID != null ? parseInt(data.WebMenuID, 10) : data.WebMenuID);
    if (data.SectionName != null) this.sectionName = data.SectionName;
    if (data.Description != null) this.description = data.Description;
    if (data.SectionOrder != null) this.sectionOrder = (data.SectionOrder != null ? parseInt(data.SectionOrder, 10) : data.SectionOrder);
    if (data.Source != null) this.source = data.Source;
    if (data.ParentID != null) this.parentID = (data.ParentID != null ? parseInt(data.ParentID, 10) : data.ParentID);
    if (data.MultiUseEnum != null) this.multiUseEnum = data.MultiUseEnum;
    if (data.DateDependent != null) this.dateDependent = data.DateDependent === 'true';
    if (data.Next_WebSectionID != null) this.next_WebSectionID = (data.Next_WebSectionID != null ? parseInt(data.Next_WebSectionID, 10) : data.Next_WebSectionID);
    if (data.Visible != null) this.visible = data.Visible === 'true';
    if (data.RoomSelectionTimeslotApplies != null) this.roomSelectionTimeslotApplies = data.RoomSelectionTimeslotApplies === 'true';
    if (data.Required != null) this.required = data.Required === 'true';
    if (data.AccessRoles != null) this.accessRoles = data.AccessRoles;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.Source_WebSectionID != null) this.source_WebSectionID = (data.Source_WebSectionID != null ? parseInt(data.Source_WebSectionID, 10) : data.Source_WebSectionID);
    if (data.SectionNameSubText != null) this.sectionNameSubText = data.SectionNameSubText;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebSection by its ID or by exact match on other fields.
   * @param param Either the ID of the WebSection to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebSection object or null (if id) or an array of WebSection objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebSection | null>;
  static async select(param: Partial<Record<keyof WebSection, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebSection[]>;
  static async select(param: number | Partial<Record<keyof WebSection, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebSection | WebSection[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebSection/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebSection`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebSection with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebSection(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebSection(entry));
      }
    }
  }
}

WebSection satisfies StarRezStructureStatic<WebSection>
