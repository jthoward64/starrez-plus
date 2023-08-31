// Generated from XML description of WebEmailText

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebEmailText {
  webEmailTextID?: number;
  webSectionID?: number;
  emailName?: string;
  subject?: string;
  bodyText?: string;
  sQL?: string;
  securityUserID?: number;
  dateCreated?: Date;
  emailFromAddressID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebEmailText");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebEmailTextID != null) this.webEmailTextID = (data.WebEmailTextID != null ? parseInt(data.WebEmailTextID, 10) : data.WebEmailTextID);
    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.EmailName != null) this.emailName = data.EmailName;
    if (data.Subject != null) this.subject = data.Subject;
    if (data.BodyText != null) this.bodyText = data.BodyText;
    if (data.SQL != null) this.sQL = data.SQL;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.EmailFromAddressID != null) this.emailFromAddressID = (data.EmailFromAddressID != null ? parseInt(data.EmailFromAddressID, 10) : data.EmailFromAddressID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebEmailText by its ID or by exact match on other fields.
   * @param param Either the ID of the WebEmailText to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebEmailText object or null (if id) or an array of WebEmailText objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebEmailText | null>;
  static async select(param: Partial<Record<keyof WebEmailText, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebEmailText[]>;
  static async select(param: number | Partial<Record<keyof WebEmailText, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebEmailText | WebEmailText[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebEmailText/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebEmailText`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebEmailText with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebEmailText(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebEmailText(entry));
      }
    }
  }
}

WebEmailText satisfies StarRezStructureStatic<WebEmailText>
