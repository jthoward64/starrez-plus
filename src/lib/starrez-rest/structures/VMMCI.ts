// Generated from XML description of VMMCI

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.VMMCIID != null) this.vMMCIID = parseInt(data.VMMCIID, 10);
    if (data.SiteID != null) this.siteID = parseInt(data.SiteID, 10);
    if (data.ChannelNumber != null) this.channelNumber = parseInt(data.ChannelNumber, 10);
    if (data.CallReason != null) this.callReason = parseInt(data.CallReason, 10);
    if (data.CallOriginator != null) this.callOriginator = parseInt(data.CallOriginator, 10);
    if (data.DivertingExtension != null) this.divertingExtension = parseInt(data.DivertingExtension, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
