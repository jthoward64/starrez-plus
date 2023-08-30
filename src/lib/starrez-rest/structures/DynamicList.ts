// Generated from XML description of DynamicList

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.DynamicListID != null) this.dynamicListID = (data.DynamicListID != null ? parseInt(data.DynamicListID, 10) : data.DynamicListID);
    if (data.Description != null) this.description = data.Description;
    if (data.ParentID != null) this.parentID = (data.ParentID != null ? parseInt(data.ParentID, 10) : data.ParentID);
    if (data.Folder != null) this.folder = data.Folder === 'true';
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.ReportDataSourceObject != null) this.reportDataSourceObject = data.ReportDataSourceObject;
    if (data.DisplayInDetailForm != null) this.displayInDetailForm = data.DisplayInDetailForm === 'true';
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<DynamicList | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DynamicList/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch DynamicList with id ${id}`);
    } else {
      return new DynamicList(await response.text());
    }
  }
}

DynamicList satisfies StarRezStructureStatic<DynamicList>
