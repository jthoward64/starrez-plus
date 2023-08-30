// Generated from XML description of WebRuleLink

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.WebRuleLinkID != null) this.webRuleLinkID = parseInt(data.WebRuleLinkID, 10);
    if (data.WebRuleID != null) this.webRuleID = parseInt(data.WebRuleID, 10);
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.RuleLinkOrder != null) this.ruleLinkOrder = parseInt(data.RuleLinkOrder, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
