// Generated from XML description of CustomMethodTag

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class CustomMethodTag {
  customMethodTagID?: number;
  methodName?: string;
  addinFilename?: string;
  sessionTag?: number;
  dateLastRan?: Date;
  batchNumber?: number;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "CustomMethodTag");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CustomMethodTagID != null) this.customMethodTagID = (data.CustomMethodTagID != null ? parseInt(data.CustomMethodTagID, 10) : data.CustomMethodTagID);
    if (data.MethodName != null) this.methodName = data.MethodName;
    if (data.AddinFilename != null) this.addinFilename = data.AddinFilename;
    if (data.SessionTag != null) this.sessionTag = (data.SessionTag != null ? parseInt(data.SessionTag, 10) : data.SessionTag);
    if (data.DateLastRan != null) this.dateLastRan = (data.DateLastRan != null ? new Date(data.DateLastRan) : data.DateLastRan);
    if (data.BatchNumber != null) this.batchNumber = (data.BatchNumber != null ? parseInt(data.BatchNumber, 10) : data.BatchNumber);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a CustomMethodTag by its ID or by exact match on other fields.
   * @param param Either the ID of the CustomMethodTag to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single CustomMethodTag object or null (if id) or an array of CustomMethodTag objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<CustomMethodTag | null>;
  static async select(param: Partial<Record<keyof CustomMethodTag, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CustomMethodTag[]>;
  static async select(param: number | Partial<Record<keyof CustomMethodTag, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<CustomMethodTag | CustomMethodTag[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CustomMethodTag/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CustomMethodTag`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch CustomMethodTag with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new CustomMethodTag(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new CustomMethodTag(entry));
      }
    }
  }
}

CustomMethodTag satisfies StarRezStructureStatic<CustomMethodTag>
