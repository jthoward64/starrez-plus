// Generated from XML description of ZipPostCode

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.ZipPostCodeID != null) this.zipPostCodeID = parseInt(data.ZipPostCodeID, 10);
    if (data.ZipPostCode != null) this.zipPostCode = data.ZipPostCode;
    if (data.PostCodeSort != null) this.postCodeSort = parseInt(data.PostCodeSort, 10);
    if (data.Locality != null) this.locality = data.Locality;
    if (data.StateProvince != null) this.stateProvince = data.StateProvince;
    if (data.CountryID != null) this.countryID = parseInt(data.CountryID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
