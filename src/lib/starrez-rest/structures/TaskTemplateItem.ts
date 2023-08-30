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
