// Generated from XML description of FunctionResourceType

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.FunctionResourceTypeID != null) this.functionResourceTypeID = (data.FunctionResourceTypeID != null ? parseInt(data.FunctionResourceTypeID, 10) : data.FunctionResourceTypeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.FunctionChargeTypeEnum != null) this.functionChargeTypeEnum = data.FunctionChargeTypeEnum;
    if (data.PerEntry != null) this.perEntry = data.PerEntry === 'true';
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CheckAvailability != null) this.checkAvailability = data.CheckAvailability === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FunctionResourceType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionResourceType/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionResourceType with id ${id}`);
    } else {
      return new FunctionResourceType(await response.text());
    }
  }
}

FunctionResourceType satisfies StarRezStructureStatic<FunctionResourceType>
