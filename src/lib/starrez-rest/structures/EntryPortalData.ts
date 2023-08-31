// Generated from XML description of EntryPortalData

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryPortalData {
  entryPortalDataID?: number;
  entryID?: number;
  securityUserID?: number;
  description?: string;
  tableName?: string;
  tableID?: number;
  value?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryPortalData");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryPortalDataID != null) this.entryPortalDataID = (data.EntryPortalDataID != null ? parseInt(data.EntryPortalDataID, 10) : data.EntryPortalDataID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.Description != null) this.description = data.Description;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.TableID != null) this.tableID = (data.TableID != null ? parseInt(data.TableID, 10) : data.TableID);
    if (data.Value != null) this.value = data.Value;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryPortalData by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryPortalData to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryPortalData object or null (if id) or an array of EntryPortalData objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryPortalData | null>;
  static async select(param: Partial<Record<keyof EntryPortalData, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryPortalData[]>;
  static async select(param: number | Partial<Record<keyof EntryPortalData, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryPortalData | EntryPortalData[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryPortalData/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryPortalData`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryPortalData with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryPortalData(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryPortalData(entry));
      }
    }
  }
}

EntryPortalData satisfies StarRezStructureStatic<EntryPortalData>
