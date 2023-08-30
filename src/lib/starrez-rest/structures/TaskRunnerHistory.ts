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

    if (data.TaskRunnerHistoryID != null) this.taskRunnerHistoryID = (data.TaskRunnerHistoryID != null ? parseInt(data.TaskRunnerHistoryID, 10) : data.TaskRunnerHistoryID);
    if (data.TaskRunnerHistoryStatusEnum != null) this.taskRunnerHistoryStatusEnum = data.TaskRunnerHistoryStatusEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.ClassName != null) this.className = data.ClassName;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.RunBy_SecurityUserID != null) this.runBy_SecurityUserID = (data.RunBy_SecurityUserID != null ? parseInt(data.RunBy_SecurityUserID, 10) : data.RunBy_SecurityUserID);
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.RunBy_MachineName != null) this.runBy_MachineName = data.RunBy_MachineName;
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateComplete != null) this.dateComplete = (data.DateComplete != null ? new Date(data.DateComplete) : data.DateComplete);
    if (data.LastStatusUpdate != null) this.lastStatusUpdate = data.LastStatusUpdate;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

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
