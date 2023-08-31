// Generated from XML description of SDASData

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class SDASData {
  sDASDataID?: number;
  sDASDataDate?: Date;
  iPAddress?: string;
  entryID?: number;
  duration?: number;
  megabyte?: number;
  charge?: string;
  allowance?: string;
  planAllowance?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "SDASData");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.SDASDataID != null) this.sDASDataID = (data.SDASDataID != null ? parseInt(data.SDASDataID, 10) : data.SDASDataID);
    if (data.SDASDataDate != null) this.sDASDataDate = (data.SDASDataDate != null ? new Date(data.SDASDataDate) : data.SDASDataDate);
    if (data.IPAddress != null) this.iPAddress = data.IPAddress;
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.Duration != null) this.duration = (data.Duration != null ? parseInt(data.Duration, 10) : data.Duration);
    if (data.Megabyte != null) this.megabyte = (data.Megabyte != null ? parseFloat(data.Megabyte) : data.Megabyte);
    if (data.Charge != null) this.charge = data.Charge;
    if (data.Allowance != null) this.allowance = data.Allowance;
    if (data.PlanAllowance != null) this.planAllowance = (data.PlanAllowance != null ? parseFloat(data.PlanAllowance) : data.PlanAllowance);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<SDASData | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SDASData/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch SDASData with id ${id}`);
    } else {
      return new SDASData(await response.text());
    }
  }
}

SDASData satisfies StarRezStructureStatic<SDASData>
