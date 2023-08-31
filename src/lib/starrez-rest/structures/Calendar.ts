// Generated from XML description of Calendar

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Calendar {
  calendarID?: number;
  calendarDate?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Calendar");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CalendarID != null) this.calendarID = (data.CalendarID != null ? parseInt(data.CalendarID, 10) : data.CalendarID);
    if (data.CalendarDate != null) this.calendarDate = (data.CalendarDate != null ? new Date(data.CalendarDate) : data.CalendarDate);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Calendar | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Calendar/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Calendar with id ${id}`);
    } else {
      return new Calendar(await response.text());
    }
  }
}

Calendar satisfies StarRezStructureStatic<Calendar>
