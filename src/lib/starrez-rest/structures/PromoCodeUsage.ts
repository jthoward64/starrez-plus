// Generated from XML description of PromoCodeUsage

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.PromoCodeUsageID != null) this.promoCodeUsageID = parseInt(data.PromoCodeUsageID, 10);
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