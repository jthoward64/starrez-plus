// Generated from XML description of Total

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Total {
  totalID?: number;
  entryID?: number;
  chargeGroupID?: number;
  totalCount?: number;
  totalAmount?: string;
  totalTaxAmount?: string;
  totalTaxAmount2?: string;
  totalTaxAmount3?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Total");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TotalID != null) this.totalID = (data.TotalID != null ? parseInt(data.TotalID, 10) : data.TotalID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.TotalCount != null) this.totalCount = (data.TotalCount != null ? parseInt(data.TotalCount, 10) : data.TotalCount);
    if (data.TotalAmount != null) this.totalAmount = data.TotalAmount;
    if (data.TotalTaxAmount != null) this.totalTaxAmount = data.TotalTaxAmount;
    if (data.TotalTaxAmount2 != null) this.totalTaxAmount2 = data.TotalTaxAmount2;
    if (data.TotalTaxAmount3 != null) this.totalTaxAmount3 = data.TotalTaxAmount3;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Total by its ID or by exact match on other fields.
   * @param param Either the ID of the Total to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Total object or null (if id) or an array of Total objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Total | null>;
  static async select(param: Partial<Record<keyof Total, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Total[]>;
  static async select(param: number | Partial<Record<keyof Total, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Total | Total[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Total/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Total`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Total with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Total(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Total(entry));
      }
    }
  }
}

Total satisfies StarRezStructureStatic<Total>
