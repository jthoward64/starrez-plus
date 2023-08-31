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

  /**
   * Fetches a WorkflowHistory by its ID or by exact match on other fields.
   * @param param Either the ID of the WorkflowHistory to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WorkflowHistory object or null (if id) or an array of WorkflowHistory objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WorkflowHistory | null>;
  static async select(param: Partial<Record<keyof WorkflowHistory, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WorkflowHistory[]>;
  static async select(param: number | Partial<Record<keyof WorkflowHistory, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WorkflowHistory | WorkflowHistory[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WorkflowHistory/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WorkflowHistory`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WorkflowHistory with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WorkflowHistory(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WorkflowHistory(entry));
      }
    }
  }
}

WorkflowHistory satisfies StarRezStructureStatic<WorkflowHistory>
