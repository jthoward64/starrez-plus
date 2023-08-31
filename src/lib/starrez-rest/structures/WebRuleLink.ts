// Generated from XML description of WebRuleLink

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebRuleLink | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebRuleLink/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebRuleLink with id ${id}`);
    } else {
      return new WebRuleLink(await response.text());
    }
  }
}

WebRuleLink satisfies StarRezStructureStatic<WebRuleLink>
