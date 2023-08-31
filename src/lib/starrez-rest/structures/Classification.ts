// Generated from XML description of Classification

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Classification {
  classificationID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  categoryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Classification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ClassificationID != null) this.classificationID = (data.ClassificationID != null ? parseInt(data.ClassificationID, 10) : data.ClassificationID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Classification by its ID or by exact match on other fields.
   * @param param Either the ID of the Classification to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Classification object or null (if id) or an array of Classification objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Classification | null>;
  static async select(param: Partial<Record<keyof Classification, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Classification[]>;
  static async select(param: number | Partial<Record<keyof Classification, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Classification | Classification[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Classification/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Classification`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Classification with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Classification(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Classification(entry));
      }
    }
  }
}

Classification satisfies StarRezStructureStatic<Classification>
