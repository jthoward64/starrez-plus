// Generated from XML description of Priority

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Priority {
  priorityID?: number;
  description?: string;
  sortOrder?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Priority");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PriorityID != null) this.priorityID = (data.PriorityID != null ? parseInt(data.PriorityID, 10) : data.PriorityID);
    if (data.Description != null) this.description = data.Description;
    if (data.SortOrder != null) this.sortOrder = (data.SortOrder != null ? parseInt(data.SortOrder, 10) : data.SortOrder);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Priority by its ID or by exact match on other fields.
   * @param param Either the ID of the Priority to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Priority object or null (if id) or an array of Priority objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Priority | null>;
  static async select(param: Partial<Record<keyof Priority, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Priority[]>;
  static async select(param: number | Partial<Record<keyof Priority, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Priority | Priority[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Priority/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Priority`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Priority with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Priority(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Priority(entry));
      }
    }
  }
}

Priority satisfies StarRezStructureStatic<Priority>
