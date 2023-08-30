// Generated from XML description of PromoCodeUsage

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PromoCodeUsage {
  promoCodeUsageID?: number;
  promoCodeID?: number;
  tableID?: number;
  tableName?: string;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PromoCodeUsage");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PromoCodeUsageID != null) this.promoCodeUsageID = (data.PromoCodeUsageID != null ? parseInt(data.PromoCodeUsageID, 10) : data.PromoCodeUsageID);
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PromoCodeUsage | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PromoCodeUsage/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch PromoCodeUsage with id ${id}`);
    } else {
      return new PromoCodeUsage(await response.text());
    }
  }
}

PromoCodeUsage satisfies StarRezStructureStatic<PromoCodeUsage>
