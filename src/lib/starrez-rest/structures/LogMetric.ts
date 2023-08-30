// Generated from XML description of LogMetric

import { starRezXmlToJson } from "../parsing.js";

export class LogMetric {
  logMetricID?: number;
  objectName?: string;
  count?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "LogMetric");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.LogMetricID != null) this.logMetricID = parseInt(data.LogMetricID, 10);
    if (data.ObjectName != null) this.objectName = data.ObjectName;
    if (data.Count != null) this.count = parseInt(data.Count, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
