// Generated from XML description of RefundRequestConfiguration

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.RefundRequestConfigurationID != null) this.refundRequestConfigurationID = parseInt(data.RefundRequestConfigurationID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.PaymentTypeID != null) this.paymentTypeID = parseInt(data.PaymentTypeID, 10);
    if (data.ChargeGroupID != null) this.chargeGroupID = parseInt(data.ChargeGroupID, 10);
    if (data.AmountMin != null) this.amountMin = data.AmountMin;
    if (data.AmountMax != null) this.amountMax = data.AmountMax;
    if (data.WorkflowID != null) this.workflowID = parseInt(data.WorkflowID, 10);
    if (data.EntryEmail_TemplateID != null) this.entryEmail_TemplateID = parseInt(data.EntryEmail_TemplateID, 10);
    if (data.RequesterEmail_TemplateID != null) this.requesterEmail_TemplateID = parseInt(data.RequesterEmail_TemplateID, 10);
    if (data.ApproverEmail_TemplateID != null) this.approverEmail_TemplateID = parseInt(data.ApproverEmail_TemplateID, 10);
    if (data.Comments != null) this.comments = data.Comments;
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
