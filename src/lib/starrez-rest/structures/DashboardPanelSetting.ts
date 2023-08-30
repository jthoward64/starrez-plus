// Generated from XML description of DashboardPanelSetting

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class DashboardPanelSetting {
  dashboardPanelSettingID?: number;
  dashboardPanelID?: number;
  settingName?: string;
  settingValue?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "DashboardPanelSetting");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DashboardPanelSettingID != null) this.dashboardPanelSettingID = parseInt(data.DashboardPanelSettingID, 10);
    if (data.DashboardPanelID != null) this.dashboardPanelID = parseInt(data.DashboardPanelID, 10);
    if (data.SettingName != null) this.settingName = data.SettingName;
    if (data.SettingValue != null) this.settingValue = data.SettingValue;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<DashboardPanelSetting | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/DashboardPanelSetting/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch DashboardPanelSetting with id ${id}`);
    } else {
      return new DashboardPanelSetting(await response.text());
    }
}

}
