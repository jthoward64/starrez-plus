// Generated from XML description of Task

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Task {
  taskID?: number;
  securityUserID?: number;
  assigned_SecurityUserID?: number;
  description?: string;
  dateStart?: Date | null;
  dateDue?: Date | null;
  dateComplete?: Date | null;
  dateRemind?: Date | null;
  dateSnoozedTo?: Date | null;
  tableName?: string;
  tableID?: number;
  taskStatusID?: number;
  taskTypeID?: number;
  priorityID?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Task");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TaskID != null) this.taskID = (data.TaskID != null ? parseInt(data.TaskID, 10) : data.TaskID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.Assigned_SecurityUserID != null) this.assigned_SecurityUserID = (data.Assigned_SecurityUserID != null ? parseInt(data.Assigned_SecurityUserID, 10) : data.Assigned_SecurityUserID);
    if (data.Description != null) this.description = data.Description;
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateDue != null) this.dateDue = (data.DateDue != null ? new Date(data.DateDue) : data.DateDue);
    if (data.DateComplete != null) this.dateComplete = (data.DateComplete != null ? new Date(data.DateComplete) : data.DateComplete);
    if (data.DateRemind != null) this.dateRemind = (data.DateRemind != null ? new Date(data.DateRemind) : data.DateRemind);
    if (data.DateSnoozedTo != null) this.dateSnoozedTo = (data.DateSnoozedTo != null ? new Date(data.DateSnoozedTo) : data.DateSnoozedTo);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.TaskStatusID != null) this.taskStatusID = (data.TaskStatusID != null ? parseInt(data.TaskStatusID, 10) : data.TaskStatusID);
    if (data.TaskTypeID != null) this.taskTypeID = (data.TaskTypeID != null ? parseInt(data.TaskTypeID, 10) : data.TaskTypeID);
    if (data.PriorityID != null) this.priorityID = (data.PriorityID != null ? parseInt(data.PriorityID, 10) : data.PriorityID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Task by its ID or by exact match on other fields.
   * @param param Either the ID of the Task to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Task object or null (if id) or an array of Task objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Task | null>;
  static async select(param: Partial<Record<keyof Task, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Task[]>;
  static async select(param: number | Partial<Record<keyof Task, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Task | Task[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Task/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Task`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Task with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Task(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Task(entry));
      }
    }
  }
}

Task satisfies StarRezStructureStatic<Task>
