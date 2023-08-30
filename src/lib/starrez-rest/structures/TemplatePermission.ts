// Generated from XML description of TemplatePermission

import { starRezXmlToJson } from "../parsing.js";

export class TemplatePermission {
  templatePermissionID?: number;
  templateID?: number;
  accessTypeEnum?: unknown;
  securityGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "TemplatePermission");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TemplatePermissionID != null) this.templatePermissionID = parseInt(data.TemplatePermissionID, 10);
    if (data.TemplateID != null) this.templateID = parseInt(data.TemplateID, 10);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = parseInt(data.SecurityGroupID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
