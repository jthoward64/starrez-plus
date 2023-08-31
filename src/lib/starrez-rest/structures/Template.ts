// Generated from XML description of Template

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Template {
  templateID?: number;
  description?: string;
  parentID?: number;
  folder?: boolean;
  correspondenceSourceID?: number;
  securityUserID?: number;
  templateText?: string;
  templateTypeEnum?: unknown;
  lastRan_SecurityUserID?: number;
  lastRanDate?: Date | null;
  isSystemTemplate?: boolean;
  createdBy_SecurityUserID?: number;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Template");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TemplateID != null) this.templateID = (data.TemplateID != null ? parseInt(data.TemplateID, 10) : data.TemplateID);
    if (data.Description != null) this.description = data.Description;
    if (data.ParentID != null) this.parentID = (data.ParentID != null ? parseInt(data.ParentID, 10) : data.ParentID);
    if (data.Folder != null) this.folder = data.Folder === 'true';
    if (data.CorrespondenceSourceID != null) this.correspondenceSourceID = (data.CorrespondenceSourceID != null ? parseInt(data.CorrespondenceSourceID, 10) : data.CorrespondenceSourceID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.TemplateText != null) this.templateText = data.TemplateText;
    if (data.TemplateTypeEnum != null) this.templateTypeEnum = data.TemplateTypeEnum;
    if (data.LastRan_SecurityUserID != null) this.lastRan_SecurityUserID = (data.LastRan_SecurityUserID != null ? parseInt(data.LastRan_SecurityUserID, 10) : data.LastRan_SecurityUserID);
    if (data.LastRanDate != null) this.lastRanDate = (data.LastRanDate != null ? new Date(data.LastRanDate) : data.LastRanDate);
    if (data.IsSystemTemplate != null) this.isSystemTemplate = data.IsSystemTemplate === 'true';
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Template by its ID or by exact match on other fields.
   * @param param Either the ID of the Template to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Template object or null (if id) or an array of Template objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Template | null>;
  static async select(param: Partial<Record<keyof Template, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Template[]>;
  static async select(param: number | Partial<Record<keyof Template, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Template | Template[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Template/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Template`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Template with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Template(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Template(entry));
      }
    }
  }
}

Template satisfies StarRezStructureStatic<Template>
