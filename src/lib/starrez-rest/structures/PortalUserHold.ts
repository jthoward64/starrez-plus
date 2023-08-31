// Generated from XML description of PortalUserHold

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a PortalUserHold by its ID or by exact match on other fields.
   * @param param Either the ID of the PortalUserHold to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PortalUserHold object or null (if id) or an array of PortalUserHold objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PortalUserHold | null>;
  static async select(param: Partial<Record<keyof PortalUserHold, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalUserHold[]>;
  static async select(param: number | Partial<Record<keyof PortalUserHold, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PortalUserHold | PortalUserHold[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalUserHold/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalUserHold`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalUserHold with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PortalUserHold(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PortalUserHold(entry));
      }
    }
  }
}

PortalUserHold satisfies StarRezStructureStatic<PortalUserHold>
