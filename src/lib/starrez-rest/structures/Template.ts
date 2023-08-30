// Generated from XML description of Template

import { starRezXmlToJson } from "../parsing.js";

export class Template {
  templateID?: number;
  description?: string;
  parentID?: number;
  folder?: boolean;
  correspondenceSourceID?: number;
  securityUserID?: number;
  templateText?: string;
  templateTypeEnum?: unknown;
  lastRan_SecurityUserID?: number;
  lastRanDate?: Date | null;
  isSystemTemplate?: boolean;
  createdBy_SecurityUserID?: number;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Template");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TemplateID != null) this.templateID = parseInt(data.TemplateID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.ParentID != null) this.parentID = parseInt(data.ParentID, 10);
    if (data.Folder != null) this.folder = data.Folder === 'true';
    if (data.CorrespondenceSourceID != null) this.correspondenceSourceID = parseInt(data.CorrespondenceSourceID, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.TemplateText != null) this.templateText = data.TemplateText;
    if (data.TemplateTypeEnum != null) this.templateTypeEnum = data.TemplateTypeEnum;
    if (data.LastRan_SecurityUserID != null) this.lastRan_SecurityUserID = parseInt(data.LastRan_SecurityUserID, 10);
    if (data.LastRanDate != null) this.lastRanDate = new Date(data.LastRanDate);
    if (data.IsSystemTemplate != null) this.isSystemTemplate = data.IsSystemTemplate === 'true';
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
