// Generated from XML description of WebLog

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebLog {
  webLogID?: number;
  logDateTime?: Date;
  machineName?: string;
  baseURL?: string;
  duration?: number;
  entryID?: number;
  activeUsers?: number;
  loggedInUsers?: number;
  webSectionID?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebLog");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebLogID != null) this.webLogID = (data.WebLogID != null ? parseInt(data.WebLogID, 10) : data.WebLogID);
    if (data.LogDateTime != null) this.logDateTime = (data.LogDateTime != null ? new Date(data.LogDateTime) : data.LogDateTime);
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.BaseURL != null) this.baseURL = data.BaseURL;
    if (data.Duration != null) this.duration = (data.Duration != null ? parseInt(data.Duration, 10) : data.Duration);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ActiveUsers != null) this.activeUsers = (data.ActiveUsers != null ? parseInt(data.ActiveUsers, 10) : data.ActiveUsers);
    if (data.LoggedInUsers != null) this.loggedInUsers = (data.LoggedInUsers != null ? parseInt(data.LoggedInUsers, 10) : data.LoggedInUsers);
    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebLog | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebLog/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WebLog with id ${id}`);
    } else {
      return new WebLog(await response.text());
    }
  }
}

WebLog satisfies StarRezStructureStatic<WebLog>
