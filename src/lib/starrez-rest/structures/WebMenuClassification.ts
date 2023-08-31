// Generated from XML description of WebMenuClassification

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebMenuClassification {
  webMenuClassificationID?: number;
  webMenuID?: number;
  termTypeID?: number;
  classificationID?: number;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebMenuClassification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebMenuClassificationID != null) this.webMenuClassificationID = (data.WebMenuClassificationID != null ? parseInt(data.WebMenuClassificationID, 10) : data.WebMenuClassificationID);
    if (data.WebMenuID != null) this.webMenuID = (data.WebMenuID != null ? parseInt(data.WebMenuID, 10) : data.WebMenuID);
    if (data.TermTypeID != null) this.termTypeID = (data.TermTypeID != null ? parseInt(data.TermTypeID, 10) : data.TermTypeID);
    if (data.ClassificationID != null) this.classificationID = (data.ClassificationID != null ? parseInt(data.ClassificationID, 10) : data.ClassificationID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebMenuClassification by its ID or by exact match on other fields.
   * @param param Either the ID of the WebMenuClassification to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebMenuClassification object or null (if id) or an array of WebMenuClassification objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebMenuClassification | null>;
  static async select(param: Partial<Record<keyof WebMenuClassification, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebMenuClassification[]>;
  static async select(param: number | Partial<Record<keyof WebMenuClassification, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebMenuClassification | WebMenuClassification[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebMenuClassification/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebMenuClassification`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebMenuClassification with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebMenuClassification(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebMenuClassification(entry));
      }
    }
  }
}

WebMenuClassification satisfies StarRezStructureStatic<WebMenuClassification>
