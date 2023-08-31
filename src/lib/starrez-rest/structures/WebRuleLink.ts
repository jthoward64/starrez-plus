// Generated from XML description of WebRuleLink

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebRuleLink {
  webRuleLinkID?: number;
  webRuleID?: number;
  tableID?: number;
  tableName?: string;
  active?: boolean;
  ruleLinkOrder?: number;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebRuleLink");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebRuleLinkID != null) this.webRuleLinkID = (data.WebRuleLinkID != null ? parseInt(data.WebRuleLinkID, 10) : data.WebRuleLinkID);
    if (data.WebRuleID != null) this.webRuleID = (data.WebRuleID != null ? parseInt(data.WebRuleID, 10) : data.WebRuleID);
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.RuleLinkOrder != null) this.ruleLinkOrder = (data.RuleLinkOrder != null ? parseInt(data.RuleLinkOrder, 10) : data.RuleLinkOrder);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebRuleLink by its ID or by exact match on other fields.
   * @param param Either the ID of the WebRuleLink to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebRuleLink object or null (if id) or an array of WebRuleLink objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebRuleLink | null>;
  static async select(param: Partial<Record<keyof WebRuleLink, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebRuleLink[]>;
  static async select(param: number | Partial<Record<keyof WebRuleLink, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebRuleLink | WebRuleLink[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebRuleLink/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebRuleLink`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebRuleLink with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebRuleLink(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebRuleLink(entry));
      }
    }
  }
}

WebRuleLink satisfies StarRezStructureStatic<WebRuleLink>
