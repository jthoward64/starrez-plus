// Generated from XML description of VMGroupMailBox

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMGroupMailBox {
  vMGroupMailBoxID?: number;
  vMGroupID?: number;
  vMMailBoxID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMGroupMailBox");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMGroupMailBoxID != null) this.vMGroupMailBoxID = (data.VMGroupMailBoxID != null ? parseInt(data.VMGroupMailBoxID, 10) : data.VMGroupMailBoxID);
    if (data.VMGroupID != null) this.vMGroupID = (data.VMGroupID != null ? parseInt(data.VMGroupID, 10) : data.VMGroupID);
    if (data.VMMailBoxID != null) this.vMMailBoxID = (data.VMMailBoxID != null ? parseInt(data.VMMailBoxID, 10) : data.VMMailBoxID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a VMGroupMailBox by its ID or by exact match on other fields.
   * @param param Either the ID of the VMGroupMailBox to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single VMGroupMailBox object or null (if id) or an array of VMGroupMailBox objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<VMGroupMailBox | null>;
  static async select(param: Partial<Record<keyof VMGroupMailBox, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMGroupMailBox[]>;
  static async select(param: number | Partial<Record<keyof VMGroupMailBox, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMGroupMailBox | VMGroupMailBox[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroupMailBox/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroupMailBox`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMGroupMailBox with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new VMGroupMailBox(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new VMGroupMailBox(entry));
      }
    }
  }
}

VMGroupMailBox satisfies StarRezStructureStatic<VMGroupMailBox>
