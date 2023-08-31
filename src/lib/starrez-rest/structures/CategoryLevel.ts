// Generated from XML description of CategoryLevel

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class CategoryLevel {
  categoryID?: number;
  level1?: string;
  level1ID?: number;
  level2?: string;
  level2ID?: number;
  level3?: string;
  level3ID?: number;
  level4?: string;
  level4ID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "CategoryLevel");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.Level1 != null) this.level1 = data.Level1;
    if (data.Level1ID != null) this.level1ID = (data.Level1ID != null ? parseInt(data.Level1ID, 10) : data.Level1ID);
    if (data.Level2 != null) this.level2 = data.Level2;
    if (data.Level2ID != null) this.level2ID = (data.Level2ID != null ? parseInt(data.Level2ID, 10) : data.Level2ID);
    if (data.Level3 != null) this.level3 = data.Level3;
    if (data.Level3ID != null) this.level3ID = (data.Level3ID != null ? parseInt(data.Level3ID, 10) : data.Level3ID);
    if (data.Level4 != null) this.level4 = data.Level4;
    if (data.Level4ID != null) this.level4ID = (data.Level4ID != null ? parseInt(data.Level4ID, 10) : data.Level4ID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a CategoryLevel by its ID or by exact match on other fields.
   * @param param Either the ID of the CategoryLevel to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single CategoryLevel object or null (if id) or an array of CategoryLevel objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<CategoryLevel | null>;
  static async select(param: Partial<Record<keyof CategoryLevel, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CategoryLevel[]>;
  static async select(param: number | Partial<Record<keyof CategoryLevel, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CategoryLevel | CategoryLevel[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CategoryLevel/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CategoryLevel`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch CategoryLevel with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new CategoryLevel(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new CategoryLevel(entry));
      }
    }
  }
}

CategoryLevel satisfies StarRezStructureStatic<CategoryLevel>
