// Generated from XML description of EntryApplicationProxy

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryApplicationProxy {
  entryApplicationProxyID?: number;
  entryApplicationID?: number;
  nameFirst?: string;
  nameLast?: string;
  email?: string;
  relationship?: string;
  pinNumber?: number;
  dateExpiry?: Date | null;
  dateComplete?: Date | null;
  customBit1?: boolean;
  customBit2?: boolean;
  customString1?: string;
  customString2?: string;
  customString3?: string;
  customString4?: string;
  customString5?: string;
  customString6?: string;
  customDate1?: Date | null;
  customDate2?: Date | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryApplicationProxy");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryApplicationProxyID != null) this.entryApplicationProxyID = (data.EntryApplicationProxyID != null ? parseInt(data.EntryApplicationProxyID, 10) : data.EntryApplicationProxyID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.NameFirst != null) this.nameFirst = data.NameFirst;
    if (data.NameLast != null) this.nameLast = data.NameLast;
    if (data.Email != null) this.email = data.Email;
    if (data.Relationship != null) this.relationship = data.Relationship;
    if (data.PinNumber != null) this.pinNumber = (data.PinNumber != null ? parseInt(data.PinNumber, 10) : data.PinNumber);
    if (data.DateExpiry != null) this.dateExpiry = (data.DateExpiry != null ? new Date(data.DateExpiry) : data.DateExpiry);
    if (data.DateComplete != null) this.dateComplete = (data.DateComplete != null ? new Date(data.DateComplete) : data.DateComplete);
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.CustomString3 != null) this.customString3 = data.CustomString3;
    if (data.CustomString4 != null) this.customString4 = data.CustomString4;
    if (data.CustomString5 != null) this.customString5 = data.CustomString5;
    if (data.CustomString6 != null) this.customString6 = data.CustomString6;
    if (data.CustomDate1 != null) this.customDate1 = (data.CustomDate1 != null ? new Date(data.CustomDate1) : data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = (data.CustomDate2 != null ? new Date(data.CustomDate2) : data.CustomDate2);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryApplicationProxy by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryApplicationProxy to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryApplicationProxy object or null (if id) or an array of EntryApplicationProxy objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryApplicationProxy | null>;
  static async select(param: Partial<Record<keyof EntryApplicationProxy, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryApplicationProxy[]>;
  static async select(param: number | Partial<Record<keyof EntryApplicationProxy, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryApplicationProxy | EntryApplicationProxy[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationProxy/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationProxy`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryApplicationProxy with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryApplicationProxy(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryApplicationProxy(entry));
      }
    }
  }
}

EntryApplicationProxy satisfies StarRezStructureStatic<EntryApplicationProxy>
