// Generated from XML description of EntryApplicationPreference

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryApplicationPreference {
  entryApplicationPreferenceID?: number;
  entryApplicationID?: number;
  preferenceID?: number;
  preference?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryApplicationPreference");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryApplicationPreferenceID != null) this.entryApplicationPreferenceID = (data.EntryApplicationPreferenceID != null ? parseInt(data.EntryApplicationPreferenceID, 10) : data.EntryApplicationPreferenceID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.PreferenceID != null) this.preferenceID = (data.PreferenceID != null ? parseInt(data.PreferenceID, 10) : data.PreferenceID);
    if (data.Preference != null) this.preference = (data.Preference != null ? parseInt(data.Preference, 10) : data.Preference);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryApplicationPreference by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryApplicationPreference to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryApplicationPreference object or null (if id) or an array of EntryApplicationPreference objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryApplicationPreference | null>;
  static async select(param: Partial<Record<keyof EntryApplicationPreference, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryApplicationPreference[]>;
  static async select(param: number | Partial<Record<keyof EntryApplicationPreference, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryApplicationPreference | EntryApplicationPreference[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationPreference/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationPreference`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryApplicationPreference with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryApplicationPreference(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryApplicationPreference(entry));
      }
    }
  }
}

EntryApplicationPreference satisfies StarRezStructureStatic<EntryApplicationPreference>
