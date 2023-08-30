// Generated from XML description of FunctionResource

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class FunctionResource {
  functionResourceID?: number;
  functionResourceTypeID?: number;
  categoryID?: number;
  recordTypeEnum?: unknown;
  functionRoomID?: number;
  fixedToFunctionRoom?: boolean;
  description?: string;
  chargeItemID?: number;
  amount?: string;
  amountCost?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionResource");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionResourceID != null) this.functionResourceID = parseInt(data.FunctionResourceID, 10);
    if (data.FunctionResourceTypeID != null) this.functionResourceTypeID = parseInt(data.FunctionResourceTypeID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.FunctionRoomID != null) this.functionRoomID = parseInt(data.FunctionRoomID, 10);
    if (data.FixedToFunctionRoom != null) this.fixedToFunctionRoom = data.FixedToFunctionRoom === 'true';
    if (data.Description != null) this.description = data.Description;
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FunctionResource | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionResource/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionResource with id ${id}`);
    } else {
      return new FunctionResource(await response.text());
    }
}

}
