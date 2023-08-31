// Generated from XML description of HousekeepingSchedule

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.HousekeepingScheduleID != null) this.housekeepingScheduleID = (data.HousekeepingScheduleID != null ? parseInt(data.HousekeepingScheduleID, 10) : data.HousekeepingScheduleID);
    if (data.HousekeepingID != null) this.housekeepingID = (data.HousekeepingID != null ? parseInt(data.HousekeepingID, 10) : data.HousekeepingID);
    if (data.RoomServiceLevel != null) this.roomServiceLevel = (data.RoomServiceLevel != null ? parseInt(data.RoomServiceLevel, 10) : data.RoomServiceLevel);
    if (data.ScheduleEnum != null) this.scheduleEnum = data.ScheduleEnum;
    if (data.ScheduleInterval != null) this.scheduleInterval = (data.ScheduleInterval != null ? parseInt(data.ScheduleInterval, 10) : data.ScheduleInterval);
    if (data.Schedule_DayInWeekEnum != null) this.schedule_DayInWeekEnum = data.Schedule_DayInWeekEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<HousekeepingSchedule | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/HousekeepingSchedule/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch HousekeepingSchedule with id ${id}`);
    } else {
      return new HousekeepingSchedule(await response.text());
    }
  }
}

HousekeepingSchedule satisfies StarRezStructureStatic<HousekeepingSchedule>
