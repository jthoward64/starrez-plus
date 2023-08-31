// Generated from XML description of WebPayment

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebPayment {
  webPaymentID?: number;
  entryID?: number;
  paymentDate?: Date;
  description?: string;
  successful?: boolean;
  amount?: string;
  amountPaid?: string;
  invoiceNumber?: string;
  receiptValues?: string;
  paymentID?: number;
  requestData?: string;
  responseData?: string;
  customString1?: string;
  customString2?: string;
  processedDate?: Date | null;
  webSectionID?: number;
  source_WebModuleID?: number;
  entryApplicationID?: number;
  invoiceID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebPayment");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebPaymentID != null) this.webPaymentID = (data.WebPaymentID != null ? parseInt(data.WebPaymentID, 10) : data.WebPaymentID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.PaymentDate != null) this.paymentDate = (data.PaymentDate != null ? new Date(data.PaymentDate) : data.PaymentDate);
    if (data.Description != null) this.description = data.Description;
    if (data.Successful != null) this.successful = data.Successful === 'true';
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountPaid != null) this.amountPaid = data.AmountPaid;
    if (data.InvoiceNumber != null) this.invoiceNumber = data.InvoiceNumber;
    if (data.ReceiptValues != null) this.receiptValues = data.ReceiptValues;
    if (data.PaymentID != null) this.paymentID = (data.PaymentID != null ? parseInt(data.PaymentID, 10) : data.PaymentID);
    if (data.RequestData != null) this.requestData = data.RequestData;
    if (data.ResponseData != null) this.responseData = data.ResponseData;
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.ProcessedDate != null) this.processedDate = (data.ProcessedDate != null ? new Date(data.ProcessedDate) : data.ProcessedDate);
    if (data.WebSectionID != null) this.webSectionID = (data.WebSectionID != null ? parseInt(data.WebSectionID, 10) : data.WebSectionID);
    if (data.Source_WebModuleID != null) this.source_WebModuleID = (data.Source_WebModuleID != null ? parseInt(data.Source_WebModuleID, 10) : data.Source_WebModuleID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.InvoiceID != null) this.invoiceID = (data.InvoiceID != null ? parseInt(data.InvoiceID, 10) : data.InvoiceID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebPayment by its ID or by exact match on other fields.
   * @param param Either the ID of the WebPayment to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebPayment object or null (if id) or an array of WebPayment objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebPayment | null>;
  static async select(param: Partial<Record<keyof WebPayment, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebPayment[]>;
  static async select(param: number | Partial<Record<keyof WebPayment, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebPayment | WebPayment[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebPayment/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebPayment`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebPayment with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebPayment(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebPayment(entry));
      }
    }
  }
}

WebPayment satisfies StarRezStructureStatic<WebPayment>
