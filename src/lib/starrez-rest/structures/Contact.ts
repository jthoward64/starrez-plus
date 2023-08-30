// Generated from XML description of Contact

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.ContactID != null) this.contactID = parseInt(data.ContactID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.ContactTypeEnum != null) this.contactTypeEnum = data.ContactTypeEnum;
    if (data.ContactStatusID != null) this.contactStatusID = parseInt(data.ContactStatusID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.TaxExemptionEnum != null) this.taxExemptionEnum = data.TaxExemptionEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Street != null) this.street = data.Street;
    if (data.Street2 != null) this.street2 = data.Street2;
    if (data.City != null) this.city = data.City;
    if (data.CountryID != null) this.countryID = parseInt(data.CountryID, 10);
    if (data.StateProvince != null) this.stateProvince = data.StateProvince;
    if (data.ZipPostcode != null) this.zipPostcode = data.ZipPostcode;
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.Phone != null) this.phone = data.Phone;
    if (data.PhoneMobileCell != null) this.phoneMobileCell = data.PhoneMobileCell;
    if (data.PhoneOther != null) this.phoneOther = data.PhoneOther;
    if (data.PhoneOther2 != null) this.phoneOther2 = data.PhoneOther2;
    if (data.Email != null) this.email = data.Email;
    if (data.Reference != null) this.reference = data.Reference;
    if (data.AccountCode != null) this.accountCode = data.AccountCode;
    if (data.AccountComments != null) this.accountComments = data.AccountComments;
    if (data.Account_PaymentTypeID != null) this.account_PaymentTypeID = parseInt(data.Account_PaymentTypeID, 10);
    if (data.AccountBankName != null) this.accountBankName = data.AccountBankName;
    if (data.AccountBankNumber != null) this.accountBankNumber = data.AccountBankNumber;
    if (data.AccountDetail1 != null) this.accountDetail1 = data.AccountDetail1;
    if (data.AccountDetail2 != null) this.accountDetail2 = data.AccountDetail2;
    if (data.AccountDetail3 != null) this.accountDetail3 = data.AccountDetail3;
    if (data.AccountDetail4 != null) this.accountDetail4 = data.AccountDetail4;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.timestamp != null) this.timestamp = new Date(data.timestamp);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
