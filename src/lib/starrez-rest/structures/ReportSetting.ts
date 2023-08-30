// Generated from XML description of ReportSetting

import { starRezXmlToJson } from "../parsing.js";

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
}
