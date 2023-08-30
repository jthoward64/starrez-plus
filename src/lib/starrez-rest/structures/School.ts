// Generated from XML description of School

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.SchoolID != null) this.schoolID = parseInt(data.SchoolID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.SchoolType != null) this.schoolType = data.SchoolType;
    if (data.Location != null) this.location = data.Location;
    if (data.GeographicLocation != null) this.geographicLocation = data.GeographicLocation;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ContactName != null) this.contactName = data.ContactName;
    if (data.Street != null) this.street = data.Street;
    if (data.Street2 != null) this.street2 = data.Street2;
    if (data.City != null) this.city = data.City;
    if (data.CountryID != null) this.countryID = parseInt(data.CountryID, 10);
    if (data.StateProvince != null) this.stateProvince = data.StateProvince;
    if (data.ZipPostcode != null) this.zipPostcode = data.ZipPostcode;
    if (data.Phone != null) this.phone = data.Phone;
    if (data.PhoneMobileCell != null) this.phoneMobileCell = data.PhoneMobileCell;
    if (data.PhoneOther != null) this.phoneOther = data.PhoneOther;
    if (data.PhoneOther2 != null) this.phoneOther2 = data.PhoneOther2;
    if (data.Email != null) this.email = data.Email;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
