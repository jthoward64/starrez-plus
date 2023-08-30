// Generated from XML description of Calendar

import { starRezXmlToJson } from "../parsing.js";

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
}
