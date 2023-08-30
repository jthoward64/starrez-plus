// Generated from XML description of PortalRuleLink

import { starRezXmlToJson } from "../parsing.js";

export class PortalRuleLink {
  portalRuleLinkID?: number;
  portalRuleID?: number;
  tableID?: number;
  tableName?: string;
  checkOrder?: number;
  enabled?: boolean;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalRuleLink");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalRuleLinkID != null) this.portalRuleLinkID = parseInt(data.PortalRuleLinkID, 10);
    if (data.PortalRuleID != null) this.portalRuleID = parseInt(data.PortalRuleID, 10);
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.CheckOrder != null) this.checkOrder = parseInt(data.CheckOrder, 10);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
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
