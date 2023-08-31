// Generated from XML description of EntryMealTag

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryMealTag {
  entryMealTagID?: number;
  entryMealID?: number;
  tagType?: string;
  tag?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryMealTag");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryMealTagID != null) this.entryMealTagID = (data.EntryMealTagID != null ? parseInt(data.EntryMealTagID, 10) : data.EntryMealTagID);
    if (data.EntryMealID != null) this.entryMealID = (data.EntryMealID != null ? parseInt(data.EntryMealID, 10) : data.EntryMealID);
    if (data.TagType != null) this.tagType = data.TagType;
    if (data.Tag != null) this.tag = data.Tag;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryMealTag by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryMealTag to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryMealTag object or null (if id) or an array of EntryMealTag objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryMealTag | null>;
  static async select(param: Partial<Record<keyof EntryMealTag, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryMealTag[]>;
  static async select(param: number | Partial<Record<keyof EntryMealTag, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryMealTag | EntryMealTag[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryMealTag/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryMealTag`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryMealTag with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryMealTag(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryMealTag(entry));
      }
    }
  }
}

EntryMealTag satisfies StarRezStructureStatic<EntryMealTag>
