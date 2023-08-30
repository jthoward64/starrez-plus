// Generated from XML description of SavedList

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class SavedList {
  savedListID?: number;
  description?: string;
  parentID?: number;
  folder?: boolean;
  comments?: string;
  tableName?: string;
  securityUserID?: number;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "SavedList");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.SavedListID != null) this.savedListID = parseInt(data.SavedListID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.ParentID != null) this.parentID = parseInt(data.ParentID, 10);
    if (data.Folder != null) this.folder = data.Folder === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<SavedList | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SavedList/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch SavedList with id ${id}`);
    } else {
      return new SavedList(await response.text());
    }
}

}
