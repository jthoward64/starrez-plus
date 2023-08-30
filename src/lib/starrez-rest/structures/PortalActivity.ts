// Generated from XML description of PortalActivity

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class PortalActivity {
  portalActivityID?: number;
  portalSiteID?: number;
  webServerName?: string;
  dateCreated?: Date;
  loggedInUsers?: number;
  activeUsers?: number;
  total_PortalActivityID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalActivity");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalActivityID != null) this.portalActivityID = parseInt(data.PortalActivityID, 10);
    if (data.PortalSiteID != null) this.portalSiteID = parseInt(data.PortalSiteID, 10);
    if (data.WebServerName != null) this.webServerName = data.WebServerName;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.LoggedInUsers != null) this.loggedInUsers = parseInt(data.LoggedInUsers, 10);
    if (data.ActiveUsers != null) this.activeUsers = parseInt(data.ActiveUsers, 10);
    if (data.Total_PortalActivityID != null) this.total_PortalActivityID = parseInt(data.Total_PortalActivityID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<PortalActivity | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/PortalActivity/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch PortalActivity with id ${id}`);
    } else {
      return new PortalActivity(await response.text());
    }
  }
}

PortalActivity satisfies StarRezStructureStatic<PortalActivity>
