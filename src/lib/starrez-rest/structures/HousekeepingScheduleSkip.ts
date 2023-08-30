// Generated from XML description of HousekeepingScheduleSkip

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class HousekeepingScheduleSkip {
  housekeepingScheduleSkipID?: number;
  housekeepingID?: number;
  roomServiceLevel?: number;
  scheduleEnum?: unknown;
  scheduleInterval?: number;
  schedule_DayInWeekEnum?: unknown;
  skipDays?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "HousekeepingScheduleSkip");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.HousekeepingScheduleSkipID != null) this.housekeepingScheduleSkipID = parseInt(data.HousekeepingScheduleSkipID, 10);
    if (data.HousekeepingID != null) this.housekeepingID = parseInt(data.HousekeepingID, 10);
    if (data.RoomServiceLevel != null) this.roomServiceLevel = parseInt(data.RoomServiceLevel, 10);
    if (data.ScheduleEnum != null) this.scheduleEnum = data.ScheduleEnum;
    if (data.ScheduleInterval != null) this.scheduleInterval = parseInt(data.ScheduleInterval, 10);
    if (data.Schedule_DayInWeekEnum != null) this.schedule_DayInWeekEnum = data.Schedule_DayInWeekEnum;
    if (data.SkipDays != null) this.skipDays = parseInt(data.SkipDays, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<HousekeepingScheduleSkip | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/HousekeepingScheduleSkip/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch HousekeepingScheduleSkip with id ${id}`);
    } else {
      return new HousekeepingScheduleSkip(await response.text());
    }
  }
}

HousekeepingScheduleSkip satisfies StarRezStructureStatic<HousekeepingScheduleSkip>
