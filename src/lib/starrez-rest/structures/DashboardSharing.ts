// Generated from XML description of DashboardSharing

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.DashboardSharingID != null) this.dashboardSharingID = (data.DashboardSharingID != null ? parseInt(data.DashboardSharingID, 10) : data.DashboardSharingID);
    if (data.SecurityGroupID != null) this.securityGroupID = (data.SecurityGroupID != null ? parseInt(data.SecurityGroupID, 10) : data.SecurityGroupID);
    if (data.DashboardID != null) this.dashboardID = (data.DashboardID != null ? parseInt(data.DashboardID, 10) : data.DashboardID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<DashboardSharing | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DashboardSharing/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch DashboardSharing with id ${id}`);
    } else {
      return new DashboardSharing(await response.text());
    }
  }
}

DashboardSharing satisfies StarRezStructureStatic<DashboardSharing>
