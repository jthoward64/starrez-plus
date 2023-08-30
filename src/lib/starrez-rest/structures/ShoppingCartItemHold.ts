// Generated from XML description of ShoppingCartItemHold

import { starRezXmlToJson } from "../parsing.js";

export class ShoppingCartItemHold {
  shoppingCartItemHoldID?: number;
  shoppingCartItemID?: number;
  webPaymentID?: number;
  hold?: boolean;
  hold_EntryID?: number;
  holdDateTime_Expire?: Date;
  purchased?: boolean;
  type?: number;
  data?: string;
  termSessionID?: number;
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
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ShoppingCartItemHold");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ShoppingCartItemHoldID != null) this.shoppingCartItemHoldID = parseInt(data.ShoppingCartItemHoldID, 10);
    if (data.ShoppingCartItemID != null) this.shoppingCartItemID = parseInt(data.ShoppingCartItemID, 10);
    if (data.WebPaymentID != null) this.webPaymentID = parseInt(data.WebPaymentID, 10);
    if (data.Hold != null) this.hold = data.Hold === 'true';
    if (data.Hold_EntryID != null) this.hold_EntryID = parseInt(data.Hold_EntryID, 10);
    if (data.HoldDateTime_Expire != null) this.holdDateTime_Expire = new Date(data.HoldDateTime_Expire);
    if (data.Purchased != null) this.purchased = data.Purchased === 'true';
    if (data.Type != null) this.type = parseInt(data.Type, 10);
    if (data.Data != null) this.data = data.Data;
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
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
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
