// Generated from XML description of TransactionTemplate

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<TransactionTemplate | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TransactionTemplate/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch TransactionTemplate with id ${id}`);
    } else {
      return new TransactionTemplate(await response.text());
    }
  }
}

TransactionTemplate satisfies StarRezStructureStatic<TransactionTemplate>
