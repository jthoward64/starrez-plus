// Generated from XML description of VMData

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class VMData {
  vMDataID?: number;
  vMDataDate?: Date;
  duration?: number;
  extensionID?: number;
  vMMailBoxID?: number;
  vMGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMData");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMDataID != null) this.vMDataID = parseInt(data.VMDataID, 10);
    if (data.VMDataDate != null) this.vMDataDate = new Date(data.VMDataDate);
    if (data.Duration != null) this.duration = parseInt(data.Duration, 10);
    if (data.ExtensionID != null) this.extensionID = parseInt(data.ExtensionID, 10);
    if (data.VMMailBoxID != null) this.vMMailBoxID = parseInt(data.VMMailBoxID, 10);
    if (data.VMGroupID != null) this.vMGroupID = parseInt(data.VMGroupID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMData | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMData/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch VMData with id ${id}`);
    } else {
      return new VMData(await response.text());
    }
}

}