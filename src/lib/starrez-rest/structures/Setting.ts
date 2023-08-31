// Generated from XML description of Setting

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.SettingID != null) this.settingID = (data.SettingID != null ? parseInt(data.SettingID, 10) : data.SettingID);
    if (data.Application != null) this.application = data.Application;
    if (data.Setting != null) this.setting = data.Setting;
    if (data.SettingValue != null) this.settingValue = data.SettingValue;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Setting | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Setting/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Setting with id ${id}`);
    } else {
      return new Setting(await response.text());
    }
  }
}

Setting satisfies StarRezStructureStatic<Setting>
