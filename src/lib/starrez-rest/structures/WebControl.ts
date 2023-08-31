// Generated from XML description of WebControl

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebControl {
  webControlID?: number;
  webSectionID?: number;
  controlTitle?: string;
  controlName?: string;
  controlOrder?: number;
  showTitle?: boolean;
  source?: string;
  pane?: string;
  accessRoles?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebControl");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebControlID != null) this.webControlID = (data.WebControlID != null ? parseInt(data.WebControlID, 10) : data.WebControlID);
    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.ControlTitle != null) this.controlTitle = data.ControlTitle;
    if (data.ControlName != null) this.controlName = data.ControlName;
    if (data.ControlOrder != null) this.controlOrder = (data.ControlOrder != null ? parseInt(data.ControlOrder, 10) : data.ControlOrder);
    if (data.ShowTitle != null) this.showTitle = data.ShowTitle === 'true';
    if (data.Source != null) this.source = data.Source;
    if (data.Pane != null) this.pane = data.Pane;
    if (data.AccessRoles != null) this.accessRoles = data.AccessRoles;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebControl by its ID or by exact match on other fields.
   * @param param Either the ID of the WebControl to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebControl object or null (if id) or an array of WebControl objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebControl | null>;
  static async select(param: Partial<Record<keyof WebControl, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebControl[]>;
  static async select(param: number | Partial<Record<keyof WebControl, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebControl | WebControl[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebControl/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebControl`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebControl with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebControl(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebControl(entry));
      }
    }
  }
}

WebControl satisfies StarRezStructureStatic<WebControl>
