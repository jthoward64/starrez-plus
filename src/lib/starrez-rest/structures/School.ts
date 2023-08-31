// Generated from XML description of School

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class School {
  schoolID?: number;
  description?: string;
  schoolType?: string;
  location?: string;
  geographicLocation?: string;
  comments?: string;
  contactName?: string;
  street?: string;
  street2?: string;
  city?: string;
  countryID?: number;
  stateProvince?: string;
  zipPostcode?: string;
  phone?: string;
  phoneMobileCell?: string;
  phoneOther?: string;
  phoneOther2?: string;
  email?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "School");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.SchoolID != null) this.schoolID = (data.SchoolID != null ? parseInt(data.SchoolID, 10) : data.SchoolID);
    if (data.Description != null) this.description = data.Description;
    if (data.SchoolType != null) this.schoolType = data.SchoolType;
    if (data.Location != null) this.location = data.Location;
    if (data.GeographicLocation != null) this.geographicLocation = data.GeographicLocation;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ContactName != null) this.contactName = data.ContactName;
    if (data.Street != null) this.street = data.Street;
    if (data.Street2 != null) this.street2 = data.Street2;
    if (data.City != null) this.city = data.City;
    if (data.CountryID != null) this.countryID = (data.CountryID != null ? parseInt(data.CountryID, 10) : data.CountryID);
    if (data.StateProvince != null) this.stateProvince = data.StateProvince;
    if (data.ZipPostcode != null) this.zipPostcode = data.ZipPostcode;
    if (data.Phone != null) this.phone = data.Phone;
    if (data.PhoneMobileCell != null) this.phoneMobileCell = data.PhoneMobileCell;
    if (data.PhoneOther != null) this.phoneOther = data.PhoneOther;
    if (data.PhoneOther2 != null) this.phoneOther2 = data.PhoneOther2;
    if (data.Email != null) this.email = data.Email;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a School by its ID or by exact match on other fields.
   * @param param Either the ID of the School to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single School object or null (if id) or an array of School objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<School | null>;
  static async select(param: Partial<Record<keyof School, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<School[]>;
  static async select(param: number | Partial<Record<keyof School, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<School | School[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/School/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/School`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch School with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new School(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new School(entry));
      }
    }
  }
}

School satisfies StarRezStructureStatic<School>
