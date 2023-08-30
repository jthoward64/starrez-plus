// Generated from XML description of RefundRequestBatchConfigurationItem

import { starRezXmlToJson } from "../parsing.js";

export class RefundRequestBatchConfigurationItem {
  refundRequestBatchConfigurationItemID?: number;
  refundRequestBatchConfigurationID?: number;
  refundRequestConfigurationID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RefundRequestBatchConfigurationItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RefundRequestBatchConfigurationItemID != null) this.refundRequestBatchConfigurationItemID = parseInt(data.RefundRequestBatchConfigurationItemID, 10);
    if (data.RefundRequestBatchConfigurationID != null) this.refundRequestBatchConfigurationID = parseInt(data.RefundRequestBatchConfigurationID, 10);
    if (data.RefundRequestConfigurationID != null) this.refundRequestConfigurationID = parseInt(data.RefundRequestConfigurationID, 10);
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
