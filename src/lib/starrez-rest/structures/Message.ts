// Generated from XML description of Message

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Message {
  messageID?: number;
  messageActionID?: number;
  messageSubscriptionID?: number;
  messageDate?: Date;
  securityUserID?: number;
  machineName?: string;
  className?: string;
  existingData?: string;
  newData?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Message");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MessageID != null) this.messageID = (data.MessageID != null ? parseInt(data.MessageID, 10) : data.MessageID);
    if (data.MessageActionID != null) this.messageActionID = (data.MessageActionID != null ? parseInt(data.MessageActionID, 10) : data.MessageActionID);
    if (data.MessageSubscriptionID != null) this.messageSubscriptionID = (data.MessageSubscriptionID != null ? parseInt(data.MessageSubscriptionID, 10) : data.MessageSubscriptionID);
    if (data.MessageDate != null) this.messageDate = (data.MessageDate != null ? new Date(data.MessageDate) : data.MessageDate);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.ClassName != null) this.className = data.ClassName;
    if (data.ExistingData != null) this.existingData = data.ExistingData;
    if (data.NewData != null) this.newData = data.NewData;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Message by its ID or by exact match on other fields.
   * @param param Either the ID of the Message to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Message object or null (if id) or an array of Message objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Message | null>;
  static async select(param: Partial<Record<keyof Message, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Message[]>;
  static async select(param: number | Partial<Record<keyof Message, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Message | Message[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Message/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Message`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Message with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Message(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Message(entry));
      }
    }
  }
}

Message satisfies StarRezStructureStatic<Message>
