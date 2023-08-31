// Generated from XML description of ProgramSubType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ProgramSubType {
  programSubTypeID?: number;
  programTypeID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ProgramSubType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ProgramSubTypeID != null) this.programSubTypeID = (data.ProgramSubTypeID != null ? parseInt(data.ProgramSubTypeID, 10) : data.ProgramSubTypeID);
    if (data.ProgramTypeID != null) this.programTypeID = (data.ProgramTypeID != null ? parseInt(data.ProgramTypeID, 10) : data.ProgramTypeID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a ProgramSubType by its ID or by exact match on other fields.
   * @param param Either the ID of the ProgramSubType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ProgramSubType object or null (if id) or an array of ProgramSubType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ProgramSubType | null>;
  static async select(param: Partial<Record<keyof ProgramSubType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ProgramSubType[]>;
  static async select(param: number | Partial<Record<keyof ProgramSubType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ProgramSubType | ProgramSubType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ProgramSubType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ProgramSubType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ProgramSubType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ProgramSubType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ProgramSubType(entry));
      }
    }
  }
}

ProgramSubType satisfies StarRezStructureStatic<ProgramSubType>
