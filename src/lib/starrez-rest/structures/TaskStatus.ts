// Generated from XML description of TaskStatus

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TaskStatus {
  taskStatusID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TaskStatus");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TaskStatusID != null) this.taskStatusID = (data.TaskStatusID != null ? parseInt(data.TaskStatusID, 10) : data.TaskStatusID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a TaskStatus by its ID or by exact match on other fields.
   * @param param Either the ID of the TaskStatus to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TaskStatus object or null (if id) or an array of TaskStatus objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TaskStatus | null>;
  static async select(param: Partial<Record<keyof TaskStatus, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TaskStatus[]>;
  static async select(param: number | Partial<Record<keyof TaskStatus, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TaskStatus | TaskStatus[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TaskStatus/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TaskStatus`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TaskStatus with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TaskStatus(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TaskStatus(entry));
      }
    }
  }
}

TaskStatus satisfies StarRezStructureStatic<TaskStatus>
