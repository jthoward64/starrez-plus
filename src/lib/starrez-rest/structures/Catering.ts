// Generated from XML description of Catering

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class Catering {
  cateringID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  categoryID?: number;
  cateringDescription?: string;
  servingDuration?: number;
  contactID?: number;
  cateringTypeID?: number;
  chargeItemID?: number;
  amountCost?: string;
  amount?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Catering");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CateringID != null) this.cateringID = parseInt(data.CateringID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.CateringDescription != null) this.cateringDescription = data.CateringDescription;
    if (data.ServingDuration != null) this.servingDuration = parseInt(data.ServingDuration, 10);
    if (data.ContactID != null) this.contactID = parseInt(data.ContactID, 10);
    if (data.CateringTypeID != null) this.cateringTypeID = parseInt(data.CateringTypeID, 10);
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Catering | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Catering/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Catering with id ${id}`);
    } else {
      return new Catering(await response.text());
    }
}

}
