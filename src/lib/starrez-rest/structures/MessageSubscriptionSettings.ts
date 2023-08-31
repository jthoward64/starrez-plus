// Generated from XML description of MessageSubscriptionSettings

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class MessageSubscriptionSettings {
  messageSubscriptionSettingsID?: number;
  messageSubscriptionID?: number;
  settingName?: string;
  settingValue?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "MessageSubscriptionSettings");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.MessageSubscriptionSettingsID != null) this.messageSubscriptionSettingsID = (data.MessageSubscriptionSettingsID != null ? parseInt(data.MessageSubscriptionSettingsID, 10) : data.MessageSubscriptionSettingsID);
    if (data.MessageSubscriptionID != null) this.messageSubscriptionID = (data.MessageSubscriptionID != null ? parseInt(data.MessageSubscriptionID, 10) : data.MessageSubscriptionID);
    if (data.SettingName != null) this.settingName = data.SettingName;
    if (data.SettingValue != null) this.settingValue = data.SettingValue;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a MessageSubscriptionSettings by its ID or by exact match on other fields.
   * @param param Either the ID of the MessageSubscriptionSettings to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single MessageSubscriptionSettings object or null (if id) or an array of MessageSubscriptionSettings objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<MessageSubscriptionSettings | null>;
  static async select(param: Partial<Record<keyof MessageSubscriptionSettings, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MessageSubscriptionSettings[]>;
  static async select(param: number | Partial<Record<keyof MessageSubscriptionSettings, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<MessageSubscriptionSettings | MessageSubscriptionSettings[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MessageSubscriptionSettings/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MessageSubscriptionSettings`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch MessageSubscriptionSettings with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new MessageSubscriptionSettings(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new MessageSubscriptionSettings(entry));
      }
    }
  }
}

MessageSubscriptionSettings satisfies StarRezStructureStatic<MessageSubscriptionSettings>
