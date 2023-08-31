// Generated from XML description of EventServicesQueuedEvent

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EventServicesQueuedEvent {
  eventServicesQueuedEventID?: number;
  statefulItemName?: string;
  statefulItemID?: number;
  type?: number;
  data?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EventServicesQueuedEvent");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EventServicesQueuedEventID != null) this.eventServicesQueuedEventID = (data.EventServicesQueuedEventID != null ? parseInt(data.EventServicesQueuedEventID, 10) : data.EventServicesQueuedEventID);
    if (data.StatefulItemName != null) this.statefulItemName = data.StatefulItemName;
    if (data.StatefulItemID != null) this.statefulItemID = (data.StatefulItemID != null ? parseInt(data.StatefulItemID, 10) : data.StatefulItemID);
    if (data.Type != null) this.type = (data.Type != null ? parseInt(data.Type, 10) : data.Type);
    if (data.Data != null) this.data = data.Data;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EventServicesQueuedEvent by its ID or by exact match on other fields.
   * @param param Either the ID of the EventServicesQueuedEvent to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EventServicesQueuedEvent object or null (if id) or an array of EventServicesQueuedEvent objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EventServicesQueuedEvent | null>;
  static async select(param: Partial<Record<keyof EventServicesQueuedEvent, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EventServicesQueuedEvent[]>;
  static async select(param: number | Partial<Record<keyof EventServicesQueuedEvent, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EventServicesQueuedEvent | EventServicesQueuedEvent[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventServicesQueuedEvent/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventServicesQueuedEvent`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EventServicesQueuedEvent with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EventServicesQueuedEvent(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EventServicesQueuedEvent(entry));
      }
    }
  }
}

EventServicesQueuedEvent satisfies StarRezStructureStatic<EventServicesQueuedEvent>
