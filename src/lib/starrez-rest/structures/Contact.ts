// Generated from XML description of Contact

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Contact {
  contactID?: number;
  recordTypeEnum?: unknown;
  contactTypeEnum?: unknown;
  contactStatusID?: number;
  categoryID?: number;
  taxExemptionEnum?: unknown;
  description?: string;
  street?: string;
  street2?: string;
  city?: string;
  countryID?: number;
  stateProvince?: string;
  zipPostcode?: string;
  entryID?: number;
  phone?: string;
  phoneMobileCell?: string;
  phoneOther?: string;
  phoneOther2?: string;
  email?: string;
  reference?: string;
  accountCode?: string;
  accountComments?: string;
  account_PaymentTypeID?: number;
  accountBankName?: any;
  accountBankNumber?: any;
  accountDetail1?: any;
  accountDetail2?: any;
  accountDetail3?: any;
  accountDetail4?: any;
  comments?: string;
  securityUserID?: number;
  dateCreated?: Date;
  timestamp?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Contact");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ContactID != null) this.contactID = (data.ContactID != null ? parseInt(data.ContactID, 10) : data.ContactID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.ContactTypeEnum != null) this.contactTypeEnum = data.ContactTypeEnum;
    if (data.ContactStatusID != null) this.contactStatusID = (data.ContactStatusID != null ? parseInt(data.ContactStatusID, 10) : data.ContactStatusID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.TaxExemptionEnum != null) this.taxExemptionEnum = data.TaxExemptionEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Street != null) this.street = data.Street;
    if (data.Street2 != null) this.street2 = data.Street2;
    if (data.City != null) this.city = data.City;
    if (data.CountryID != null) this.countryID = (data.CountryID != null ? parseInt(data.CountryID, 10) : data.CountryID);
    if (data.StateProvince != null) this.stateProvince = data.StateProvince;
    if (data.ZipPostcode != null) this.zipPostcode = data.ZipPostcode;
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.Phone != null) this.phone = data.Phone;
    if (data.PhoneMobileCell != null) this.phoneMobileCell = data.PhoneMobileCell;
    if (data.PhoneOther != null) this.phoneOther = data.PhoneOther;
    if (data.PhoneOther2 != null) this.phoneOther2 = data.PhoneOther2;
    if (data.Email != null) this.email = data.Email;
    if (data.Reference != null) this.reference = data.Reference;
    if (data.AccountCode != null) this.accountCode = data.AccountCode;
    if (data.AccountComments != null) this.accountComments = data.AccountComments;
    if (data.Account_PaymentTypeID != null) this.account_PaymentTypeID = (data.Account_PaymentTypeID != null ? parseInt(data.Account_PaymentTypeID, 10) : data.Account_PaymentTypeID);
    if (data.AccountBankName != null) this.accountBankName = data.AccountBankName;
    if (data.AccountBankNumber != null) this.accountBankNumber = data.AccountBankNumber;
    if (data.AccountDetail1 != null) this.accountDetail1 = data.AccountDetail1;
    if (data.AccountDetail2 != null) this.accountDetail2 = data.AccountDetail2;
    if (data.AccountDetail3 != null) this.accountDetail3 = data.AccountDetail3;
    if (data.AccountDetail4 != null) this.accountDetail4 = data.AccountDetail4;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.timestamp != null) this.timestamp = (data.timestamp != null ? new Date(data.timestamp) : data.timestamp);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Contact by its ID or by exact match on other fields.
   * @param param Either the ID of the Contact to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Contact object or null (if id) or an array of Contact objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Contact | null>;
  static async select(param: Partial<Record<keyof Contact, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Contact[]>;
  static async select(param: number | Partial<Record<keyof Contact, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Contact | Contact[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Contact/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Contact`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Contact with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Contact(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Contact(entry));
      }
    }
  }
}

Contact satisfies StarRezStructureStatic<Contact>
