// Generated from XML description of PromoCode

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PromoCode {
  promoCodeID?: number;
  description?: string;
  code?: string;
  type?: string;
  activeDateStart?: Date | null;
  activeDateEnd?: Date | null;
  usageMaximum?: number;
  tableName?: string;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PromoCode");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PromoCodeID != null) this.promoCodeID = (data.PromoCodeID != null ? parseInt(data.PromoCodeID, 10) : data.PromoCodeID);
    if (data.Description != null) this.description = data.Description;
    if (data.Code != null) this.code = data.Code;
    if (data.Type != null) this.type = data.Type;
    if (data.ActiveDateStart != null) this.activeDateStart = (data.ActiveDateStart != null ? new Date(data.ActiveDateStart) : data.ActiveDateStart);
    if (data.ActiveDateEnd != null) this.activeDateEnd = (data.ActiveDateEnd != null ? new Date(data.ActiveDateEnd) : data.ActiveDateEnd);
    if (data.UsageMaximum != null) this.usageMaximum = (data.UsageMaximum != null ? parseInt(data.UsageMaximum, 10) : data.UsageMaximum);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PromoCode | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PromoCode/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PromoCode with id ${id}`);
    } else {
      return new PromoCode(await response.text());
    }
  }
}

PromoCode satisfies StarRezStructureStatic<PromoCode>
