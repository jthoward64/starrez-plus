// Generated from XML description of WebRule

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.WebRuleID != null) this.webRuleID = parseInt(data.WebRuleID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.WebSiteID != null) this.webSiteID = parseInt(data.WebSiteID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ReturnStatus != null) this.returnStatus = parseInt(data.ReturnStatus, 10);
    if (data.ReturnText != null) this.returnText = data.ReturnText;
    if (data.VariableName != null) this.variableName = data.VariableName;
    if (data.VariableOperator != null) this.variableOperator = data.VariableOperator;
    if (data.VariableValue != null) this.variableValue = data.VariableValue;
    if (data.SQL != null) this.sQL = data.SQL;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
