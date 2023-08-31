// Generated from XML description of VMData

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMData {
  vMDataID?: number;
  vMDataDate?: Date;
  duration?: number;
  extensionID?: number;
  vMMailBoxID?: number;
  vMGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMData");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMDataID != null) this.vMDataID = (data.VMDataID != null ? parseInt(data.VMDataID, 10) : data.VMDataID);
    if (data.VMDataDate != null) this.vMDataDate = (data.VMDataDate != null ? new Date(data.VMDataDate) : data.VMDataDate);
    if (data.Duration != null) this.duration = (data.Duration != null ? parseInt(data.Duration, 10) : data.Duration);
    if (data.ExtensionID != null) this.extensionID = (data.ExtensionID != null ? parseInt(data.ExtensionID, 10) : data.ExtensionID);
    if (data.VMMailBoxID != null) this.vMMailBoxID = (data.VMMailBoxID != null ? parseInt(data.VMMailBoxID, 10) : data.VMMailBoxID);
    if (data.VMGroupID != null) this.vMGroupID = (data.VMGroupID != null ? parseInt(data.VMGroupID, 10) : data.VMGroupID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a VMData by its ID or by exact match on other fields.
   * @param param Either the ID of the VMData to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single VMData object or null (if id) or an array of VMData objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<VMData | null>;
  static async select(param: Partial<Record<keyof VMData, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMData[]>;
  static async select(param: number | Partial<Record<keyof VMData, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMData | VMData[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMData/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMData`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMData with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new VMData(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new VMData(entry));
      }
    }
  }
}

VMData satisfies StarRezStructureStatic<VMData>
