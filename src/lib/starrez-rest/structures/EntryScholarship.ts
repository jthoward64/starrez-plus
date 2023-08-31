// Generated from XML description of EntryScholarship

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryScholarship {
  entryScholarshipID?: number;
  entryID?: number;
  scholarshipType?: string;
  scholarshipDateStart?: Date | null;
  scholarshipDateEnd?: Date | null;
  scholarshipName?: string;
  description?: string;
  amount?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryScholarship");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryScholarshipID != null) this.entryScholarshipID = (data.EntryScholarshipID != null ? parseInt(data.EntryScholarshipID, 10) : data.EntryScholarshipID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ScholarshipType != null) this.scholarshipType = data.ScholarshipType;
    if (data.ScholarshipDateStart != null) this.scholarshipDateStart = (data.ScholarshipDateStart != null ? new Date(data.ScholarshipDateStart) : data.ScholarshipDateStart);
    if (data.ScholarshipDateEnd != null) this.scholarshipDateEnd = (data.ScholarshipDateEnd != null ? new Date(data.ScholarshipDateEnd) : data.ScholarshipDateEnd);
    if (data.ScholarshipName != null) this.scholarshipName = data.ScholarshipName;
    if (data.Description != null) this.description = data.Description;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryScholarship by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryScholarship to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryScholarship object or null (if id) or an array of EntryScholarship objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryScholarship | null>;
  static async select(param: Partial<Record<keyof EntryScholarship, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryScholarship[]>;
  static async select(param: number | Partial<Record<keyof EntryScholarship, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryScholarship | EntryScholarship[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryScholarship/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryScholarship`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryScholarship with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryScholarship(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryScholarship(entry));
      }
    }
  }
}

EntryScholarship satisfies StarRezStructureStatic<EntryScholarship>
