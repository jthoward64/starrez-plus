// Generated from XML description of RefundRequestBreakUp

import { starRezXmlToJson } from "../parsing.js";
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

    if (data.RefundRequestBreakUpID != null) this.refundRequestBreakUpID = parseInt(data.RefundRequestBreakUpID, 10);
    if (data.RefundRequestID != null) this.refundRequestID = parseInt(data.RefundRequestID, 10);
    if (data.ChargeGroupID != null) this.chargeGroupID = parseInt(data.ChargeGroupID, 10);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RefundRequestBreakUp | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestBreakUp/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RefundRequestBreakUp with id ${id}`);
    } else {
      return new RefundRequestBreakUp(await response.text());
    }
  }
}

RefundRequestBreakUp satisfies StarRezStructureStatic<RefundRequestBreakUp>
