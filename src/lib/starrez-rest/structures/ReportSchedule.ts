// Generated from XML description of ReportSchedule

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ReportSchedule {
  reportScheduleID?: number;
  reportID?: number;
  reportDestinationEnum?: unknown;
  reportExportTypeEnum?: unknown;
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
  emailAddress?: string;
  exportPath?: string;
  exportFileNameFormat?: string;
  securityUserID?: number;
  scheduleRangeEndObject?: any | null;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ReportSchedule");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ReportScheduleID != null) this.reportScheduleID = (data.ReportScheduleID != null ? parseInt(data.ReportScheduleID, 10) : data.ReportScheduleID);
    if (data.ReportID != null) this.reportID = (data.ReportID != null ? parseInt(data.ReportID, 10) : data.ReportID);
    if (data.ReportDestinationEnum != null) this.reportDestinationEnum = data.ReportDestinationEnum;
    if (data.ReportExportTypeEnum != null) this.reportExportTypeEnum = data.ReportExportTypeEnum;
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
    if (data.EmailAddress != null) this.emailAddress = data.EmailAddress;
    if (data.ExportPath != null) this.exportPath = data.ExportPath;
    if (data.ExportFileNameFormat != null) this.exportFileNameFormat = data.ExportFileNameFormat;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.ScheduleRangeEndObject != null) this.scheduleRangeEndObject = data.ScheduleRangeEndObject;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a ReportSchedule by its ID or by exact match on other fields.
   * @param param Either the ID of the ReportSchedule to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ReportSchedule object or null (if id) or an array of ReportSchedule objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ReportSchedule | null>;
  static async select(param: Partial<Record<keyof ReportSchedule, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ReportSchedule[]>;
  static async select(param: number | Partial<Record<keyof ReportSchedule, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ReportSchedule | ReportSchedule[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportSchedule/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportSchedule`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ReportSchedule with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ReportSchedule(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ReportSchedule(entry));
      }
    }
  }
}

ReportSchedule satisfies StarRezStructureStatic<ReportSchedule>
