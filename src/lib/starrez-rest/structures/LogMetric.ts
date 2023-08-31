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

  /**
   * Fetches a LogMetric by its ID or by exact match on other fields.
   * @param param Either the ID of the LogMetric to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single LogMetric object or null (if id) or an array of LogMetric objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<LogMetric | null>;
  static async select(param: Partial<Record<keyof LogMetric, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<LogMetric[]>;
  static async select(param: number | Partial<Record<keyof LogMetric, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<LogMetric | LogMetric[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LogMetric/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/LogMetric`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch LogMetric with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new LogMetric(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new LogMetric(entry));
      }
    }
  }
}

LogMetric satisfies StarRezStructureStatic<LogMetric>
