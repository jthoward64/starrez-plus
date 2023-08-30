// Generated from XML description of Task

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.TaskID != null) this.taskID = parseInt(data.TaskID, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.Assigned_SecurityUserID != null) this.assigned_SecurityUserID = parseInt(data.Assigned_SecurityUserID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateDue != null) this.dateDue = new Date(data.DateDue);
    if (data.DateComplete != null) this.dateComplete = new Date(data.DateComplete);
    if (data.DateRemind != null) this.dateRemind = new Date(data.DateRemind);
    if (data.DateSnoozedTo != null) this.dateSnoozedTo = new Date(data.DateSnoozedTo);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.TaskStatusID != null) this.taskStatusID = parseInt(data.TaskStatusID, 10);
    if (data.TaskTypeID != null) this.taskTypeID = parseInt(data.TaskTypeID, 10);
    if (data.PriorityID != null) this.priorityID = parseInt(data.PriorityID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
