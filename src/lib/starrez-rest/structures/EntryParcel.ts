// Generated from XML description of EntryParcel

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.EntryParcelID != null) this.entryParcelID = parseInt(data.EntryParcelID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ParcelTypeID != null) this.parcelTypeID = parseInt(data.ParcelTypeID, 10);
    if (data.ShippingTypeID != null) this.shippingTypeID = parseInt(data.ShippingTypeID, 10);
    if (data.AddressTypeID != null) this.addressTypeID = parseInt(data.AddressTypeID, 10);
    if (data.ParcelStatusEnum != null) this.parcelStatusEnum = data.ParcelStatusEnum;
    if (data.ElectronicIdentityTypeID != null) this.electronicIdentityTypeID = parseInt(data.ElectronicIdentityTypeID, 10);
    if (data.ElectronicIdentity != null) this.electronicIdentity = data.ElectronicIdentity;
    if (data.Description != null) this.description = data.Description;
    if (data.TrackingNumber != null) this.trackingNumber = data.TrackingNumber;
    if (data.ReceiptDate != null) this.receiptDate = new Date(data.ReceiptDate);
    if (data.IssueDate != null) this.issueDate = new Date(data.IssueDate);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.CustomString3 != null) this.customString3 = data.CustomString3;
    if (data.CustomString4 != null) this.customString4 = data.CustomString4;
    if (data.CustomString5 != null) this.customString5 = data.CustomString5;
    if (data.CustomString6 != null) this.customString6 = data.CustomString6;
    if (data.CustomDate1 != null) this.customDate1 = new Date(data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = new Date(data.CustomDate2);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryParcel | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryParcel/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryParcel with id ${id}`);
    } else {
      return new EntryParcel(await response.text());
    }
}

}
