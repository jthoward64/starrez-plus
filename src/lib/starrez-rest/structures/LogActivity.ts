// Generated from XML description of LogActivity

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class LogActivity {
  logActivityID?: number;
  parentID?: number;
  logDate?: Date;
  machine?: string;
  userName?: string;
  logActivityEnum?: unknown;
  tableName?: string;
  tableID?: number;
  entryID?: number;
  description?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "LogActivity");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.LogActivityID != null) this.logActivityID = parseInt(data.LogActivityID, 10);
    if (data.ParentID != null) this.parentID = parseInt(data.ParentID, 10);
    if (data.LogDate != null) this.logDate = new Date(data.LogDate);
    if (data.Machine != null) this.machine = data.Machine;
    if (data.UserName != null) this.userName = data.UserName;
    if (data.LogActivityEnum != null) this.logActivityEnum = data.LogActivityEnum;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<LogActivity | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LogActivity/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch LogActivity with id ${id}`);
    } else {
      return new LogActivity(await response.text());
    }
}

}
