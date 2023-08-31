// Generated from XML description of MessageSubscription

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class MessageSubscription {
  messageSubscriptionID?: number;
  messageActionID?: number;
  messageSubscriberID?: number;
  enabled?: boolean;
  activeStartDate?: Date | null;
  activeEndDate?: Date | null;
  description?: string;
  comments?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "MessageSubscription");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MessageSubscriptionID != null) this.messageSubscriptionID = (data.MessageSubscriptionID != null ? parseInt(data.MessageSubscriptionID, 10) : data.MessageSubscriptionID);
    if (data.MessageActionID != null) this.messageActionID = (data.MessageActionID != null ? parseInt(data.MessageActionID, 10) : data.MessageActionID);
    if (data.MessageSubscriberID != null) this.messageSubscriberID = (data.MessageSubscriberID != null ? parseInt(data.MessageSubscriberID, 10) : data.MessageSubscriberID);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
    if (data.ActiveStartDate != null) this.activeStartDate = (data.ActiveStartDate != null ? new Date(data.ActiveStartDate) : data.ActiveStartDate);
    if (data.ActiveEndDate != null) this.activeEndDate = (data.ActiveEndDate != null ? new Date(data.ActiveEndDate) : data.ActiveEndDate);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a MessageSubscription by its ID or by exact match on other fields.
   * @param param Either the ID of the MessageSubscription to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single MessageSubscription object or null (if id) or an array of MessageSubscription objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<MessageSubscription | null>;
  static async select(param: Partial<Record<keyof MessageSubscription, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MessageSubscription[]>;
  static async select(param: number | Partial<Record<keyof MessageSubscription, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MessageSubscription | MessageSubscription[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MessageSubscription/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MessageSubscription`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch MessageSubscription with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new MessageSubscription(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new MessageSubscription(entry));
      }
    }
  }
}

MessageSubscription satisfies StarRezStructureStatic<MessageSubscription>
