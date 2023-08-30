// Generated from XML description of EventServicesQueuedEvent

import { starRezXmlToJson } from "../parsing.js";

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
}
