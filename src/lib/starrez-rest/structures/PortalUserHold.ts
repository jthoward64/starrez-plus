// Generated from XML description of PortalUserHold

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalUserHold {
  portalUserHoldID?: number;
  portalUserTokenID?: number;
  holdDateTime_Expire?: Date | null;
  tableName?: string;
  tableID?: number;
  quantity?: number;
  applicableDateStart?: Date | null;
  applicableDateEnd?: Date | null;
  data?: any;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalUserHold");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalUserHoldID != null) this.portalUserHoldID = (data.PortalUserHoldID != null ? parseInt(data.PortalUserHoldID, 10) : data.PortalUserHoldID);
    if (data.PortalUserTokenID != null) this.portalUserTokenID = (data.PortalUserTokenID != null ? parseInt(data.PortalUserTokenID, 10) : data.PortalUserTokenID);
    if (data.HoldDateTime_Expire != null) this.holdDateTime_Expire = (data.HoldDateTime_Expire != null ? new Date(data.HoldDateTime_Expire) : data.HoldDateTime_Expire);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.Quantity != null) this.quantity = (data.Quantity != null ? parseInt(data.Quantity, 10) : data.Quantity);
    if (data.ApplicableDateStart != null) this.applicableDateStart = (data.ApplicableDateStart != null ? new Date(data.ApplicableDateStart) : data.ApplicableDateStart);
    if (data.ApplicableDateEnd != null) this.applicableDateEnd = (data.ApplicableDateEnd != null ? new Date(data.ApplicableDateEnd) : data.ApplicableDateEnd);
    if (data.Data != null) this.data = data.Data;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PortalUserHold | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalUserHold/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalUserHold with id ${id}`);
    } else {
      return new PortalUserHold(await response.text());
    }
  }
}

PortalUserHold satisfies StarRezStructureStatic<PortalUserHold>
