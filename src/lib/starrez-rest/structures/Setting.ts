// Generated from XML description of Setting

import { starRezXmlToJson } from "../parsing.js";

export class Setting {
  settingID?: number;
  application?: string;
  setting?: string;
  settingValue?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Setting");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.SettingID != null) this.settingID = parseInt(data.SettingID, 10);
    if (data.Application != null) this.application = data.Application;
    if (data.Setting != null) this.setting = data.Setting;
    if (data.SettingValue != null) this.settingValue = data.SettingValue;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
