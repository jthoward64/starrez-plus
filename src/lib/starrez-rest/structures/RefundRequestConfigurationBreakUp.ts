// Generated from XML description of RefundRequestConfigurationBreakUp

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.RefundRequestConfigurationBreakUpID != null) this.refundRequestConfigurationBreakUpID = parseInt(data.RefundRequestConfigurationBreakUpID, 10);
    if (data.RefundRequestConfigurationID != null) this.refundRequestConfigurationID = parseInt(data.RefundRequestConfigurationID, 10);
    if (data.ChargeGroupID != null) this.chargeGroupID = parseInt(data.ChargeGroupID, 10);
    if (data.SortOrder != null) this.sortOrder = parseInt(data.SortOrder, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RefundRequestConfigurationBreakUp | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestConfigurationBreakUp/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RefundRequestConfigurationBreakUp with id ${id}`);
    } else {
      return new RefundRequestConfigurationBreakUp(await response.text());
    }
}

}
