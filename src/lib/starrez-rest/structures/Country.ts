// Generated from XML description of Country

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Country {
  countryID?: number;
  description?: string;
  abbreviation?: string;
  threeLetterCode?: string;
  regionOfBirthID?: number;
  nationalityID?: number;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Country");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CountryID != null) this.countryID = (data.CountryID != null ? parseInt(data.CountryID, 10) : data.CountryID);
    if (data.Description != null) this.description = data.Description;
    if (data.Abbreviation != null) this.abbreviation = data.Abbreviation;
    if (data.ThreeLetterCode != null) this.threeLetterCode = data.ThreeLetterCode;
    if (data.RegionOfBirthID != null) this.regionOfBirthID = (data.RegionOfBirthID != null ? parseInt(data.RegionOfBirthID, 10) : data.RegionOfBirthID);
    if (data.NationalityID != null) this.nationalityID = (data.NationalityID != null ? parseInt(data.NationalityID, 10) : data.NationalityID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Country by its ID or by exact match on other fields.
   * @param param Either the ID of the Country to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Country object or null (if id) or an array of Country objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Country | null>;
  static async select(param: Partial<Record<keyof Country, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Country[]>;
  static async select(param: number | Partial<Record<keyof Country, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Country | Country[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Country/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Country`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Country with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Country(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Country(entry));
      }
    }
  }
}

Country satisfies StarRezStructureStatic<Country>
