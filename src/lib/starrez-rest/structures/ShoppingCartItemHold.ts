// Generated from XML description of ShoppingCartItemHold

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.ShoppingCartItemHoldID != null) this.shoppingCartItemHoldID = (data.ShoppingCartItemHoldID != null ? parseInt(data.ShoppingCartItemHoldID, 10) : data.ShoppingCartItemHoldID);
    if (data.ShoppingCartItemID != null) this.shoppingCartItemID = (data.ShoppingCartItemID != null ? parseInt(data.ShoppingCartItemID, 10) : data.ShoppingCartItemID);
    if (data.WebPaymentID != null) this.webPaymentID = (data.WebPaymentID != null ? parseInt(data.WebPaymentID, 10) : data.WebPaymentID);
    if (data.Hold != null) this.hold = data.Hold === 'true';
    if (data.Hold_EntryID != null) this.hold_EntryID = (data.Hold_EntryID != null ? parseInt(data.Hold_EntryID, 10) : data.Hold_EntryID);
    if (data.HoldDateTime_Expire != null) this.holdDateTime_Expire = (data.HoldDateTime_Expire != null ? new Date(data.HoldDateTime_Expire) : data.HoldDateTime_Expire);
    if (data.Purchased != null) this.purchased = data.Purchased === 'true';
    if (data.Type != null) this.type = (data.Type != null ? parseInt(data.Type, 10) : data.Type);
    if (data.Data != null) this.data = data.Data;
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
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
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a ShoppingCartItemHold by its ID or by exact match on other fields.
   * @param param Either the ID of the ShoppingCartItemHold to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ShoppingCartItemHold object or null (if id) or an array of ShoppingCartItemHold objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ShoppingCartItemHold | null>;
  static async select(param: Partial<Record<keyof ShoppingCartItemHold, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ShoppingCartItemHold[]>;
  static async select(param: number | Partial<Record<keyof ShoppingCartItemHold, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ShoppingCartItemHold | ShoppingCartItemHold[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ShoppingCartItemHold/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ShoppingCartItemHold`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ShoppingCartItemHold with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ShoppingCartItemHold(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ShoppingCartItemHold(entry));
      }
    }
  }
}

ShoppingCartItemHold satisfies StarRezStructureStatic<ShoppingCartItemHold>
