// Generated from XML description of EntryScheduleTransaction

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryScheduleTransaction {
  entryScheduleTransactionID?: number;
  entryID?: number;
  description?: string;
  comments?: string;
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
  scheduleResultEnum?: unknown;
  transactionAmount?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryScheduleTransaction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryScheduleTransactionID != null) this.entryScheduleTransactionID = (data.EntryScheduleTransactionID != null ? parseInt(data.EntryScheduleTransactionID, 10) : data.EntryScheduleTransactionID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
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
    if (data.ScheduleResultEnum != null) this.scheduleResultEnum = data.ScheduleResultEnum;
    if (data.TransactionAmount != null) this.transactionAmount = data.TransactionAmount;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryScheduleTransaction | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryScheduleTransaction/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryScheduleTransaction with id ${id}`);
    } else {
      return new EntryScheduleTransaction(await response.text());
    }
  }
}

EntryScheduleTransaction satisfies StarRezStructureStatic<EntryScheduleTransaction>
