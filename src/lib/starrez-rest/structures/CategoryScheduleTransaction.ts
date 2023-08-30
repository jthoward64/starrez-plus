// Generated from XML description of CategoryScheduleTransaction

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.CategoryScheduleTransactionID != null) this.categoryScheduleTransactionID = parseInt(data.CategoryScheduleTransactionID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.TransactionTemplateID != null) this.transactionTemplateID = parseInt(data.TransactionTemplateID, 10);
    if (data.ScheduleEnabledBetweenEnum != null) this.scheduleEnabledBetweenEnum = data.ScheduleEnabledBetweenEnum;
    if (data.ScheduleEnum != null) this.scheduleEnum = data.ScheduleEnum;
    if (data.ScheduleInterval != null) this.scheduleInterval = parseInt(data.ScheduleInterval, 10);
    if (data.ScheduleTimeOfDay != null) this.scheduleTimeOfDay = parseInt(data.ScheduleTimeOfDay, 10);
    if (data.Schedule_DayInWeekEnum != null) this.schedule_DayInWeekEnum = data.Schedule_DayInWeekEnum;
    if (data.ScheduleDateStart != null) this.scheduleDateStart = new Date(data.ScheduleDateStart);
    if (data.ScheduleDateEnd != null) this.scheduleDateEnd = new Date(data.ScheduleDateEnd);
    if (data.ScheduleDateLastStart != null) this.scheduleDateLastStart = new Date(data.ScheduleDateLastStart);
    if (data.ScheduleDateLastEnd != null) this.scheduleDateLastEnd = new Date(data.ScheduleDateLastEnd);
    if (data.ScheduleRangeStartObject != null) this.scheduleRangeStartObject = data.ScheduleRangeStartObject;
    if (data.FirstRunDate != null) this.firstRunDate = new Date(data.FirstRunDate);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<CategoryScheduleTransaction | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CategoryScheduleTransaction/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch CategoryScheduleTransaction with id ${id}`);
    } else {
      return new CategoryScheduleTransaction(await response.text());
    }
}

}