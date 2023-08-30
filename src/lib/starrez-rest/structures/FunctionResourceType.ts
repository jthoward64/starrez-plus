// Generated from XML description of FunctionResourceType

import { starRezXmlToJson } from "../parsing.js";

export class FunctionResourceType {
  functionResourceTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  functionChargeTypeEnum?: unknown;
  perEntry?: boolean;
  chargeItemID?: number;
  comments?: string;
  checkAvailability?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionResourceType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionResourceTypeID != null) this.functionResourceTypeID = parseInt(data.FunctionResourceTypeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.FunctionChargeTypeEnum != null) this.functionChargeTypeEnum = data.FunctionChargeTypeEnum;
    if (data.PerEntry != null) this.perEntry = data.PerEntry === 'true';
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CheckAvailability != null) this.checkAvailability = data.CheckAvailability === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
