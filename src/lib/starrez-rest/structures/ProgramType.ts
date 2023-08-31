// Generated from XML description of ProgramType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ProgramType {
  programTypeID?: number;
  description?: string;
  comments?: string;
  categoryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ProgramType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ProgramTypeID != null) this.programTypeID = (data.ProgramTypeID != null ? parseInt(data.ProgramTypeID, 10) : data.ProgramTypeID);
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
   * Fetches a ProgramType by its ID or by exact match on other fields.
   * @param param Either the ID of the ProgramType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ProgramType object or null (if id) or an array of ProgramType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ProgramType | null>;
  static async select(param: Partial<Record<keyof ProgramType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ProgramType[]>;
  static async select(param: number | Partial<Record<keyof ProgramType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ProgramType | ProgramType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ProgramType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ProgramType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ProgramType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ProgramType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ProgramType(entry));
      }
    }
  }
}

ProgramType satisfies StarRezStructureStatic<ProgramType>
