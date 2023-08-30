// Generated from XML description of SDASData

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.SDASDataID != null) this.sDASDataID = parseInt(data.SDASDataID, 10);
    if (data.SDASDataDate != null) this.sDASDataDate = new Date(data.SDASDataDate);
    if (data.IPAddress != null) this.iPAddress = data.IPAddress;
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.Duration != null) this.duration = parseInt(data.Duration, 10);
    if (data.Megabyte != null) this.megabyte = parseFloat(data.Megabyte);
    if (data.Charge != null) this.charge = data.Charge;
    if (data.Allowance != null) this.allowance = data.Allowance;
    if (data.PlanAllowance != null) this.planAllowance = parseFloat(data.PlanAllowance);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<SDASData | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SDASData/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch SDASData with id ${id}`);
    } else {
      return new SDASData(await response.text());
    }
}

}
