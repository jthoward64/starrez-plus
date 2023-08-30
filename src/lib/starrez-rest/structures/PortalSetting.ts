// Generated from XML description of PortalSetting

import { starRezXmlToJson } from "../parsing.js";

export class PortalSetting {
  portalSettingID?: number;
  tableID?: number;
  tableName?: string;
  description?: string;
  value?: string;
  templateValue?: string;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "PortalSetting");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PortalSettingID != null) this.portalSettingID = parseInt(data.PortalSettingID, 10);
    if (data.TableID != null) this.tableID = parseInt(data.TableID, 10);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Description != null) this.description = data.Description;
    if (data.Value != null) this.value = data.Value;
    if (data.TemplateValue != null) this.templateValue = data.TemplateValue;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
