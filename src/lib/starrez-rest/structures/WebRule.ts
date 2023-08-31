// Generated from XML description of WebRule

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebRule {
  webRuleID?: number;
  description?: string;
  webSiteID?: number;
  comments?: string;
  returnStatus?: number;
  returnText?: string;
  variableName?: string;
  variableOperator?: string;
  variableValue?: string;
  sQL?: string;
  securityUserID?: number;
  dateCreated?: Date;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebRule");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebRuleID != null) this.webRuleID = (data.WebRuleID != null ? parseInt(data.WebRuleID, 10) : data.WebRuleID);
    if (data.Description != null) this.description = data.Description;
    if (data.WebSiteID != null) this.webSiteID = (data.WebSiteID != null ? parseInt(data.WebSiteID, 10) : data.WebSiteID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ReturnStatus != null) this.returnStatus = (data.ReturnStatus != null ? parseInt(data.ReturnStatus, 10) : data.ReturnStatus);
    if (data.ReturnText != null) this.returnText = data.ReturnText;
    if (data.VariableName != null) this.variableName = data.VariableName;
    if (data.VariableOperator != null) this.variableOperator = data.VariableOperator;
    if (data.VariableValue != null) this.variableValue = data.VariableValue;
    if (data.SQL != null) this.sQL = data.SQL;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebRule by its ID or by exact match on other fields.
   * @param param Either the ID of the WebRule to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebRule object or null (if id) or an array of WebRule objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebRule | null>;
  static async select(param: Partial<Record<keyof WebRule, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebRule[]>;
  static async select(param: number | Partial<Record<keyof WebRule, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebRule | WebRule[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebRule/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebRule`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebRule with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebRule(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebRule(entry));
      }
    }
  }
}

WebRule satisfies StarRezStructureStatic<WebRule>
