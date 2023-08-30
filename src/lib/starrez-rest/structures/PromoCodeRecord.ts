// Generated from XML description of PromoCodeRecord

import { starRezXmlToJson } from "../parsing.js";

export class PromoCodeRecord {
  promoCodeRecordID?: number;
  promoCodeID?: number;
  tableID?: number;
  tableName?: string;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PromoCodeRecord");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PromoCodeRecordID != null) this.promoCodeRecordID = parseInt(data.PromoCodeRecordID, 10);
    if (data.PromoCodeID != null) this.promoCodeID = parseInt(data.PromoCodeID, 10);
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
