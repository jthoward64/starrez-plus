// Generated from XML description of EventServicesQueuedEvent

import { starRezXmlToJson } from "../parsing.js";
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

    if (data.EventServicesQueuedEventID != null) this.eventServicesQueuedEventID = parseInt(data.EventServicesQueuedEventID, 10);
    if (data.StatefulItemName != null) this.statefulItemName = data.StatefulItemName;
    if (data.StatefulItemID != null) this.statefulItemID = parseInt(data.StatefulItemID, 10);
    if (data.Type != null) this.type = parseInt(data.Type, 10);
    if (data.Data != null) this.data = data.Data;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EventServicesQueuedEvent | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EventServicesQueuedEvent/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EventServicesQueuedEvent with id ${id}`);
    } else {
      return new EventServicesQueuedEvent(await response.text());
    }
  }
}

EventServicesQueuedEvent satisfies StarRezStructureStatic<EventServicesQueuedEvent>
