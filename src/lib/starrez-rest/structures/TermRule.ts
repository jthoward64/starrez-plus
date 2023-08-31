// Generated from XML description of TermRule

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TermRule {
  termRuleID?: number;
  termID?: number;
  webSectionID?: number;
  active?: boolean;
  activeDateOpen?: Date | null;
  activeDateClose?: Date | null;
  comments?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TermRule");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TermRuleID != null) this.termRuleID = (data.TermRuleID != null ? parseInt(data.TermRuleID, 10) : data.TermRuleID);
    if (data.TermID != null) this.termID = (data.TermID != null ? parseInt(data.TermID, 10) : data.TermID);
    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.ActiveDateOpen != null) this.activeDateOpen = (data.ActiveDateOpen != null ? new Date(data.ActiveDateOpen) : data.ActiveDateOpen);
    if (data.ActiveDateClose != null) this.activeDateClose = (data.ActiveDateClose != null ? new Date(data.ActiveDateClose) : data.ActiveDateClose);
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
   * Fetches a TermRule by its ID or by exact match on other fields.
   * @param param Either the ID of the TermRule to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TermRule object or null (if id) or an array of TermRule objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TermRule | null>;
  static async select(param: Partial<Record<keyof TermRule, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TermRule[]>;
  static async select(param: number | Partial<Record<keyof TermRule, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TermRule | TermRule[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TermRule/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TermRule`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TermRule with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TermRule(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TermRule(entry));
      }
    }
  }
}

TermRule satisfies StarRezStructureStatic<TermRule>
