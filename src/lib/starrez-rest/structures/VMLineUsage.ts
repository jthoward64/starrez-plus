// Generated from XML description of VMLineUsage

import { starRezXmlToJson } from "../parsing.js";

export class VMLineUsage {
  vMLineUsageID?: number;
  vMLineUsageDate?: Date;
  siteID?: number;
  line?: number;
  duration?: number;
  extensionID?: number;
  admin?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VMLineUsage");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VMLineUsageID != null) this.vMLineUsageID = parseInt(data.VMLineUsageID, 10);
    if (data.VMLineUsageDate != null) this.vMLineUsageDate = new Date(data.VMLineUsageDate);
    if (data.SiteID != null) this.siteID = parseInt(data.SiteID, 10);
    if (data.Line != null) this.line = parseInt(data.Line, 10);
    if (data.Duration != null) this.duration = parseInt(data.Duration, 10);
    if (data.ExtensionID != null) this.extensionID = parseInt(data.ExtensionID, 10);
    if (data.Admin != null) this.admin = data.Admin === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
