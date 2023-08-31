// Generated from XML description of LogAddIn

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class LogAddIn {
  logAddInID?: number;
  logDate?: Date;
  sessionTag?: number;
  addinFilename?: string;
  logEventType?: number;
  machine?: string;
  userName?: string;
  methodName?: string;
  description?: string;
  tableName?: string;
  tableID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "LogAddIn");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.LogAddInID != null) this.logAddInID = (data.LogAddInID != null ? parseInt(data.LogAddInID, 10) : data.LogAddInID);
    if (data.LogDate != null) this.logDate = (data.LogDate != null ? new Date(data.LogDate) : data.LogDate);
    if (data.SessionTag != null) this.sessionTag = (data.SessionTag != null ? parseInt(data.SessionTag, 10) : data.SessionTag);
    if (data.AddinFilename != null) this.addinFilename = data.AddinFilename;
    if (data.LogEventType != null) this.logEventType = (data.LogEventType != null ? parseInt(data.LogEventType, 10) : data.LogEventType);
    if (data.Machine != null) this.machine = data.Machine;
    if (data.UserName != null) this.userName = data.UserName;
    if (data.MethodName != null) this.methodName = data.MethodName;
    if (data.Description != null) this.description = data.Description;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a LogAddIn by its ID or by exact match on other fields.
   * @param param Either the ID of the LogAddIn to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single LogAddIn object or null (if id) or an array of LogAddIn objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<LogAddIn | null>;
  static async select(param: Partial<Record<keyof LogAddIn, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<LogAddIn[]>;
  static async select(param: number | Partial<Record<keyof LogAddIn, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<LogAddIn | LogAddIn[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LogAddIn/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LogAddIn`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch LogAddIn with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new LogAddIn(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new LogAddIn(entry));
      }
    }
  }
}

LogAddIn satisfies StarRezStructureStatic<LogAddIn>
