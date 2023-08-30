// Generated from XML description of DashboardSharing

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class DashboardSharing {
  dashboardSharingID?: number;
  securityGroupID?: number;
  dashboardID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "DashboardSharing");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DashboardSharingID != null) this.dashboardSharingID = parseInt(data.DashboardSharingID, 10);
    if (data.SecurityGroupID != null) this.securityGroupID = parseInt(data.SecurityGroupID, 10);
    if (data.DashboardID != null) this.dashboardID = parseInt(data.DashboardID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<DashboardSharing | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DashboardSharing/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch DashboardSharing with id ${id}`);
    } else {
      return new DashboardSharing(await response.text());
    }
}

}
