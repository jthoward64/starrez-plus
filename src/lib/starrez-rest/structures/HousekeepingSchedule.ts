// Generated from XML description of HousekeepingSchedule

import { starRezXmlToJson } from "../parsing.js";

export class HousekeepingSchedule {
  housekeepingScheduleID?: number;
  housekeepingID?: number;
  roomServiceLevel?: number;
  scheduleEnum?: unknown;
  scheduleInterval?: number;
  schedule_DayInWeekEnum?: unknown;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "HousekeepingSchedule");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.HousekeepingScheduleID != null) this.housekeepingScheduleID = parseInt(data.HousekeepingScheduleID, 10);
    if (data.HousekeepingID != null) this.housekeepingID = parseInt(data.HousekeepingID, 10);
    if (data.RoomServiceLevel != null) this.roomServiceLevel = parseInt(data.RoomServiceLevel, 10);
    if (data.ScheduleEnum != null) this.scheduleEnum = data.ScheduleEnum;
    if (data.ScheduleInterval != null) this.scheduleInterval = parseInt(data.ScheduleInterval, 10);
    if (data.Schedule_DayInWeekEnum != null) this.schedule_DayInWeekEnum = data.Schedule_DayInWeekEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
