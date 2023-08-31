// Generated from XML description of PortalRule

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PortalRule | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalRule/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalRule with id ${id}`);
    } else {
      return new PortalRule(await response.text());
    }
  }
}

PortalRule satisfies StarRezStructureStatic<PortalRule>
