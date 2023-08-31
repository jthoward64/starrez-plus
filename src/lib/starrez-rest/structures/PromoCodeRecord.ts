// Generated from XML description of PromoCodeRecord

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.PromoCodeRecordID != null) this.promoCodeRecordID = (data.PromoCodeRecordID != null ? parseInt(data.PromoCodeRecordID, 10) : data.PromoCodeRecordID);
    if (data.PromoCodeID != null) this.promoCodeID = (data.PromoCodeID != null ? parseInt(data.PromoCodeID, 10) : data.PromoCodeID);
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PromoCodeRecord | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PromoCodeRecord/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PromoCodeRecord with id ${id}`);
    } else {
      return new PromoCodeRecord(await response.text());
    }
  }
}

PromoCodeRecord satisfies StarRezStructureStatic<PromoCodeRecord>
