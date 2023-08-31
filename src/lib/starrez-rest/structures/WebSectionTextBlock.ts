// Generated from XML description of WebSectionTextBlock

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebSectionTextBlock {
  webSectionTextBlockID?: number;
  webSectionID?: number;
  blockName?: string;
  blockText?: string;
  sQL?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebSectionTextBlock");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebSectionTextBlockID != null) this.webSectionTextBlockID = (data.WebSectionTextBlockID != null ? parseInt(data.WebSectionTextBlockID, 10) : data.WebSectionTextBlockID);
    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.BlockName != null) this.blockName = data.BlockName;
    if (data.BlockText != null) this.blockText = data.BlockText;
    if (data.SQL != null) this.sQL = data.SQL;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebSectionTextBlock by its ID or by exact match on other fields.
   * @param param Either the ID of the WebSectionTextBlock to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebSectionTextBlock object or null (if id) or an array of WebSectionTextBlock objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebSectionTextBlock | null>;
  static async select(param: Partial<Record<keyof WebSectionTextBlock, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebSectionTextBlock[]>;
  static async select(param: number | Partial<Record<keyof WebSectionTextBlock, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebSectionTextBlock | WebSectionTextBlock[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebSectionTextBlock/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebSectionTextBlock`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebSectionTextBlock with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebSectionTextBlock(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebSectionTextBlock(entry));
      }
    }
  }
}

WebSectionTextBlock satisfies StarRezStructureStatic<WebSectionTextBlock>
