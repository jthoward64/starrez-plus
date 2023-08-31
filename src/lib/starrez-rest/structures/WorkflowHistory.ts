// Generated from XML description of WorkflowHistory

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WorkflowHistory {
  workflowHistoryID?: number;
  tableName?: string;
  tableID?: number;
  from_WorkflowStepID?: number;
  to_WorkflowStepID?: number;
  from_SecurityUserID?: number;
  to_SecurityUserID?: number;
  templateID?: number;
  comments?: string;
  reason?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WorkflowHistory");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WorkflowHistoryID != null) this.workflowHistoryID = (data.WorkflowHistoryID != null ? parseInt(data.WorkflowHistoryID, 10) : data.WorkflowHistoryID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.From_WorkflowStepID != null) this.from_WorkflowStepID = (data.From_WorkflowStepID != null ? parseInt(data.From_WorkflowStepID, 10) : data.From_WorkflowStepID);
    if (data.To_WorkflowStepID != null) this.to_WorkflowStepID = (data.To_WorkflowStepID != null ? parseInt(data.To_WorkflowStepID, 10) : data.To_WorkflowStepID);
    if (data.From_SecurityUserID != null) this.from_SecurityUserID = (data.From_SecurityUserID != null ? parseInt(data.From_SecurityUserID, 10) : data.From_SecurityUserID);
    if (data.To_SecurityUserID != null) this.to_SecurityUserID = (data.To_SecurityUserID != null ? parseInt(data.To_SecurityUserID, 10) : data.To_SecurityUserID);
    if (data.TemplateID != null) this.templateID = (data.TemplateID != null ? parseInt(data.TemplateID, 10) : data.TemplateID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Reason != null) this.reason = data.Reason;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WorkflowHistory | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WorkflowHistory/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WorkflowHistory with id ${id}`);
    } else {
      return new WorkflowHistory(await response.text());
    }
  }
}

WorkflowHistory satisfies StarRezStructureStatic<WorkflowHistory>
