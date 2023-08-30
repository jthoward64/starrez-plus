// Generated from XML description of Total

import { starRezXmlToJson } from "../parsing.js";

export class Total {
  totalID?: number;
  entryID?: number;
  chargeGroupID?: number;
  totalCount?: number;
  totalAmount?: string;
  totalTaxAmount?: string;
  totalTaxAmount2?: string;
  totalTaxAmount3?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Total");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TotalID != null) this.totalID = parseInt(data.TotalID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ChargeGroupID != null) this.chargeGroupID = parseInt(data.ChargeGroupID, 10);
    if (data.TotalCount != null) this.totalCount = parseInt(data.TotalCount, 10);
    if (data.TotalAmount != null) this.totalAmount = data.TotalAmount;
    if (data.TotalTaxAmount != null) this.totalTaxAmount = data.TotalTaxAmount;
    if (data.TotalTaxAmount2 != null) this.totalTaxAmount2 = data.TotalTaxAmount2;
    if (data.TotalTaxAmount3 != null) this.totalTaxAmount3 = data.TotalTaxAmount3;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
