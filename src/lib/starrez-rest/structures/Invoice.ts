// Generated from XML description of Invoice

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.InvoiceID != null) this.invoiceID = (data.InvoiceID != null ? parseInt(data.InvoiceID, 10) : data.InvoiceID);
    if (data.InvoiceTypeEnum != null) this.invoiceTypeEnum = data.InvoiceTypeEnum;
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.Description != null) this.description = data.Description;
    if (data.InvoiceFromDate != null) this.invoiceFromDate = (data.InvoiceFromDate != null ? new Date(data.InvoiceFromDate) : data.InvoiceFromDate);
    if (data.InvoiceToDate != null) this.invoiceToDate = (data.InvoiceToDate != null ? new Date(data.InvoiceToDate) : data.InvoiceToDate);
    if (data.InvoiceDate != null) this.invoiceDate = (data.InvoiceDate != null ? new Date(data.InvoiceDate) : data.InvoiceDate);
    if (data.DueDate != null) this.dueDate = (data.DueDate != null ? new Date(data.DueDate) : data.DueDate);
    if (data.PreviousBalance != null) this.previousBalance = data.PreviousBalance;
    if (data.InvoiceTotal != null) this.invoiceTotal = data.InvoiceTotal;
    if (data.InvoiceTaxTotal != null) this.invoiceTaxTotal = data.InvoiceTaxTotal;
    if (data.InvoiceBalance != null) this.invoiceBalance = data.InvoiceBalance;
    if (data.DiscountDate != null) this.discountDate = (data.DiscountDate != null ? new Date(data.DiscountDate) : data.DiscountDate);
    if (data.DiscountTotal != null) this.discountTotal = data.DiscountTotal;
    if (data.ChargeGroupList != null) this.chargeGroupList = data.ChargeGroupList;
    if (data.EntryName != null) this.entryName = data.EntryName;
    if (data.Category_Description != null) this.category_Description = data.Category_Description;
    if (data.RoomSpace_Description != null) this.roomSpace_Description = data.RoomSpace_Description;
    if (data.ElectronicIdentity != null) this.electronicIdentity = data.ElectronicIdentity;
    if (data.AccountCode != null) this.accountCode = data.AccountCode;
    if (data.AccountDueDate != null) this.accountDueDate = (data.AccountDueDate != null ? new Date(data.AccountDueDate) : data.AccountDueDate);
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
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Invoice | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Invoice/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Invoice with id ${id}`);
    } else {
      return new Invoice(await response.text());
    }
  }
}

Invoice satisfies StarRezStructureStatic<Invoice>
