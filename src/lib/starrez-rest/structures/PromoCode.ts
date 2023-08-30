// Generated from XML description of PromoCode

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.PromoCodeID != null) this.promoCodeID = parseInt(data.PromoCodeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Code != null) this.code = data.Code;
    if (data.Type != null) this.type = data.Type;
    if (data.ActiveDateStart != null) this.activeDateStart = new Date(data.ActiveDateStart);
    if (data.ActiveDateEnd != null) this.activeDateEnd = new Date(data.ActiveDateEnd);
    if (data.UsageMaximum != null) this.usageMaximum = parseInt(data.UsageMaximum, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
