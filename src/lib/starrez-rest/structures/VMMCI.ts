// Generated from XML description of VMMCI

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class VMMCI {
  vMMCIID?: number;
  siteID?: number;
  channelNumber?: number;
  callReason?: number;
  callOriginator?: number;
  divertingExtension?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMMCI");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMMCIID != null) this.vMMCIID = (data.VMMCIID != null ? parseInt(data.VMMCIID, 10) : data.VMMCIID);
    if (data.SiteID != null) this.siteID = (data.SiteID != null ? parseInt(data.SiteID, 10) : data.SiteID);
    if (data.ChannelNumber != null) this.channelNumber = (data.ChannelNumber != null ? parseInt(data.ChannelNumber, 10) : data.ChannelNumber);
    if (data.CallReason != null) this.callReason = (data.CallReason != null ? parseInt(data.CallReason, 10) : data.CallReason);
    if (data.CallOriginator != null) this.callOriginator = (data.CallOriginator != null ? parseInt(data.CallOriginator, 10) : data.CallOriginator);
    if (data.DivertingExtension != null) this.divertingExtension = (data.DivertingExtension != null ? parseInt(data.DivertingExtension, 10) : data.DivertingExtension);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMMCI | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMMCI/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VMMCI with id ${id}`);
    } else {
      return new VMMCI(await response.text());
    }
  }
}

VMMCI satisfies StarRezStructureStatic<VMMCI>
