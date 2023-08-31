// Generated from XML description of RefundRequestConfiguration

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RefundRequestConfiguration {
  refundRequestConfigurationID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  categoryID?: number;
  paymentTypeID?: number;
  chargeGroupID?: number;
  amountMin?: string;
  amountMax?: string;
  workflowID?: number;
  entryEmail_TemplateID?: number;
  requesterEmail_TemplateID?: number;
  approverEmail_TemplateID?: number;
  comments?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RefundRequestConfiguration");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RefundRequestConfigurationID != null) this.refundRequestConfigurationID = (data.RefundRequestConfigurationID != null ? parseInt(data.RefundRequestConfigurationID, 10) : data.RefundRequestConfigurationID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.PaymentTypeID != null) this.paymentTypeID = (data.PaymentTypeID != null ? parseInt(data.PaymentTypeID, 10) : data.PaymentTypeID);
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.AmountMin != null) this.amountMin = data.AmountMin;
    if (data.AmountMax != null) this.amountMax = data.AmountMax;
    if (data.WorkflowID != null) this.workflowID = (data.WorkflowID != null ? parseInt(data.WorkflowID, 10) : data.WorkflowID);
    if (data.EntryEmail_TemplateID != null) this.entryEmail_TemplateID = (data.EntryEmail_TemplateID != null ? parseInt(data.EntryEmail_TemplateID, 10) : data.EntryEmail_TemplateID);
    if (data.RequesterEmail_TemplateID != null) this.requesterEmail_TemplateID = (data.RequesterEmail_TemplateID != null ? parseInt(data.RequesterEmail_TemplateID, 10) : data.RequesterEmail_TemplateID);
    if (data.ApproverEmail_TemplateID != null) this.approverEmail_TemplateID = (data.ApproverEmail_TemplateID != null ? parseInt(data.ApproverEmail_TemplateID, 10) : data.ApproverEmail_TemplateID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RefundRequestConfiguration | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestConfiguration/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RefundRequestConfiguration with id ${id}`);
    } else {
      return new RefundRequestConfiguration(await response.text());
    }
  }
}

RefundRequestConfiguration satisfies StarRezStructureStatic<RefundRequestConfiguration>
