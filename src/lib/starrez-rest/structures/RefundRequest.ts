// Generated from XML description of RefundRequest

import { starRezXmlToJson } from "../parsing.js";

export class RefundRequest {
  refundRequestID?: number;
  entryID?: number;
  categoryID?: number;
  description?: string;
  requestedAmount?: string;
  refundAmount?: string;
  chargeGroupID?: number;
  paymentTypeID?: number;
  refundRequestConfigurationID?: number;
  refundRequestBatchConfigurationID?: number;
  batchNumber?: number;
  refundRequestStatusEnum?: unknown;
  comments?: string;
  workflowStepID?: number;
  assignedTo_SecurityUserID?: number;
  current_WorkflowHistoryID?: number;
  previous_WorkflowHistoryID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RefundRequest");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RefundRequestID != null) this.refundRequestID = parseInt(data.RefundRequestID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.RequestedAmount != null) this.requestedAmount = data.RequestedAmount;
    if (data.RefundAmount != null) this.refundAmount = data.RefundAmount;
    if (data.ChargeGroupID != null) this.chargeGroupID = parseInt(data.ChargeGroupID, 10);
    if (data.PaymentTypeID != null) this.paymentTypeID = parseInt(data.PaymentTypeID, 10);
    if (data.RefundRequestConfigurationID != null) this.refundRequestConfigurationID = parseInt(data.RefundRequestConfigurationID, 10);
    if (data.RefundRequestBatchConfigurationID != null) this.refundRequestBatchConfigurationID = parseInt(data.RefundRequestBatchConfigurationID, 10);
    if (data.BatchNumber != null) this.batchNumber = parseInt(data.BatchNumber, 10);
    if (data.RefundRequestStatusEnum != null) this.refundRequestStatusEnum = data.RefundRequestStatusEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.WorkflowStepID != null) this.workflowStepID = parseInt(data.WorkflowStepID, 10);
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = parseInt(data.AssignedTo_SecurityUserID, 10);
    if (data.Current_WorkflowHistoryID != null) this.current_WorkflowHistoryID = parseInt(data.Current_WorkflowHistoryID, 10);
    if (data.Previous_WorkflowHistoryID != null) this.previous_WorkflowHistoryID = parseInt(data.Previous_WorkflowHistoryID, 10);
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
