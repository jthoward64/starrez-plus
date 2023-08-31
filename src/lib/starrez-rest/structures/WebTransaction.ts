// Generated from XML description of WebTransaction

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebTransaction {
  webTransactionID?: number;
  webPaymentID?: number;
  chargeGroupID?: number;
  chargeItemID?: number;
  description?: string;
  amount?: string;
  fullAccountPayment?: boolean;
  tableID?: number;
  tableName?: string;
  data?: any | null;
  termSessionID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebTransaction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebTransactionID != null) this.webTransactionID = (data.WebTransactionID != null ? parseInt(data.WebTransactionID, 10) : data.WebTransactionID);
    if (data.WebPaymentID != null) this.webPaymentID = (data.WebPaymentID != null ? parseInt(data.WebPaymentID, 10) : data.WebPaymentID);
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.Description != null) this.description = data.Description;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.FullAccountPayment != null) this.fullAccountPayment = data.FullAccountPayment === 'true';
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Data != null) this.data = data.Data;
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WebTransaction by its ID or by exact match on other fields.
   * @param param Either the ID of the WebTransaction to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WebTransaction object or null (if id) or an array of WebTransaction objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WebTransaction | null>;
  static async select(param: Partial<Record<keyof WebTransaction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebTransaction[]>;
  static async select(param: number | Partial<Record<keyof WebTransaction, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WebTransaction | WebTransaction[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebTransaction/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebTransaction`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WebTransaction with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WebTransaction(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WebTransaction(entry));
      }
    }
  }
}

WebTransaction satisfies StarRezStructureStatic<WebTransaction>
