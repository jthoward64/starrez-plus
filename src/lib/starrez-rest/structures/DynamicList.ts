// Generated from XML description of DynamicList

import { starRezXmlToJson } from "../parsing.js";

export class DynamicList {
  dynamicListID?: number;
  description?: string;
  parentID?: number;
  folder?: boolean;
  tableName?: string;
  reportDataSourceObject?: any | null;
  displayInDetailForm?: boolean;
  securityUserID?: number;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "DynamicList");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DynamicListID != null) this.dynamicListID = parseInt(data.DynamicListID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.ParentID != null) this.parentID = parseInt(data.ParentID, 10);
    if (data.Folder != null) this.folder = data.Folder === 'true';
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.ReportDataSourceObject != null) this.reportDataSourceObject = data.ReportDataSourceObject;
    if (data.DisplayInDetailForm != null) this.displayInDetailForm = data.DisplayInDetailForm === 'true';
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
