// Generated from XML description of WebLog

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.WebLogID != null) this.webLogID = parseInt(data.WebLogID, 10);
    if (data.LogDateTime != null) this.logDateTime = new Date(data.LogDateTime);
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.BaseURL != null) this.baseURL = data.BaseURL;
    if (data.Duration != null) this.duration = parseInt(data.Duration, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ActiveUsers != null) this.activeUsers = parseInt(data.ActiveUsers, 10);
    if (data.LoggedInUsers != null) this.loggedInUsers = parseInt(data.LoggedInUsers, 10);
    if (data.WebSectionID != null) this.webSectionID = parseInt(data.WebSectionID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

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
