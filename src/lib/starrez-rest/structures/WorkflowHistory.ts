// Generated from XML description of WorkflowHistory

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.WorkflowHistoryID != null) this.workflowHistoryID = parseInt(data.WorkflowHistoryID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.From_WorkflowStepID != null) this.from_WorkflowStepID = parseInt(data.From_WorkflowStepID, 10);
    if (data.To_WorkflowStepID != null) this.to_WorkflowStepID = parseInt(data.To_WorkflowStepID, 10);
    if (data.From_SecurityUserID != null) this.from_SecurityUserID = parseInt(data.From_SecurityUserID, 10);
    if (data.To_SecurityUserID != null) this.to_SecurityUserID = parseInt(data.To_SecurityUserID, 10);
    if (data.TemplateID != null) this.templateID = parseInt(data.TemplateID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Reason != null) this.reason = data.Reason;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WorkflowHistory | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WorkflowHistory/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WorkflowHistory with id ${id}`);
    } else {
      return new WorkflowHistory(await response.text());
    }
}

}
