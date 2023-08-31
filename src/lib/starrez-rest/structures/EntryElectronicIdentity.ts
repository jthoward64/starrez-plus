// Generated from XML description of EntryElectronicIdentity

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryElectronicIdentity {
  entryElectronicIdentityID?: number;
  entryID?: number;
  electronicIdentityTypeID?: number;
  electronicIdentity?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryElectronicIdentity");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryElectronicIdentityID != null) this.entryElectronicIdentityID = (data.EntryElectronicIdentityID != null ? parseInt(data.EntryElectronicIdentityID, 10) : data.EntryElectronicIdentityID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ElectronicIdentityTypeID != null) this.electronicIdentityTypeID = (data.ElectronicIdentityTypeID != null ? parseInt(data.ElectronicIdentityTypeID, 10) : data.ElectronicIdentityTypeID);
    if (data.ElectronicIdentity != null) this.electronicIdentity = data.ElectronicIdentity;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryElectronicIdentity by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryElectronicIdentity to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryElectronicIdentity object or null (if id) or an array of EntryElectronicIdentity objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryElectronicIdentity | null>;
  static async select(param: Partial<Record<keyof EntryElectronicIdentity, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryElectronicIdentity[]>;
  static async select(param: number | Partial<Record<keyof EntryElectronicIdentity, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryElectronicIdentity | EntryElectronicIdentity[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryElectronicIdentity/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryElectronicIdentity`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryElectronicIdentity with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryElectronicIdentity(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryElectronicIdentity(entry));
      }
    }
  }
}

EntryElectronicIdentity satisfies StarRezStructureStatic<EntryElectronicIdentity>
