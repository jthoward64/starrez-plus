// Generated from XML description of LogActivity

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.LogActivityID != null) this.logActivityID = (data.LogActivityID != null ? parseInt(data.LogActivityID, 10) : data.LogActivityID);
    if (data.ParentID != null) this.parentID = (data.ParentID != null ? parseInt(data.ParentID, 10) : data.ParentID);
    if (data.LogDate != null) this.logDate = (data.LogDate != null ? new Date(data.LogDate) : data.LogDate);
    if (data.Machine != null) this.machine = data.Machine;
    if (data.UserName != null) this.userName = data.UserName;
    if (data.LogActivityEnum != null) this.logActivityEnum = data.LogActivityEnum;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.Description != null) this.description = data.Description;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a LogActivity by its ID or by exact match on other fields.
   * @param param Either the ID of the LogActivity to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single LogActivity object or null (if id) or an array of LogActivity objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<LogActivity | null>;
  static async select(param: Partial<Record<keyof LogActivity, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<LogActivity[]>;
  static async select(param: number | Partial<Record<keyof LogActivity, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<LogActivity | LogActivity[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LogActivity/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LogActivity`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch LogActivity with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new LogActivity(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new LogActivity(entry));
      }
    }
  }
}

LogActivity satisfies StarRezStructureStatic<LogActivity>
