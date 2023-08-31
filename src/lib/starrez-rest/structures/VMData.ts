// Generated from XML description of VMData

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.VMDataID != null) this.vMDataID = (data.VMDataID != null ? parseInt(data.VMDataID, 10) : data.VMDataID);
    if (data.VMDataDate != null) this.vMDataDate = (data.VMDataDate != null ? new Date(data.VMDataDate) : data.VMDataDate);
    if (data.Duration != null) this.duration = (data.Duration != null ? parseInt(data.Duration, 10) : data.Duration);
    if (data.ExtensionID != null) this.extensionID = (data.ExtensionID != null ? parseInt(data.ExtensionID, 10) : data.ExtensionID);
    if (data.VMMailBoxID != null) this.vMMailBoxID = (data.VMMailBoxID != null ? parseInt(data.VMMailBoxID, 10) : data.VMMailBoxID);
    if (data.VMGroupID != null) this.vMGroupID = (data.VMGroupID != null ? parseInt(data.VMGroupID, 10) : data.VMGroupID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMData | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMData/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMData with id ${id}`);
    } else {
      return new VMData(await response.text());
    }
  }
}

VMData satisfies StarRezStructureStatic<VMData>
