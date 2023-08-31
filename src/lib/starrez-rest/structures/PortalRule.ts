// Generated from XML description of PortalRule

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalRule {
  portalRuleID?: number;
  description?: string;
  comments?: string;
  portalRuleStatusEnum?: unknown;
  data?: string;
  portalRuleTypeEnum?: unknown;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalRule");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalRuleID != null) this.portalRuleID = (data.PortalRuleID != null ? parseInt(data.PortalRuleID, 10) : data.PortalRuleID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.PortalRuleStatusEnum != null) this.portalRuleStatusEnum = data.PortalRuleStatusEnum;
    if (data.Data != null) this.data = data.Data;
    if (data.PortalRuleTypeEnum != null) this.portalRuleTypeEnum = data.PortalRuleTypeEnum;
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
   * Fetches a PortalRule by its ID or by exact match on other fields.
   * @param param Either the ID of the PortalRule to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PortalRule object or null (if id) or an array of PortalRule objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PortalRule | null>;
  static async select(param: Partial<Record<keyof PortalRule, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalRule[]>;
  static async select(param: number | Partial<Record<keyof PortalRule, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalRule | PortalRule[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalRule/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalRule`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalRule with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PortalRule(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PortalRule(entry));
      }
    }
  }
}

PortalRule satisfies StarRezStructureStatic<PortalRule>
