// Generated from XML description of EntryAddress

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

    if (data.EntryAddressID != null) this.entryAddressID = (data.EntryAddressID != null ? parseInt(data.EntryAddressID, 10) : data.EntryAddressID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.AddressTypeID != null) this.addressTypeID = (data.AddressTypeID != null ? parseInt(data.AddressTypeID, 10) : data.AddressTypeID);
    if (data.Salutation != null) this.salutation = data.Salutation;
    if (data.ContactName != null) this.contactName = data.ContactName;
    if (data.ContactName2 != null) this.contactName2 = data.ContactName2;
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
    if (data.Relationship != null) this.relationship = data.Relationship;
    if (data.ActiveDateStart != null) this.activeDateStart = (data.ActiveDateStart != null ? new Date(data.ActiveDateStart) : data.ActiveDateStart);
    if (data.ActiveDateEnd != null) this.activeDateEnd = (data.ActiveDateEnd != null ? new Date(data.ActiveDateEnd) : data.ActiveDateEnd);
    if (data.Reference != null) this.reference = data.Reference;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryAddress by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryAddress to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryAddress object or null (if id) or an array of EntryAddress objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryAddress | null>;
  static async select(param: Partial<Record<keyof EntryAddress, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryAddress[]>;
  static async select(param: number | Partial<Record<keyof EntryAddress, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryAddress | EntryAddress[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryAddress/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryAddress`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryAddress with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryAddress(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryAddress(entry));
      }
    }
  }
}

EntryAddress satisfies StarRezStructureStatic<EntryAddress>
