// Generated from XML description of TaskTemplate

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TaskTemplate {
  taskTemplateID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  parentID?: number;
  folder?: boolean;
  comments?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TaskTemplate");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TaskTemplateID != null) this.taskTemplateID = (data.TaskTemplateID != null ? parseInt(data.TaskTemplateID, 10) : data.TaskTemplateID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.ParentID != null) this.parentID = (data.ParentID != null ? parseInt(data.ParentID, 10) : data.ParentID);
    if (data.Folder != null) this.folder = data.Folder === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a TaskTemplate by its ID or by exact match on other fields.
   * @param param Either the ID of the TaskTemplate to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TaskTemplate object or null (if id) or an array of TaskTemplate objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TaskTemplate | null>;
  static async select(param: Partial<Record<keyof TaskTemplate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TaskTemplate[]>;
  static async select(param: number | Partial<Record<keyof TaskTemplate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TaskTemplate | TaskTemplate[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TaskTemplate/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TaskTemplate`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TaskTemplate with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TaskTemplate(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TaskTemplate(entry));
      }
    }
  }
}

TaskTemplate satisfies StarRezStructureStatic<TaskTemplate>
