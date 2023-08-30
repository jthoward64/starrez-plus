// Generated from XML description of Country

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.CountryID != null) this.countryID = parseInt(data.CountryID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Abbreviation != null) this.abbreviation = data.Abbreviation;
    if (data.ThreeLetterCode != null) this.threeLetterCode = data.ThreeLetterCode;
    if (data.RegionOfBirthID != null) this.regionOfBirthID = parseInt(data.RegionOfBirthID, 10);
    if (data.NationalityID != null) this.nationalityID = parseInt(data.NationalityID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
