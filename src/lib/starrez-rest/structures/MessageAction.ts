// Generated from XML description of MessageAction

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class MessageAction {
  messageActionID?: number;
  description?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "MessageAction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MessageActionID != null) this.messageActionID = (data.MessageActionID != null ? parseInt(data.MessageActionID, 10) : data.MessageActionID);
    if (data.Description != null) this.description = data.Description;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a MessageAction by its ID or by exact match on other fields.
   * @param param Either the ID of the MessageAction to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single MessageAction object or null (if id) or an array of MessageAction objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<MessageAction | null>;
  static async select(param: Partial<Record<keyof MessageAction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MessageAction[]>;
  static async select(param: number | Partial<Record<keyof MessageAction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MessageAction | MessageAction[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MessageAction/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MessageAction`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch MessageAction with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new MessageAction(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new MessageAction(entry));
      }
    }
  }
}

MessageAction satisfies StarRezStructureStatic<MessageAction>
