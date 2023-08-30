// Generated from XML description of WorkflowStep

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.WorkflowStepID != null) this.workflowStepID = (data.WorkflowStepID != null ? parseInt(data.WorkflowStepID, 10) : data.WorkflowStepID);
    if (data.WorkflowID != null) this.workflowID = (data.WorkflowID != null ? parseInt(data.WorkflowID, 10) : data.WorkflowID);
    if (data.Description != null) this.description = data.Description;
    if (data.StepOrder != null) this.stepOrder = (data.StepOrder != null ? parseInt(data.StepOrder, 10) : data.StepOrder);
    if (data.TemplateID != null) this.templateID = (data.TemplateID != null ? parseInt(data.TemplateID, 10) : data.TemplateID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.AssignToOptionEnum != null) this.assignToOptionEnum = data.AssignToOptionEnum;
    if (data.AssignTo_SecurityUserID != null) this.assignTo_SecurityUserID = (data.AssignTo_SecurityUserID != null ? parseInt(data.AssignTo_SecurityUserID, 10) : data.AssignTo_SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WorkflowStep | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WorkflowStep/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WorkflowStep with id ${id}`);
    } else {
      return new WorkflowStep(await response.text());
    }
  }
}

WorkflowStep satisfies StarRezStructureStatic<WorkflowStep>
