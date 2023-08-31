// Generated from XML description of VMLineUsage

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMLineUsage {
  vMLineUsageID?: number;
  vMLineUsageDate?: Date;
  siteID?: number;
  line?: number;
  duration?: number;
  extensionID?: number;
  admin?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMLineUsage");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMLineUsageID != null) this.vMLineUsageID = (data.VMLineUsageID != null ? parseInt(data.VMLineUsageID, 10) : data.VMLineUsageID);
    if (data.VMLineUsageDate != null) this.vMLineUsageDate = (data.VMLineUsageDate != null ? new Date(data.VMLineUsageDate) : data.VMLineUsageDate);
    if (data.SiteID != null) this.siteID = (data.SiteID != null ? parseInt(data.SiteID, 10) : data.SiteID);
    if (data.Line != null) this.line = (data.Line != null ? parseInt(data.Line, 10) : data.Line);
    if (data.Duration != null) this.duration = (data.Duration != null ? parseInt(data.Duration, 10) : data.Duration);
    if (data.ExtensionID != null) this.extensionID = (data.ExtensionID != null ? parseInt(data.ExtensionID, 10) : data.ExtensionID);
    if (data.Admin != null) this.admin = data.Admin === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a VMLineUsage by its ID or by exact match on other fields.
   * @param param Either the ID of the VMLineUsage to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single VMLineUsage object or null (if id) or an array of VMLineUsage objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<VMLineUsage | null>;
  static async select(param: Partial<Record<keyof VMLineUsage, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMLineUsage[]>;
  static async select(param: number | Partial<Record<keyof VMLineUsage, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMLineUsage | VMLineUsage[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMLineUsage/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMLineUsage`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMLineUsage with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new VMLineUsage(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new VMLineUsage(entry));
      }
    }
  }
}

VMLineUsage satisfies StarRezStructureStatic<VMLineUsage>
