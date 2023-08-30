// Generated from XML description of EntryAddress

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryAddress {
  entryAddressID?: number;
  entryID?: number;
  addressTypeID?: number;
  salutation?: string;
  contactName?: string;
  contactName2?: string;
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
  relationship?: string;
  activeDateStart?: Date | null;
  activeDateEnd?: Date | null;
  reference?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryAddress");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryAddressID != null) this.entryAddressID = parseInt(data.EntryAddressID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.AddressTypeID != null) this.addressTypeID = parseInt(data.AddressTypeID, 10);
    if (data.Salutation != null) this.salutation = data.Salutation;
    if (data.ContactName != null) this.contactName = data.ContactName;
    if (data.ContactName2 != null) this.contactName2 = data.ContactName2;
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
    if (data.Relationship != null) this.relationship = data.Relationship;
    if (data.ActiveDateStart != null) this.activeDateStart = new Date(data.ActiveDateStart);
    if (data.ActiveDateEnd != null) this.activeDateEnd = new Date(data.ActiveDateEnd);
    if (data.Reference != null) this.reference = data.Reference;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryAddress | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryAddress/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryAddress with id ${id}`);
    } else {
      return new EntryAddress(await response.text());
    }
  }
}

EntryAddress satisfies StarRezStructureStatic<EntryAddress>
