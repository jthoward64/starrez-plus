// Generated from XML description of RefundRequest

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.RefundRequestID != null) this.refundRequestID = (data.RefundRequestID != null ? parseInt(data.RefundRequestID, 10) : data.RefundRequestID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.Description != null) this.description = data.Description;
    if (data.RequestedAmount != null) this.requestedAmount = data.RequestedAmount;
    if (data.RefundAmount != null) this.refundAmount = data.RefundAmount;
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.PaymentTypeID != null) this.paymentTypeID = (data.PaymentTypeID != null ? parseInt(data.PaymentTypeID, 10) : data.PaymentTypeID);
    if (data.RefundRequestConfigurationID != null) this.refundRequestConfigurationID = (data.RefundRequestConfigurationID != null ? parseInt(data.RefundRequestConfigurationID, 10) : data.RefundRequestConfigurationID);
    if (data.RefundRequestBatchConfigurationID != null) this.refundRequestBatchConfigurationID = (data.RefundRequestBatchConfigurationID != null ? parseInt(data.RefundRequestBatchConfigurationID, 10) : data.RefundRequestBatchConfigurationID);
    if (data.BatchNumber != null) this.batchNumber = (data.BatchNumber != null ? parseInt(data.BatchNumber, 10) : data.BatchNumber);
    if (data.RefundRequestStatusEnum != null) this.refundRequestStatusEnum = data.RefundRequestStatusEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.WorkflowStepID != null) this.workflowStepID = (data.WorkflowStepID != null ? parseInt(data.WorkflowStepID, 10) : data.WorkflowStepID);
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = (data.AssignedTo_SecurityUserID != null ? parseInt(data.AssignedTo_SecurityUserID, 10) : data.AssignedTo_SecurityUserID);
    if (data.Current_WorkflowHistoryID != null) this.current_WorkflowHistoryID = (data.Current_WorkflowHistoryID != null ? parseInt(data.Current_WorkflowHistoryID, 10) : data.Current_WorkflowHistoryID);
    if (data.Previous_WorkflowHistoryID != null) this.previous_WorkflowHistoryID = (data.Previous_WorkflowHistoryID != null ? parseInt(data.Previous_WorkflowHistoryID, 10) : data.Previous_WorkflowHistoryID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RefundRequest | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequest/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RefundRequest with id ${id}`);
    } else {
      return new RefundRequest(await response.text());
    }
  }
}

RefundRequest satisfies StarRezStructureStatic<RefundRequest>
