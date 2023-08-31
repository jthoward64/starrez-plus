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

  /**
   * Fetches a Calendar by its ID or by exact match on other fields.
   * @param param Either the ID of the Calendar to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Calendar object or null (if id) or an array of Calendar objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Calendar | null>;
  static async select(param: Partial<Record<keyof Calendar, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Calendar[]>;
  static async select(param: number | Partial<Record<keyof Calendar, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Calendar | Calendar[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Calendar/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Calendar`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Calendar with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Calendar(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Calendar(entry));
      }
    }
  }
}

Calendar satisfies StarRezStructureStatic<Calendar>
