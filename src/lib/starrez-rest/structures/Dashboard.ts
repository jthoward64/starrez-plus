// Generated from XML description of Dashboard

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class Dashboard {
  dashboardID?: number;
  description?: string;
  comments?: string;
  owner_SecurityUserID?: number;
  dashboardLayoutTypeEnum?: unknown;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Dashboard");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DashboardID != null) this.dashboardID = parseInt(data.DashboardID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Owner_SecurityUserID != null) this.owner_SecurityUserID = parseInt(data.Owner_SecurityUserID, 10);
    if (data.DashboardLayoutTypeEnum != null) this.dashboardLayoutTypeEnum = data.DashboardLayoutTypeEnum;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Dashboard | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Dashboard/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Dashboard with id ${id}`);
    } else {
      return new Dashboard(await response.text());
    }
}

}
