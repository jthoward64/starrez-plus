// Generated from XML description of ReportSetting

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class ReportSetting {
  reportSettingID?: number;
  reportID?: number;
  controlName?: string;
  settingValue?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ReportSetting");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ReportSettingID != null) this.reportSettingID = parseInt(data.ReportSettingID, 10);
    if (data.ReportID != null) this.reportID = parseInt(data.ReportID, 10);
    if (data.ControlName != null) this.controlName = data.ControlName;
    if (data.SettingValue != null) this.settingValue = data.SettingValue;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ReportSetting | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ReportSetting/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ReportSetting with id ${id}`);
    } else {
      return new ReportSetting(await response.text());
    }
}

}