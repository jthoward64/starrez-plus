// Generated from XML description of Invoice

import { starRezXmlToJson } from "../parsing.js";

export class Invoice {
  invoiceID?: number;
  invoiceTypeEnum?: unknown;
  entryID?: number;
  description?: string;
  invoiceFromDate?: Date | null;
  invoiceToDate?: Date;
  invoiceDate?: Date;
  dueDate?: Date;
  previousBalance?: string;
  invoiceTotal?: string;
  invoiceTaxTotal?: string;
  invoiceBalance?: string;
  discountDate?: Date;
  discountTotal?: string;
  chargeGroupList?: string;
  entryName?: string;
  category_Description?: string;
  roomSpace_Description?: string;
  electronicIdentity?: string;
  accountCode?: string;
  accountDueDate?: Date;
  accountDue?: boolean;
  iD1?: string;
  addressSalutation?: string;
  addressContactName?: string;
  addressStreet?: string;
  addressStreet2?: string;
  addressCity?: string;
  addressCountry?: string;
  addressStateProvince?: string;
  addressZipPostcode?: string;
  comments?: string;
  machineName?: string;
  externalNumber?: string;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Invoice");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.InvoiceID != null) this.invoiceID = parseInt(data.InvoiceID, 10);
    if (data.InvoiceTypeEnum != null) this.invoiceTypeEnum = data.InvoiceTypeEnum;
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.InvoiceFromDate != null) this.invoiceFromDate = new Date(data.InvoiceFromDate);
    if (data.InvoiceToDate != null) this.invoiceToDate = new Date(data.InvoiceToDate);
    if (data.InvoiceDate != null) this.invoiceDate = new Date(data.InvoiceDate);
    if (data.DueDate != null) this.dueDate = new Date(data.DueDate);
    if (data.PreviousBalance != null) this.previousBalance = data.PreviousBalance;
    if (data.InvoiceTotal != null) this.invoiceTotal = data.InvoiceTotal;
    if (data.InvoiceTaxTotal != null) this.invoiceTaxTotal = data.InvoiceTaxTotal;
    if (data.InvoiceBalance != null) this.invoiceBalance = data.InvoiceBalance;
    if (data.DiscountDate != null) this.discountDate = new Date(data.DiscountDate);
    if (data.DiscountTotal != null) this.discountTotal = data.DiscountTotal;
    if (data.ChargeGroupList != null) this.chargeGroupList = data.ChargeGroupList;
    if (data.EntryName != null) this.entryName = data.EntryName;
    if (data.Category_Description != null) this.category_Description = data.Category_Description;
    if (data.RoomSpace_Description != null) this.roomSpace_Description = data.RoomSpace_Description;
    if (data.ElectronicIdentity != null) this.electronicIdentity = data.ElectronicIdentity;
    if (data.AccountCode != null) this.accountCode = data.AccountCode;
    if (data.AccountDueDate != null) this.accountDueDate = new Date(data.AccountDueDate);
    if (data.AccountDue != null) this.accountDue = data.AccountDue === 'true';
    if (data.ID1 != null) this.iD1 = data.ID1;
    if (data.AddressSalutation != null) this.addressSalutation = data.AddressSalutation;
    if (data.AddressContactName != null) this.addressContactName = data.AddressContactName;
    if (data.AddressStreet != null) this.addressStreet = data.AddressStreet;
    if (data.AddressStreet2 != null) this.addressStreet2 = data.AddressStreet2;
    if (data.AddressCity != null) this.addressCity = data.AddressCity;
    if (data.AddressCountry != null) this.addressCountry = data.AddressCountry;
    if (data.AddressStateProvince != null) this.addressStateProvince = data.AddressStateProvince;
    if (data.AddressZipPostcode != null) this.addressZipPostcode = data.AddressZipPostcode;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.MachineName != null) this.machineName = data.MachineName;
    if (data.ExternalNumber != null) this.externalNumber = data.ExternalNumber;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
