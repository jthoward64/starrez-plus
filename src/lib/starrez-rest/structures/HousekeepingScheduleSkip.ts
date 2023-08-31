// Generated from XML description of HousekeepingScheduleSkip

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

    if (data.HousekeepingScheduleSkipID != null) this.housekeepingScheduleSkipID = (data.HousekeepingScheduleSkipID != null ? parseInt(data.HousekeepingScheduleSkipID, 10) : data.HousekeepingScheduleSkipID);
    if (data.HousekeepingID != null) this.housekeepingID = (data.HousekeepingID != null ? parseInt(data.HousekeepingID, 10) : data.HousekeepingID);
    if (data.RoomServiceLevel != null) this.roomServiceLevel = (data.RoomServiceLevel != null ? parseInt(data.RoomServiceLevel, 10) : data.RoomServiceLevel);
    if (data.ScheduleEnum != null) this.scheduleEnum = data.ScheduleEnum;
    if (data.ScheduleInterval != null) this.scheduleInterval = (data.ScheduleInterval != null ? parseInt(data.ScheduleInterval, 10) : data.ScheduleInterval);
    if (data.Schedule_DayInWeekEnum != null) this.schedule_DayInWeekEnum = data.Schedule_DayInWeekEnum;
    if (data.SkipDays != null) this.skipDays = (data.SkipDays != null ? parseInt(data.SkipDays, 10) : data.SkipDays);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a HousekeepingScheduleSkip by its ID or by exact match on other fields.
   * @param param Either the ID of the HousekeepingScheduleSkip to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single HousekeepingScheduleSkip object or null (if id) or an array of HousekeepingScheduleSkip objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<HousekeepingScheduleSkip | null>;
  static async select(param: Partial<Record<keyof HousekeepingScheduleSkip, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<HousekeepingScheduleSkip[]>;
  static async select(param: number | Partial<Record<keyof HousekeepingScheduleSkip, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<HousekeepingScheduleSkip | HousekeepingScheduleSkip[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/HousekeepingScheduleSkip/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/HousekeepingScheduleSkip`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch HousekeepingScheduleSkip with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new HousekeepingScheduleSkip(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new HousekeepingScheduleSkip(entry));
      }
    }
  }
}

HousekeepingScheduleSkip satisfies StarRezStructureStatic<HousekeepingScheduleSkip>
