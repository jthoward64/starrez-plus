// Generated from XML description of RefundRequestBreakUp

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RefundRequestBreakUp {
  refundRequestBreakUpID?: number;
  refundRequestID?: number;
  chargeGroupID?: number;
  amount?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RefundRequestBreakUp");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RefundRequestBreakUpID != null) this.refundRequestBreakUpID = (data.RefundRequestBreakUpID != null ? parseInt(data.RefundRequestBreakUpID, 10) : data.RefundRequestBreakUpID);
    if (data.RefundRequestID != null) this.refundRequestID = (data.RefundRequestID != null ? parseInt(data.RefundRequestID, 10) : data.RefundRequestID);
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RefundRequestBreakUp | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestBreakUp/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RefundRequestBreakUp with id ${id}`);
    } else {
      return new RefundRequestBreakUp(await response.text());
    }
  }
}

RefundRequestBreakUp satisfies StarRezStructureStatic<RefundRequestBreakUp>
