// Generated from XML description of EntryProfile

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryProfile {
  entryProfileID?: number;
  entryID?: number;
  profileTypeID?: number;
  profileItemID?: number;
  profileWeightEnum?: unknown;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryProfileID != null) this.entryProfileID = (data.EntryProfileID != null ? parseInt(data.EntryProfileID, 10) : data.EntryProfileID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ProfileTypeID != null) this.profileTypeID = (data.ProfileTypeID != null ? parseInt(data.ProfileTypeID, 10) : data.ProfileTypeID);
    if (data.ProfileItemID != null) this.profileItemID = (data.ProfileItemID != null ? parseInt(data.ProfileItemID, 10) : data.ProfileItemID);
    if (data.ProfileWeightEnum != null) this.profileWeightEnum = data.ProfileWeightEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryProfile by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryProfile to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryProfile object or null (if id) or an array of EntryProfile objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryProfile | null>;
  static async select(param: Partial<Record<keyof EntryProfile, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryProfile[]>;
  static async select(param: number | Partial<Record<keyof EntryProfile, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryProfile | EntryProfile[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryProfile/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryProfile`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryProfile with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryProfile(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryProfile(entry));
      }
    }
  }
}

EntryProfile satisfies StarRezStructureStatic<EntryProfile>
