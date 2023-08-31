// Generated from XML description of Country

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Country | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Country/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Country with id ${id}`);
    } else {
      return new Country(await response.text());
    }
  }
}

Country satisfies StarRezStructureStatic<Country>
