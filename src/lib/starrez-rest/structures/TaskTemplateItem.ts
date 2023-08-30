// Generated from XML description of TaskTemplateItem

import { starRezXmlToJson } from "../parsing.js";
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

    if (data.TaskTemplateItemID != null) this.taskTemplateItemID = parseInt(data.TaskTemplateItemID, 10);
    if (data.TaskTemplateID != null) this.taskTemplateID = parseInt(data.TaskTemplateID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.HoursStartFromFirst != null) this.hoursStartFromFirst = parseInt(data.HoursStartFromFirst, 10);
    if (data.ExpectedDuration != null) this.expectedDuration = parseInt(data.ExpectedDuration, 10);
    if (data.PriorityID != null) this.priorityID = parseInt(data.PriorityID, 10);
    if (data.TaskStatusID != null) this.taskStatusID = parseInt(data.TaskStatusID, 10);
    if (data.TaskTypeID != null) this.taskTypeID = parseInt(data.TaskTypeID, 10);
    if (data.Reminder != null) this.reminder = data.Reminder === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<TaskTemplateItem | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TaskTemplateItem/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch TaskTemplateItem with id ${id}`);
    } else {
      return new TaskTemplateItem(await response.text());
    }
  }
}

TaskTemplateItem satisfies StarRezStructureStatic<TaskTemplateItem>
