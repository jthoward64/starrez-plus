// Generated from XML description of MessageSubscriber

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a MessageSubscriber by its ID or by exact match on other fields.
   * @param param Either the ID of the MessageSubscriber to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single MessageSubscriber object or null (if id) or an array of MessageSubscriber objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<MessageSubscriber | null>;
  static async select(param: Partial<Record<keyof MessageSubscriber, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MessageSubscriber[]>;
  static async select(param: number | Partial<Record<keyof MessageSubscriber, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MessageSubscriber | MessageSubscriber[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MessageSubscriber/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MessageSubscriber`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch MessageSubscriber with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new MessageSubscriber(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new MessageSubscriber(entry));
      }
    }
  }
}

MessageSubscriber satisfies StarRezStructureStatic<MessageSubscriber>
