// Generated from XML description of Extension

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Extension {
  extensionID?: number;
  description?: string;
  virtual?: string;
  siteID?: number;
  phoneNumber?: string;
  equipmentNumber1?: string;
  equipmentNumber2?: string;
  equipmentNumber3?: string;
  equipmentComments?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Extension");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ExtensionID != null) this.extensionID = (data.ExtensionID != null ? parseInt(data.ExtensionID, 10) : data.ExtensionID);
    if (data.Description != null) this.description = data.Description;
    if (data.Virtual != null) this.virtual = data.Virtual;
    if (data.SiteID != null) this.siteID = (data.SiteID != null ? parseInt(data.SiteID, 10) : data.SiteID);
    if (data.PhoneNumber != null) this.phoneNumber = data.PhoneNumber;
    if (data.EquipmentNumber1 != null) this.equipmentNumber1 = data.EquipmentNumber1;
    if (data.EquipmentNumber2 != null) this.equipmentNumber2 = data.EquipmentNumber2;
    if (data.EquipmentNumber3 != null) this.equipmentNumber3 = data.EquipmentNumber3;
    if (data.EquipmentComments != null) this.equipmentComments = data.EquipmentComments;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Extension by its ID or by exact match on other fields.
   * @param param Either the ID of the Extension to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Extension object or null (if id) or an array of Extension objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Extension | null>;
  static async select(param: Partial<Record<keyof Extension, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Extension[]>;
  static async select(param: number | Partial<Record<keyof Extension, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Extension | Extension[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Extension/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Extension`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Extension with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Extension(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Extension(entry));
      }
    }
  }
}

Extension satisfies StarRezStructureStatic<Extension>
