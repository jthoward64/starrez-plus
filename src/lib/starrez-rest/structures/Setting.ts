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

  /**
   * Fetches a Setting by its ID or by exact match on other fields.
   * @param param Either the ID of the Setting to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Setting object or null (if id) or an array of Setting objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Setting | null>;
  static async select(param: Partial<Record<keyof Setting, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Setting[]>;
  static async select(param: number | Partial<Record<keyof Setting, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Setting | Setting[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Setting/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Setting`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Setting with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Setting(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Setting(entry));
      }
    }
  }
}

Setting satisfies StarRezStructureStatic<Setting>
