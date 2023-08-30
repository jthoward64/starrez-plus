// Generated from XML description of TaskRunnerHistory

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TaskRunnerHistory {
  taskRunnerHistoryID?: number;
  taskRunnerHistoryStatusEnum?: unknown;
  description?: string;
  className?: string;
  tableName?: string;
  tableID?: number;
  runBy_SecurityUserID?: number;
  machineName?: string;
  runBy_MachineName?: string;
  dateStart?: Date | null;
  dateComplete?: Date | null;
  lastStatusUpdate?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TaskRunnerHistory");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TaskRunnerHistoryID != null) this.taskRunnerHistoryID = parseInt(data.TaskRunnerHistoryID, 10);
    if (data.TaskRunnerHistoryStatusEnum != null) this.taskRunnerHistoryStatusEnum = data.TaskRunnerHistoryStatusEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.ClassName != null) this.className = data.ClassName;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.RunBy_SecurityUserID != null) this.runBy_SecurityUserID = parseInt(data.RunBy_SecurityUserID, 10);
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.RunBy_MachineName != null) this.runBy_MachineName = data.RunBy_MachineName;
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateComplete != null) this.dateComplete = new Date(data.DateComplete);
    if (data.LastStatusUpdate != null) this.lastStatusUpdate = data.LastStatusUpdate;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<TaskRunnerHistory | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TaskRunnerHistory/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch TaskRunnerHistory with id ${id}`);
    } else {
      return new TaskRunnerHistory(await response.text());
    }
  }
}

TaskRunnerHistory satisfies StarRezStructureStatic<TaskRunnerHistory>
