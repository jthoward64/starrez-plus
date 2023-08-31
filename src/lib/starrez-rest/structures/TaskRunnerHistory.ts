// Generated from XML description of TaskRunnerHistory

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a TaskRunnerHistory by its ID or by exact match on other fields.
   * @param param Either the ID of the TaskRunnerHistory to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TaskRunnerHistory object or null (if id) or an array of TaskRunnerHistory objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TaskRunnerHistory | null>;
  static async select(param: Partial<Record<keyof TaskRunnerHistory, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TaskRunnerHistory[]>;
  static async select(param: number | Partial<Record<keyof TaskRunnerHistory, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TaskRunnerHistory | TaskRunnerHistory[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TaskRunnerHistory/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TaskRunnerHistory`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TaskRunnerHistory with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TaskRunnerHistory(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TaskRunnerHistory(entry));
      }
    }
  }
}

TaskRunnerHistory satisfies StarRezStructureStatic<TaskRunnerHistory>
