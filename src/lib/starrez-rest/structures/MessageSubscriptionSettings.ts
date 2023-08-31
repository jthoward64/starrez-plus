// Generated from XML description of MessageSubscriptionSettings

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<MessageSubscriptionSettings | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/MessageSubscriptionSettings/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch MessageSubscriptionSettings with id ${id}`);
    } else {
      return new MessageSubscriptionSettings(await response.text());
    }
  }
}

MessageSubscriptionSettings satisfies StarRezStructureStatic<MessageSubscriptionSettings>
