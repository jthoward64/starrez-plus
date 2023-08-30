// Generated from XML description of ReportSchedule

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.ReportScheduleID != null) this.reportScheduleID = parseInt(data.ReportScheduleID, 10);
    if (data.ReportID != null) this.reportID = parseInt(data.ReportID, 10);
    if (data.ReportDestinationEnum != null) this.reportDestinationEnum = data.ReportDestinationEnum;
    if (data.ReportExportTypeEnum != null) this.reportExportTypeEnum = data.ReportExportTypeEnum;
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
    if (data.ScheduleResultEnum != null) this.scheduleResultEnum = data.ScheduleResultEnum;
    if (data.EmailAddress != null) this.emailAddress = data.EmailAddress;
    if (data.ExportPath != null) this.exportPath = data.ExportPath;
    if (data.ExportFileNameFormat != null) this.exportFileNameFormat = data.ExportFileNameFormat;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.ScheduleRangeEndObject != null) this.scheduleRangeEndObject = data.ScheduleRangeEndObject;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
