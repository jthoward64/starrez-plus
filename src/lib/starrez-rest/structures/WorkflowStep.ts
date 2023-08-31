// Generated from XML description of WorkflowStep

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a WorkflowStep by its ID or by exact match on other fields.
   * @param param Either the ID of the WorkflowStep to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WorkflowStep object or null (if id) or an array of WorkflowStep objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WorkflowStep | null>;
  static async select(param: Partial<Record<keyof WorkflowStep, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WorkflowStep[]>;
  static async select(param: number | Partial<Record<keyof WorkflowStep, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WorkflowStep | WorkflowStep[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WorkflowStep/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WorkflowStep`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WorkflowStep with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WorkflowStep(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WorkflowStep(entry));
      }
    }
  }
}

WorkflowStep satisfies StarRezStructureStatic<WorkflowStep>
