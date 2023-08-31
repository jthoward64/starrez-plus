// Generated from XML description of GLPosting

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class GLPosting {
  gLPostingID?: number;
  gLPostingTypeEnum?: unknown;
  description?: string;
  gLNumber?: string;
  comments?: string;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GLPosting");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GLPostingID != null) this.gLPostingID = (data.GLPostingID != null ? parseInt(data.GLPostingID, 10) : data.GLPostingID);
    if (data.GLPostingTypeEnum != null) this.gLPostingTypeEnum = data.GLPostingTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.GLNumber != null) this.gLNumber = data.GLNumber;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a GLPosting by its ID or by exact match on other fields.
   * @param param Either the ID of the GLPosting to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single GLPosting object or null (if id) or an array of GLPosting objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<GLPosting | null>;
  static async select(param: Partial<Record<keyof GLPosting, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GLPosting[]>;
  static async select(param: number | Partial<Record<keyof GLPosting, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GLPosting | GLPosting[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GLPosting/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GLPosting`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch GLPosting with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new GLPosting(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new GLPosting(entry));
      }
    }
  }
}

GLPosting satisfies StarRezStructureStatic<GLPosting>
