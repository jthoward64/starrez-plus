// Generated from XML description of CategoryScheduleTransaction

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class CategoryScheduleTransaction {
  categoryScheduleTransactionID?: number;
  categoryID?: number;
  transactionTemplateID?: number;
  scheduleEnabledBetweenEnum?: unknown;
  scheduleEnum?: unknown;
  scheduleInterval?: number;
  scheduleTimeOfDay?: number;
  schedule_DayInWeekEnum?: unknown;
  scheduleDateStart?: Date | null;
  scheduleDateEnd?: Date | null;
  scheduleDateLastStart?: Date | null;
  scheduleDateLastEnd?: Date | null;
  scheduleRangeStartObject?: any | null;
  firstRunDate?: Date | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "CategoryScheduleTransaction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CategoryScheduleTransactionID != null) this.categoryScheduleTransactionID = (data.CategoryScheduleTransactionID != null ? parseInt(data.CategoryScheduleTransactionID, 10) : data.CategoryScheduleTransactionID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.TransactionTemplateID != null) this.transactionTemplateID = (data.TransactionTemplateID != null ? parseInt(data.TransactionTemplateID, 10) : data.TransactionTemplateID);
    if (data.ScheduleEnabledBetweenEnum != null) this.scheduleEnabledBetweenEnum = data.ScheduleEnabledBetweenEnum;
    if (data.ScheduleEnum != null) this.scheduleEnum = data.ScheduleEnum;
    if (data.ScheduleInterval != null) this.scheduleInterval = (data.ScheduleInterval != null ? parseInt(data.ScheduleInterval, 10) : data.ScheduleInterval);
    if (data.ScheduleTimeOfDay != null) this.scheduleTimeOfDay = (data.ScheduleTimeOfDay != null ? parseInt(data.ScheduleTimeOfDay, 10) : data.ScheduleTimeOfDay);
    if (data.Schedule_DayInWeekEnum != null) this.schedule_DayInWeekEnum = data.Schedule_DayInWeekEnum;
    if (data.ScheduleDateStart != null) this.scheduleDateStart = (data.ScheduleDateStart != null ? new Date(data.ScheduleDateStart) : data.ScheduleDateStart);
    if (data.ScheduleDateEnd != null) this.scheduleDateEnd = (data.ScheduleDateEnd != null ? new Date(data.ScheduleDateEnd) : data.ScheduleDateEnd);
    if (data.ScheduleDateLastStart != null) this.scheduleDateLastStart = (data.ScheduleDateLastStart != null ? new Date(data.ScheduleDateLastStart) : data.ScheduleDateLastStart);
    if (data.ScheduleDateLastEnd != null) this.scheduleDateLastEnd = (data.ScheduleDateLastEnd != null ? new Date(data.ScheduleDateLastEnd) : data.ScheduleDateLastEnd);
    if (data.ScheduleRangeStartObject != null) this.scheduleRangeStartObject = data.ScheduleRangeStartObject;
    if (data.FirstRunDate != null) this.firstRunDate = (data.FirstRunDate != null ? new Date(data.FirstRunDate) : data.FirstRunDate);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a CategoryScheduleTransaction by its ID or by exact match on other fields.
   * @param param Either the ID of the CategoryScheduleTransaction to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single CategoryScheduleTransaction object or null (if id) or an array of CategoryScheduleTransaction objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<CategoryScheduleTransaction | null>;
  static async select(param: Partial<Record<keyof CategoryScheduleTransaction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CategoryScheduleTransaction[]>;
  static async select(param: number | Partial<Record<keyof CategoryScheduleTransaction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CategoryScheduleTransaction | CategoryScheduleTransaction[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CategoryScheduleTransaction/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CategoryScheduleTransaction`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch CategoryScheduleTransaction with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new CategoryScheduleTransaction(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new CategoryScheduleTransaction(entry));
      }
    }
  }
}

CategoryScheduleTransaction satisfies StarRezStructureStatic<CategoryScheduleTransaction>
