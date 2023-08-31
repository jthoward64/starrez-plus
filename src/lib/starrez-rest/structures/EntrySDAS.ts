// Generated from XML description of EntrySDAS

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntrySDAS {
  entrySDASID?: number;
  entryID?: number;
  sDASChargeRateID?: number;
  enabled?: boolean;
  userName?: string;
  password?: string;
  accessLevel?: string;
  machineDescription?: string;
  machineType?: string;
  iPAddress?: string;
  mACAddress?: string;
  operatingSystem?: string;
  dateEnabled?: Date;
  dateLastReset?: Date;
  monthlyAllowance?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntrySDAS");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntrySDASID != null) this.entrySDASID = (data.EntrySDASID != null ? parseInt(data.EntrySDASID, 10) : data.EntrySDASID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.SDASChargeRateID != null) this.sDASChargeRateID = (data.SDASChargeRateID != null ? parseInt(data.SDASChargeRateID, 10) : data.SDASChargeRateID);
    if (data.Enabled != null) this.enabled = data.Enabled === 'true';
    if (data.UserName != null) this.userName = data.UserName;
    if (data.Password != null) this.password = data.Password;
    if (data.AccessLevel != null) this.accessLevel = data.AccessLevel;
    if (data.MachineDescription != null) this.machineDescription = data.MachineDescription;
    if (data.MachineType != null) this.machineType = data.MachineType;
    if (data.IPAddress != null) this.iPAddress = data.IPAddress;
    if (data.MACAddress != null) this.mACAddress = data.MACAddress;
    if (data.OperatingSystem != null) this.operatingSystem = data.OperatingSystem;
    if (data.DateEnabled != null) this.dateEnabled = (data.DateEnabled != null ? new Date(data.DateEnabled) : data.DateEnabled);
    if (data.DateLastReset != null) this.dateLastReset = (data.DateLastReset != null ? new Date(data.DateLastReset) : data.DateLastReset);
    if (data.MonthlyAllowance != null) this.monthlyAllowance = data.MonthlyAllowance;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntrySDAS by its ID or by exact match on other fields.
   * @param param Either the ID of the EntrySDAS to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntrySDAS object or null (if id) or an array of EntrySDAS objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntrySDAS | null>;
  static async select(param: Partial<Record<keyof EntrySDAS, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntrySDAS[]>;
  static async select(param: number | Partial<Record<keyof EntrySDAS, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntrySDAS | EntrySDAS[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntrySDAS/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntrySDAS`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntrySDAS with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntrySDAS(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntrySDAS(entry));
      }
    }
  }
}

EntrySDAS satisfies StarRezStructureStatic<EntrySDAS>
