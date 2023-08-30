// Generated from XML description of Calendar

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class Calendar {
  calendarID?: number;
  calendarDate?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Calendar");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CalendarID != null) this.calendarID = parseInt(data.CalendarID, 10);
    if (data.CalendarDate != null) this.calendarDate = new Date(data.CalendarDate);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Calendar | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Calendar/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Calendar with id ${id}`);
    } else {
      return new Calendar(await response.text());
    }
}

}
