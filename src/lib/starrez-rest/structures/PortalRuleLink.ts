// Generated from XML description of PortalRuleLink

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.PortalRuleLinkID != null) this.portalRuleLinkID = (data.PortalRuleLinkID != null ? parseInt(data.PortalRuleLinkID, 10) : data.PortalRuleLinkID);
    if (data.PortalRuleID != null) this.portalRuleID = (data.PortalRuleID != null ? parseInt(data.PortalRuleID, 10) : data.PortalRuleID);
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.CheckOrder != null) this.checkOrder = (data.CheckOrder != null ? parseInt(data.CheckOrder, 10) : data.CheckOrder);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PortalRuleLink | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalRuleLink/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalRuleLink with id ${id}`);
    } else {
      return new PortalRuleLink(await response.text());
    }
  }
}

PortalRuleLink satisfies StarRezStructureStatic<PortalRuleLink>
