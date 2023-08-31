// Generated from XML description of NoVisitorPeriod

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class NoVisitorPeriod {
  noVisitorPeriodID?: number;
  description?: string;
  noVisitorStartDate?: Date;
  noVisitorEndDate?: Date;
  enabled?: boolean;
  recordTypeEnum?: unknown;
  visitorTypeID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "NoVisitorPeriod");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.NoVisitorPeriodID != null) this.noVisitorPeriodID = (data.NoVisitorPeriodID != null ? parseInt(data.NoVisitorPeriodID, 10) : data.NoVisitorPeriodID);
    if (data.Description != null) this.description = data.Description;
    if (data.NoVisitorStartDate != null) this.noVisitorStartDate = (data.NoVisitorStartDate != null ? new Date(data.NoVisitorStartDate) : data.NoVisitorStartDate);
    if (data.NoVisitorEndDate != null) this.noVisitorEndDate = (data.NoVisitorEndDate != null ? new Date(data.NoVisitorEndDate) : data.NoVisitorEndDate);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.VisitorTypeID != null) this.visitorTypeID = (data.VisitorTypeID != null ? parseInt(data.VisitorTypeID, 10) : data.VisitorTypeID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a NoVisitorPeriod by its ID or by exact match on other fields.
   * @param param Either the ID of the NoVisitorPeriod to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single NoVisitorPeriod object or null (if id) or an array of NoVisitorPeriod objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<NoVisitorPeriod | null>;
  static async select(param: Partial<Record<keyof NoVisitorPeriod, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<NoVisitorPeriod[]>;
  static async select(param: number | Partial<Record<keyof NoVisitorPeriod, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<NoVisitorPeriod | NoVisitorPeriod[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/NoVisitorPeriod/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/NoVisitorPeriod`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch NoVisitorPeriod with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new NoVisitorPeriod(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new NoVisitorPeriod(entry));
      }
    }
  }
}

NoVisitorPeriod satisfies StarRezStructureStatic<NoVisitorPeriod>
