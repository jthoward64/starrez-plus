// Generated from XML description of EntryFamily

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryFamily {
  entryFamilyID?: number;
  entryID?: number;
  entryFamilyName?: string;
  dOB?: Date | null;
  relationship?: string;
  genderEnum?: unknown;
  related_EntryID?: number;
  resident?: boolean;
  grade?: string;
  school?: string;
  country?: string;
  occupation?: string;
  deceased?: boolean;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryFamily");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryFamilyID != null) this.entryFamilyID = (data.EntryFamilyID != null ? parseInt(data.EntryFamilyID, 10) : data.EntryFamilyID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.EntryFamilyName != null) this.entryFamilyName = data.EntryFamilyName;
    if (data.DOB != null) this.dOB = (data.DOB != null ? new Date(data.DOB) : data.DOB);
    if (data.Relationship != null) this.relationship = data.Relationship;
    if (data.GenderEnum != null) this.genderEnum = data.GenderEnum;
    if (data.Related_EntryID != null) this.related_EntryID = (data.Related_EntryID != null ? parseInt(data.Related_EntryID, 10) : data.Related_EntryID);
    if (data.Resident != null) this.resident = data.Resident === 'true';
    if (data.Grade != null) this.grade = data.Grade;
    if (data.School != null) this.school = data.School;
    if (data.Country != null) this.country = data.Country;
    if (data.Occupation != null) this.occupation = data.Occupation;
    if (data.Deceased != null) this.deceased = data.Deceased === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryFamily by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryFamily to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryFamily object or null (if id) or an array of EntryFamily objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryFamily | null>;
  static async select(param: Partial<Record<keyof EntryFamily, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryFamily[]>;
  static async select(param: number | Partial<Record<keyof EntryFamily, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryFamily | EntryFamily[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryFamily/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryFamily`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryFamily with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryFamily(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryFamily(entry));
      }
    }
  }
}

EntryFamily satisfies StarRezStructureStatic<EntryFamily>
