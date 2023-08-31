// Generated from XML description of WaitListClassification

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WaitListClassification {
  waitListClassificationID?: number;
  waitListID?: number;
  classificationID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WaitListClassification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WaitListClassificationID != null) this.waitListClassificationID = (data.WaitListClassificationID != null ? parseInt(data.WaitListClassificationID, 10) : data.WaitListClassificationID);
    if (data.WaitListID != null) this.waitListID = (data.WaitListID != null ? parseInt(data.WaitListID, 10) : data.WaitListID);
    if (data.ClassificationID != null) this.classificationID = (data.ClassificationID != null ? parseInt(data.ClassificationID, 10) : data.ClassificationID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WaitListClassification by its ID or by exact match on other fields.
   * @param param Either the ID of the WaitListClassification to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WaitListClassification object or null (if id) or an array of WaitListClassification objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WaitListClassification | null>;
  static async select(param: Partial<Record<keyof WaitListClassification, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WaitListClassification[]>;
  static async select(param: number | Partial<Record<keyof WaitListClassification, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WaitListClassification | WaitListClassification[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitListClassification/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitListClassification`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WaitListClassification with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WaitListClassification(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WaitListClassification(entry));
      }
    }
  }
}

WaitListClassification satisfies StarRezStructureStatic<WaitListClassification>
