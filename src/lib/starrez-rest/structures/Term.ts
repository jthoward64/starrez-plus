// Generated from XML description of Term

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Term {
  termID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  webDescription?: string;
  categoryID?: number;
  termCode?: string;
  termTypeID?: number;
  active?: boolean;
  activeDateOpen?: Date | null;
  activeDateClose?: Date | null;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Term");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TermID != null) this.termID = (data.TermID != null ? parseInt(data.TermID, 10) : data.TermID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.TermCode != null) this.termCode = data.TermCode;
    if (data.TermTypeID != null) this.termTypeID = (data.TermTypeID != null ? parseInt(data.TermTypeID, 10) : data.TermTypeID);
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.ActiveDateOpen != null) this.activeDateOpen = (data.ActiveDateOpen != null ? new Date(data.ActiveDateOpen) : data.ActiveDateOpen);
    if (data.ActiveDateClose != null) this.activeDateClose = (data.ActiveDateClose != null ? new Date(data.ActiveDateClose) : data.ActiveDateClose);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Term by its ID or by exact match on other fields.
   * @param param Either the ID of the Term to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Term object or null (if id) or an array of Term objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Term | null>;
  static async select(param: Partial<Record<keyof Term, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Term[]>;
  static async select(param: number | Partial<Record<keyof Term, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Term | Term[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Term/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Term`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Term with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Term(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Term(entry));
      }
    }
  }
}

Term satisfies StarRezStructureStatic<Term>
