// Generated from XML description of MessageSubscriptionSettings

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.MessageSubscriptionSettingsID != null) this.messageSubscriptionSettingsID = parseInt(data.MessageSubscriptionSettingsID, 10);
    if (data.MessageSubscriptionID != null) this.messageSubscriptionID = parseInt(data.MessageSubscriptionID, 10);
    if (data.SettingName != null) this.settingName = data.SettingName;
    if (data.SettingValue != null) this.settingValue = data.SettingValue;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
