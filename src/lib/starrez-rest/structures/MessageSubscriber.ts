// Generated from XML description of MessageSubscriber

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class MessageSubscriber {
  messageSubscriberID?: number;
  description?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "MessageSubscriber");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MessageSubscriberID != null) this.messageSubscriberID = (data.MessageSubscriberID != null ? parseInt(data.MessageSubscriberID, 10) : data.MessageSubscriberID);
    if (data.Description != null) this.description = data.Description;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<MessageSubscriber | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MessageSubscriber/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch MessageSubscriber with id ${id}`);
    } else {
      return new MessageSubscriber(await response.text());
    }
  }
}

MessageSubscriber satisfies StarRezStructureStatic<MessageSubscriber>
