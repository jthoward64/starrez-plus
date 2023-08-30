// Generated from XML description of TaskTemplate

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.TaskTemplateID != null) this.taskTemplateID = parseInt(data.TaskTemplateID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.ParentID != null) this.parentID = parseInt(data.ParentID, 10);
    if (data.Folder != null) this.folder = data.Folder === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
