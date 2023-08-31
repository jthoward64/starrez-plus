// Generated from XML description of TaskType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TaskType {
  taskTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TaskType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TaskTypeID != null) this.taskTypeID = (data.TaskTypeID != null ? parseInt(data.TaskTypeID, 10) : data.TaskTypeID);
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
   * Fetches a TaskType by its ID or by exact match on other fields.
   * @param param Either the ID of the TaskType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TaskType object or null (if id) or an array of TaskType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TaskType | null>;
  static async select(param: Partial<Record<keyof TaskType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TaskType[]>;
  static async select(param: number | Partial<Record<keyof TaskType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TaskType | TaskType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TaskType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TaskType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TaskType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TaskType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TaskType(entry));
      }
    }
  }
}

TaskType satisfies StarRezStructureStatic<TaskType>
