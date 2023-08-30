// Generated from XML description of PortalRule

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.PortalRuleID != null) this.portalRuleID = parseInt(data.PortalRuleID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.PortalRuleStatusEnum != null) this.portalRuleStatusEnum = data.PortalRuleStatusEnum;
    if (data.Data != null) this.data = data.Data;
    if (data.PortalRuleTypeEnum != null) this.portalRuleTypeEnum = data.PortalRuleTypeEnum;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
