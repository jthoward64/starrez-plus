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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntrySDAS | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntrySDAS/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntrySDAS with id ${id}`);
    } else {
      return new EntrySDAS(await response.text());
    }
  }
}

EntrySDAS satisfies StarRezStructureStatic<EntrySDAS>
