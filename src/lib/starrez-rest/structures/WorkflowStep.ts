// Generated from XML description of WorkflowStep

import { starRezXmlToJson } from "../parsing.js";

export class WorkflowStep {
  workflowStepID?: number;
  workflowID?: number;
  description?: string;
  stepOrder?: number;
  templateID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  comments?: string;
  dateCreated?: Date;
  recordTypeEnum?: unknown;
  assignToOptionEnum?: unknown;
  assignTo_SecurityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WorkflowStep");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WorkflowStepID != null) this.workflowStepID = parseInt(data.WorkflowStepID, 10);
    if (data.WorkflowID != null) this.workflowID = parseInt(data.WorkflowID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.StepOrder != null) this.stepOrder = parseInt(data.StepOrder, 10);
    if (data.TemplateID != null) this.templateID = parseInt(data.TemplateID, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.AssignToOptionEnum != null) this.assignToOptionEnum = data.AssignToOptionEnum;
    if (data.AssignTo_SecurityUserID != null) this.assignTo_SecurityUserID = parseInt(data.AssignTo_SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
