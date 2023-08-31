// Generated from XML description of VMGroupExtension

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMGroupExtension {
  vMGroupExtensionID?: number;
  vMGroupID?: number;
  extensionID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMGroupExtension");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMGroupExtensionID != null) this.vMGroupExtensionID = (data.VMGroupExtensionID != null ? parseInt(data.VMGroupExtensionID, 10) : data.VMGroupExtensionID);
    if (data.VMGroupID != null) this.vMGroupID = (data.VMGroupID != null ? parseInt(data.VMGroupID, 10) : data.VMGroupID);
    if (data.ExtensionID != null) this.extensionID = (data.ExtensionID != null ? parseInt(data.ExtensionID, 10) : data.ExtensionID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a VMGroupExtension by its ID or by exact match on other fields.
   * @param param Either the ID of the VMGroupExtension to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single VMGroupExtension object or null (if id) or an array of VMGroupExtension objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<VMGroupExtension | null>;
  static async select(param: Partial<Record<keyof VMGroupExtension, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMGroupExtension[]>;
  static async select(param: number | Partial<Record<keyof VMGroupExtension, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VMGroupExtension | VMGroupExtension[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroupExtension/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMGroupExtension`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMGroupExtension with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new VMGroupExtension(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new VMGroupExtension(entry));
      }
    }
  }
}

VMGroupExtension satisfies StarRezStructureStatic<VMGroupExtension>
