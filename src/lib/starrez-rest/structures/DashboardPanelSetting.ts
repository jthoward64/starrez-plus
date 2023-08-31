// Generated from XML description of DashboardPanelSetting

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class DashboardPanelSetting {
  dashboardPanelSettingID?: number;
  dashboardPanelID?: number;
  settingName?: string;
  settingValue?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "DashboardPanelSetting");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DashboardPanelSettingID != null) this.dashboardPanelSettingID = (data.DashboardPanelSettingID != null ? parseInt(data.DashboardPanelSettingID, 10) : data.DashboardPanelSettingID);
    if (data.DashboardPanelID != null) this.dashboardPanelID = (data.DashboardPanelID != null ? parseInt(data.DashboardPanelID, 10) : data.DashboardPanelID);
    if (data.SettingName != null) this.settingName = data.SettingName;
    if (data.SettingValue != null) this.settingValue = data.SettingValue;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a DashboardPanelSetting by its ID or by exact match on other fields.
   * @param param Either the ID of the DashboardPanelSetting to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single DashboardPanelSetting object or null (if id) or an array of DashboardPanelSetting objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<DashboardPanelSetting | null>;
  static async select(param: Partial<Record<keyof DashboardPanelSetting, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<DashboardPanelSetting[]>;
  static async select(param: number | Partial<Record<keyof DashboardPanelSetting, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<DashboardPanelSetting | DashboardPanelSetting[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DashboardPanelSetting/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DashboardPanelSetting`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch DashboardPanelSetting with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new DashboardPanelSetting(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new DashboardPanelSetting(entry));
      }
    }
  }
}

DashboardPanelSetting satisfies StarRezStructureStatic<DashboardPanelSetting>
