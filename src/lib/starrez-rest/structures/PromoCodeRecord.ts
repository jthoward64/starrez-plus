// Generated from XML description of PromoCodeRecord

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a PromoCodeRecord by its ID or by exact match on other fields.
   * @param param Either the ID of the PromoCodeRecord to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single PromoCodeRecord object or null (if id) or an array of PromoCodeRecord objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<PromoCodeRecord | null>;
  static async select(param: Partial<Record<keyof PromoCodeRecord, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PromoCodeRecord[]>;
  static async select(param: number | Partial<Record<keyof PromoCodeRecord, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<PromoCodeRecord | PromoCodeRecord[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PromoCodeRecord/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PromoCodeRecord`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch PromoCodeRecord with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new PromoCodeRecord(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new PromoCodeRecord(entry));
      }
    }
  }
}

PromoCodeRecord satisfies StarRezStructureStatic<PromoCodeRecord>
