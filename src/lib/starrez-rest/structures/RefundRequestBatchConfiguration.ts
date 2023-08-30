// Generated from XML description of RefundRequestBatchConfiguration

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RefundRequestBatchConfiguration {
  refundRequestBatchConfigurationID?: number;
  dynamicListID?: number;
  description?: string;
  comments?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RefundRequestBatchConfiguration");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RefundRequestBatchConfigurationID != null) this.refundRequestBatchConfigurationID = parseInt(data.RefundRequestBatchConfigurationID, 10);
    if (data.DynamicListID != null) this.dynamicListID = parseInt(data.DynamicListID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RefundRequestBatchConfiguration | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RefundRequestBatchConfiguration/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RefundRequestBatchConfiguration with id ${id}`);
    } else {
      return new RefundRequestBatchConfiguration(await response.text());
    }
  }
}

RefundRequestBatchConfiguration satisfies StarRezStructureStatic<RefundRequestBatchConfiguration>
