// Generated from XML description of EntryParcel

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryParcel {
  entryParcelID?: number;
  entryID?: number;
  parcelTypeID?: number;
  shippingTypeID?: number;
  addressTypeID?: number;
  parcelStatusEnum?: unknown;
  electronicIdentityTypeID?: number;
  electronicIdentity?: string;
  description?: string;
  trackingNumber?: string;
  receiptDate?: Date | null;
  issueDate?: Date | null;
  comments?: string;
  customBit1?: boolean;
  customBit2?: boolean;
  customString1?: string;
  customString2?: string;
  customString3?: string;
  customString4?: string;
  customString5?: string;
  customString6?: string;
  customDate1?: Date | null;
  customDate2?: Date | null;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryParcel");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryParcelID != null) this.entryParcelID = (data.EntryParcelID != null ? parseInt(data.EntryParcelID, 10) : data.EntryParcelID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ParcelTypeID != null) this.parcelTypeID = (data.ParcelTypeID != null ? parseInt(data.ParcelTypeID, 10) : data.ParcelTypeID);
    if (data.ShippingTypeID != null) this.shippingTypeID = (data.ShippingTypeID != null ? parseInt(data.ShippingTypeID, 10) : data.ShippingTypeID);
    if (data.AddressTypeID != null) this.addressTypeID = (data.AddressTypeID != null ? parseInt(data.AddressTypeID, 10) : data.AddressTypeID);
    if (data.ParcelStatusEnum != null) this.parcelStatusEnum = data.ParcelStatusEnum;
    if (data.ElectronicIdentityTypeID != null) this.electronicIdentityTypeID = (data.ElectronicIdentityTypeID != null ? parseInt(data.ElectronicIdentityTypeID, 10) : data.ElectronicIdentityTypeID);
    if (data.ElectronicIdentity != null) this.electronicIdentity = data.ElectronicIdentity;
    if (data.Description != null) this.description = data.Description;
    if (data.TrackingNumber != null) this.trackingNumber = data.TrackingNumber;
    if (data.ReceiptDate != null) this.receiptDate = (data.ReceiptDate != null ? new Date(data.ReceiptDate) : data.ReceiptDate);
    if (data.IssueDate != null) this.issueDate = (data.IssueDate != null ? new Date(data.IssueDate) : data.IssueDate);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.CustomString3 != null) this.customString3 = data.CustomString3;
    if (data.CustomString4 != null) this.customString4 = data.CustomString4;
    if (data.CustomString5 != null) this.customString5 = data.CustomString5;
    if (data.CustomString6 != null) this.customString6 = data.CustomString6;
    if (data.CustomDate1 != null) this.customDate1 = (data.CustomDate1 != null ? new Date(data.CustomDate1) : data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = (data.CustomDate2 != null ? new Date(data.CustomDate2) : data.CustomDate2);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryParcel | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryParcel/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryParcel with id ${id}`);
    } else {
      return new EntryParcel(await response.text());
    }
  }
}

EntryParcel satisfies StarRezStructureStatic<EntryParcel>
