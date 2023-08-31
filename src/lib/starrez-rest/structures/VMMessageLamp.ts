// Generated from XML description of VMMessageLamp

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMMessageLamp {
  vMMessageLampID?: number;
  siteID?: number;
  extension?: number;
  lampOn?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMMessageLamp");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMMessageLampID != null) this.vMMessageLampID = (data.VMMessageLampID != null ? parseInt(data.VMMessageLampID, 10) : data.VMMessageLampID);
    if (data.SiteID != null) this.siteID = (data.SiteID != null ? parseInt(data.SiteID, 10) : data.SiteID);
    if (data.Extension != null) this.extension = (data.Extension != null ? parseInt(data.Extension, 10) : data.Extension);
    if (data.LampOn != null) this.lampOn = data.LampOn === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a VMMessageLamp by its ID or by exact match on other fields.
   * @param param Either the ID of the VMMessageLamp to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single VMMessageLamp object or null (if id) or an array of VMMessageLamp objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<VMMessageLamp | null>;
  static async select(param: Partial<Record<keyof VMMessageLamp, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMMessageLamp[]>;
  static async select(param: number | Partial<Record<keyof VMMessageLamp, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMMessageLamp | VMMessageLamp[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMessageLamp/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMessageLamp`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMMessageLamp with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new VMMessageLamp(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new VMMessageLamp(entry));
      }
    }
  }
}

VMMessageLamp satisfies StarRezStructureStatic<VMMessageLamp>
