// Generated from XML description of LogAddIn

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.LogAddInID != null) this.logAddInID = parseInt(data.LogAddInID, 10);
    if (data.LogDate != null) this.logDate = new Date(data.LogDate);
    if (data.SessionTag != null) this.sessionTag = parseInt(data.SessionTag, 10);
    if (data.AddinFilename != null) this.addinFilename = data.AddinFilename;
    if (data.LogEventType != null) this.logEventType = parseInt(data.LogEventType, 10);
    if (data.Machine != null) this.machine = data.Machine;
    if (data.UserName != null) this.userName = data.UserName;
    if (data.MethodName != null) this.methodName = data.MethodName;
    if (data.Description != null) this.description = data.Description;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
