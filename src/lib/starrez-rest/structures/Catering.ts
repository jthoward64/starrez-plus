// Generated from XML description of Catering

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.CateringID != null) this.cateringID = (data.CateringID != null ? parseInt(data.CateringID, 10) : data.CateringID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.CateringDescription != null) this.cateringDescription = data.CateringDescription;
    if (data.ServingDuration != null) this.servingDuration = (data.ServingDuration != null ? parseInt(data.ServingDuration, 10) : data.ServingDuration);
    if (data.ContactID != null) this.contactID = (data.ContactID != null ? parseInt(data.ContactID, 10) : data.ContactID);
    if (data.CateringTypeID != null) this.cateringTypeID = (data.CateringTypeID != null ? parseInt(data.CateringTypeID, 10) : data.CateringTypeID);
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.AmountCost != null) this.amountCost = data.AmountCost;
    if (data.Amount != null) this.amount = data.Amount;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Catering by its ID or by exact match on other fields.
   * @param param Either the ID of the Catering to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Catering object or null (if id) or an array of Catering objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Catering | null>;
  static async select(param: Partial<Record<keyof Catering, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Catering[]>;
  static async select(param: number | Partial<Record<keyof Catering, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Catering | Catering[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Catering/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Catering`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Catering with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Catering(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Catering(entry));
      }
    }
  }
}

Catering satisfies StarRezStructureStatic<Catering>
