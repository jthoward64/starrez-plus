// Generated from XML description of TaskTemplateItem

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TaskTemplateItem {
  taskTemplateItemID?: number;
  taskTemplateID?: number;
  description?: string;
  hoursStartFromFirst?: number;
  expectedDuration?: number;
  priorityID?: number;
  taskStatusID?: number;
  taskTypeID?: number;
  reminder?: boolean;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TaskTemplateItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TaskTemplateItemID != null) this.taskTemplateItemID = (data.TaskTemplateItemID != null ? parseInt(data.TaskTemplateItemID, 10) : data.TaskTemplateItemID);
    if (data.TaskTemplateID != null) this.taskTemplateID = (data.TaskTemplateID != null ? parseInt(data.TaskTemplateID, 10) : data.TaskTemplateID);
    if (data.Description != null) this.description = data.Description;
    if (data.HoursStartFromFirst != null) this.hoursStartFromFirst = (data.HoursStartFromFirst != null ? parseInt(data.HoursStartFromFirst, 10) : data.HoursStartFromFirst);
    if (data.ExpectedDuration != null) this.expectedDuration = (data.ExpectedDuration != null ? parseInt(data.ExpectedDuration, 10) : data.ExpectedDuration);
    if (data.PriorityID != null) this.priorityID = (data.PriorityID != null ? parseInt(data.PriorityID, 10) : data.PriorityID);
    if (data.TaskStatusID != null) this.taskStatusID = (data.TaskStatusID != null ? parseInt(data.TaskStatusID, 10) : data.TaskStatusID);
    if (data.TaskTypeID != null) this.taskTypeID = (data.TaskTypeID != null ? parseInt(data.TaskTypeID, 10) : data.TaskTypeID);
    if (data.Reminder != null) this.reminder = data.Reminder === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a TaskTemplateItem by its ID or by exact match on other fields.
   * @param param Either the ID of the TaskTemplateItem to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TaskTemplateItem object or null (if id) or an array of TaskTemplateItem objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TaskTemplateItem | null>;
  static async select(param: Partial<Record<keyof TaskTemplateItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TaskTemplateItem[]>;
  static async select(param: number | Partial<Record<keyof TaskTemplateItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TaskTemplateItem | TaskTemplateItem[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TaskTemplateItem/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TaskTemplateItem`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TaskTemplateItem with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TaskTemplateItem(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TaskTemplateItem(entry));
      }
    }
  }
}

TaskTemplateItem satisfies StarRezStructureStatic<TaskTemplateItem>
