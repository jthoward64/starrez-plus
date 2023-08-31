// Generated from XML description of ReportSetting

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ReportSetting {
  reportSettingID?: number;
  reportID?: number;
  controlName?: string;
  settingValue?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ReportSetting");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ReportSettingID != null) this.reportSettingID = (data.ReportSettingID != null ? parseInt(data.ReportSettingID, 10) : data.ReportSettingID);
    if (data.ReportID != null) this.reportID = (data.ReportID != null ? parseInt(data.ReportID, 10) : data.ReportID);
    if (data.ControlName != null) this.controlName = data.ControlName;
    if (data.SettingValue != null) this.settingValue = data.SettingValue;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a ReportSetting by its ID or by exact match on other fields.
   * @param param Either the ID of the ReportSetting to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ReportSetting object or null (if id) or an array of ReportSetting objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ReportSetting | null>;
  static async select(param: Partial<Record<keyof ReportSetting, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ReportSetting[]>;
  static async select(param: number | Partial<Record<keyof ReportSetting, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ReportSetting | ReportSetting[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportSetting/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportSetting`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ReportSetting with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ReportSetting(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ReportSetting(entry));
      }
    }
  }
}

ReportSetting satisfies StarRezStructureStatic<ReportSetting>
