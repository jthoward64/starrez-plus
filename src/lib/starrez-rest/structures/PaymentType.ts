// Generated from XML description of PaymentType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PaymentType {
  paymentTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  categoryID?: number;
  paymentMethodEnum?: unknown;
  accountReceivable_GLPostingID?: number;
  bank_GLPostingID?: number;
  refundChq?: boolean;
  groupBy?: string;
  creditCardSurcharge?: number;
  cCS_ChargeItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PaymentType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PaymentTypeID != null) this.paymentTypeID = (data.PaymentTypeID != null ? parseInt(data.PaymentTypeID, 10) : data.PaymentTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.PaymentMethodEnum != null) this.paymentMethodEnum = data.PaymentMethodEnum;
    if (data.AccountReceivable_GLPostingID != null) this.accountReceivable_GLPostingID = (data.AccountReceivable_GLPostingID != null ? parseInt(data.AccountReceivable_GLPostingID, 10) : data.AccountReceivable_GLPostingID);
    if (data.Bank_GLPostingID != null) this.bank_GLPostingID = (data.Bank_GLPostingID != null ? parseInt(data.Bank_GLPostingID, 10) : data.Bank_GLPostingID);
    if (data.RefundChq != null) this.refundChq = data.RefundChq === 'true';
    if (data.GroupBy != null) this.groupBy = data.GroupBy;
    if (data.CreditCardSurcharge != null) this.creditCardSurcharge = (data.CreditCardSurcharge != null ? parseFloat(data.CreditCardSurcharge) : data.CreditCardSurcharge);
    if (data.CCS_ChargeItemID != null) this.cCS_ChargeItemID = (data.CCS_ChargeItemID != null ? parseInt(data.CCS_ChargeItemID, 10) : data.CCS_ChargeItemID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a PaymentType by its ID or by exact match on other fields.
   * @param param Either the ID of the PaymentType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PaymentType object or null (if id) or an array of PaymentType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PaymentType | null>;
  static async select(param: Partial<Record<keyof PaymentType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PaymentType[]>;
  static async select(param: number | Partial<Record<keyof PaymentType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PaymentType | PaymentType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PaymentType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PaymentType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PaymentType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PaymentType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PaymentType(entry));
      }
    }
  }
}

PaymentType satisfies StarRezStructureStatic<PaymentType>
