// Generated from XML description of VMLineUsage

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.VMLineUsageID != null) this.vMLineUsageID = (data.VMLineUsageID != null ? parseInt(data.VMLineUsageID, 10) : data.VMLineUsageID);
    if (data.VMLineUsageDate != null) this.vMLineUsageDate = (data.VMLineUsageDate != null ? new Date(data.VMLineUsageDate) : data.VMLineUsageDate);
    if (data.SiteID != null) this.siteID = (data.SiteID != null ? parseInt(data.SiteID, 10) : data.SiteID);
    if (data.Line != null) this.line = (data.Line != null ? parseInt(data.Line, 10) : data.Line);
    if (data.Duration != null) this.duration = (data.Duration != null ? parseInt(data.Duration, 10) : data.Duration);
    if (data.ExtensionID != null) this.extensionID = (data.ExtensionID != null ? parseInt(data.ExtensionID, 10) : data.ExtensionID);
    if (data.Admin != null) this.admin = data.Admin === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VMLineUsage | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VMLineUsage/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch VMLineUsage with id ${id}`);
    } else {
      return new VMLineUsage(await response.text());
    }
  }
}

VMLineUsage satisfies StarRezStructureStatic<VMLineUsage>
