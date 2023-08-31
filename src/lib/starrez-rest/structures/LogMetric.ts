// Generated from XML description of LogMetric

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.LogMetricID != null) this.logMetricID = (data.LogMetricID != null ? parseInt(data.LogMetricID, 10) : data.LogMetricID);
    if (data.ObjectName != null) this.objectName = data.ObjectName;
    if (data.Count != null) this.count = (data.Count != null ? parseInt(data.Count, 10) : data.Count);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<LogMetric | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LogMetric/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch LogMetric with id ${id}`);
    } else {
      return new LogMetric(await response.text());
    }
  }
}

LogMetric satisfies StarRezStructureStatic<LogMetric>
