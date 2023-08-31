// Generated from XML description of WebSetting

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebSetting {
  webSettingID?: number;
  tableID?: number;
  tableName?: string;
  settingName?: string;
  settingValue?: string;
  comments?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebSetting");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebSettingID != null) this.webSettingID = (data.WebSettingID != null ? parseInt(data.WebSettingID, 10) : data.WebSettingID);
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.SettingName != null) this.settingName = data.SettingName;
    if (data.SettingValue != null) this.settingValue = data.SettingValue;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebSetting by its ID or by exact match on other fields.
   * @param param Either the ID of the WebSetting to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebSetting object or null (if id) or an array of WebSetting objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebSetting | null>;
  static async select(param: Partial<Record<keyof WebSetting, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebSetting[]>;
  static async select(param: number | Partial<Record<keyof WebSetting, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebSetting | WebSetting[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebSetting/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebSetting`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebSetting with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebSetting(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebSetting(entry));
      }
    }
  }
}

WebSetting satisfies StarRezStructureStatic<WebSetting>
