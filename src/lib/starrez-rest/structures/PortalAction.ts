// Generated from XML description of PortalAction

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalAction {
  portalActionID?: number;
  description?: string;
  comments?: string;
  className?: string;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalAction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalActionID != null) this.portalActionID = (data.PortalActionID != null ? parseInt(data.PortalActionID, 10) : data.PortalActionID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
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
   * Fetches a PortalAction by its ID or by exact match on other fields.
   * @param param Either the ID of the PortalAction to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PortalAction object or null (if id) or an array of PortalAction objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PortalAction | null>;
  static async select(param: Partial<Record<keyof PortalAction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalAction[]>;
  static async select(param: number | Partial<Record<keyof PortalAction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalAction | PortalAction[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalAction/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalAction`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalAction with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PortalAction(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PortalAction(entry));
      }
    }
  }
}

PortalAction satisfies StarRezStructureStatic<PortalAction>
