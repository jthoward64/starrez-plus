// Generated from XML description of TransactionTemplate

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TransactionTemplate {
  transactionTemplateID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  paymentOrRefund?: boolean;
  autoPayMaximum?: string;
  paymentTypeID?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TransactionTemplate");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TransactionTemplateID != null) this.transactionTemplateID = (data.TransactionTemplateID != null ? parseInt(data.TransactionTemplateID, 10) : data.TransactionTemplateID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.PaymentOrRefund != null) this.paymentOrRefund = data.PaymentOrRefund === 'true';
    if (data.AutoPayMaximum != null) this.autoPayMaximum = data.AutoPayMaximum;
    if (data.PaymentTypeID != null) this.paymentTypeID = (data.PaymentTypeID != null ? parseInt(data.PaymentTypeID, 10) : data.PaymentTypeID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a TransactionTemplate by its ID or by exact match on other fields.
   * @param param Either the ID of the TransactionTemplate to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single TransactionTemplate object or null (if id) or an array of TransactionTemplate objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<TransactionTemplate | null>;
  static async select(param: Partial<Record<keyof TransactionTemplate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TransactionTemplate[]>;
  static async select(param: number | Partial<Record<keyof TransactionTemplate, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<TransactionTemplate | TransactionTemplate[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionTemplate/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionTemplate`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionTemplate with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new TransactionTemplate(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new TransactionTemplate(entry));
      }
    }
  }
}

TransactionTemplate satisfies StarRezStructureStatic<TransactionTemplate>
