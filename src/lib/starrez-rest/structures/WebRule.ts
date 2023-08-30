// Generated from XML description of WebRule

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebRule | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebRule/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WebRule with id ${id}`);
    } else {
      return new WebRule(await response.text());
    }
  }
}

WebRule satisfies StarRezStructureStatic<WebRule>
