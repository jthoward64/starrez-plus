// Generated from XML description of FinancialSupport

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FinancialSupport {
  financialSupportID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FinancialSupport");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FinancialSupportID != null) this.financialSupportID = (data.FinancialSupportID != null ? parseInt(data.FinancialSupportID, 10) : data.FinancialSupportID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a FinancialSupport by its ID or by exact match on other fields.
   * @param param Either the ID of the FinancialSupport to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single FinancialSupport object or null (if id) or an array of FinancialSupport objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<FinancialSupport | null>;
  static async select(param: Partial<Record<keyof FinancialSupport, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FinancialSupport[]>;
  static async select(param: number | Partial<Record<keyof FinancialSupport, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<FinancialSupport | FinancialSupport[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FinancialSupport/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FinancialSupport`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FinancialSupport with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new FinancialSupport(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new FinancialSupport(entry));
      }
    }
  }
}

FinancialSupport satisfies StarRezStructureStatic<FinancialSupport>
