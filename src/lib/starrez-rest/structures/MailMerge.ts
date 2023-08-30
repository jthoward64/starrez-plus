// Generated from XML description of MailMerge

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class MailMerge {
  mailMergeID?: number;
  description?: string;
  parentID?: number;
  folder?: boolean;
  mailMergeType?: number;
  documentName?: string;
  documentPath?: string;
  mergeWithWordAutomation?: boolean;
  reportID?: number;
  comments?: string;
  securityUserID?: number;
  dateCreated?: Date;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "MailMerge");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MailMergeID != null) this.mailMergeID = parseInt(data.MailMergeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.ParentID != null) this.parentID = parseInt(data.ParentID, 10);
    if (data.Folder != null) this.folder = data.Folder === 'true';
    if (data.MailMergeType != null) this.mailMergeType = parseInt(data.MailMergeType, 10);
    if (data.DocumentName != null) this.documentName = data.DocumentName;
    if (data.DocumentPath != null) this.documentPath = data.DocumentPath;
    if (data.MergeWithWordAutomation != null) this.mergeWithWordAutomation = data.MergeWithWordAutomation === 'true';
    if (data.ReportID != null) this.reportID = parseInt(data.ReportID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<MailMerge | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MailMerge/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch MailMerge with id ${id}`);
    } else {
      return new MailMerge(await response.text());
    }
  }
}

MailMerge satisfies StarRezStructureStatic<MailMerge>
