// Generated from XML description of RefundRequestConfigurationBreakUp

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RefundRequestConfigurationBreakUp {
  refundRequestConfigurationBreakUpID?: number;
  refundRequestConfigurationID?: number;
  chargeGroupID?: number;
  sortOrder?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RefundRequestConfigurationBreakUp");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RefundRequestConfigurationBreakUpID != null) this.refundRequestConfigurationBreakUpID = (data.RefundRequestConfigurationBreakUpID != null ? parseInt(data.RefundRequestConfigurationBreakUpID, 10) : data.RefundRequestConfigurationBreakUpID);
    if (data.RefundRequestConfigurationID != null) this.refundRequestConfigurationID = (data.RefundRequestConfigurationID != null ? parseInt(data.RefundRequestConfigurationID, 10) : data.RefundRequestConfigurationID);
    if (data.ChargeGroupID != null) this.chargeGroupID = (data.ChargeGroupID != null ? parseInt(data.ChargeGroupID, 10) : data.ChargeGroupID);
    if (data.SortOrder != null) this.sortOrder = (data.SortOrder != null ? parseInt(data.SortOrder, 10) : data.SortOrder);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RefundRequestConfigurationBreakUp | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestConfigurationBreakUp/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RefundRequestConfigurationBreakUp with id ${id}`);
    } else {
      return new RefundRequestConfigurationBreakUp(await response.text());
    }
  }
}

RefundRequestConfigurationBreakUp satisfies StarRezStructureStatic<RefundRequestConfigurationBreakUp>
