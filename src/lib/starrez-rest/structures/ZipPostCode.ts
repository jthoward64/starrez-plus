// Generated from XML description of ZipPostCode

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ZipPostCode {
  zipPostCodeID?: number;
  zipPostCode?: string;
  postCodeSort?: number;
  locality?: string;
  stateProvince?: string;
  countryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ZipPostCode");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ZipPostCodeID != null) this.zipPostCodeID = (data.ZipPostCodeID != null ? parseInt(data.ZipPostCodeID, 10) : data.ZipPostCodeID);
    if (data.ZipPostCode != null) this.zipPostCode = data.ZipPostCode;
    if (data.PostCodeSort != null) this.postCodeSort = (data.PostCodeSort != null ? parseInt(data.PostCodeSort, 10) : data.PostCodeSort);
    if (data.Locality != null) this.locality = data.Locality;
    if (data.StateProvince != null) this.stateProvince = data.StateProvince;
    if (data.CountryID != null) this.countryID = (data.CountryID != null ? parseInt(data.CountryID, 10) : data.CountryID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a ZipPostCode by its ID or by exact match on other fields.
   * @param param Either the ID of the ZipPostCode to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ZipPostCode object or null (if id) or an array of ZipPostCode objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ZipPostCode | null>;
  static async select(param: Partial<Record<keyof ZipPostCode, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ZipPostCode[]>;
  static async select(param: number | Partial<Record<keyof ZipPostCode, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ZipPostCode | ZipPostCode[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ZipPostCode/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ZipPostCode`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ZipPostCode with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ZipPostCode(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ZipPostCode(entry));
      }
    }
  }
}

ZipPostCode satisfies StarRezStructureStatic<ZipPostCode>
