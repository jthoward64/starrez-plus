// Generated from XML description of Title

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Title {
  titleID?: number;
  description?: string;
  updateGender?: boolean;
  genderEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Title");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TitleID != null) this.titleID = (data.TitleID != null ? parseInt(data.TitleID, 10) : data.TitleID);
    if (data.Description != null) this.description = data.Description;
    if (data.UpdateGender != null) this.updateGender = data.UpdateGender === 'true';
    if (data.GenderEnum != null) this.genderEnum = data.GenderEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Title by its ID or by exact match on other fields.
   * @param param Either the ID of the Title to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Title object or null (if id) or an array of Title objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Title | null>;
  static async select(param: Partial<Record<keyof Title, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Title[]>;
  static async select(param: number | Partial<Record<keyof Title, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Title | Title[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Title/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Title`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Title with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Title(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Title(entry));
      }
    }
  }
}

Title satisfies StarRezStructureStatic<Title>
