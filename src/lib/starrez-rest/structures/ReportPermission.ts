// Generated from XML description of ReportPermission

import { starRezXmlToJson } from "../parsing.js";

export class ReportPermission {
  reportPermissionID?: number;
  reportID?: number;
  accessTypeEnum?: unknown;
  securityGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ReportPermission");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ReportPermissionID != null) this.reportPermissionID = parseInt(data.ReportPermissionID, 10);
    if (data.ReportID != null) this.reportID = parseInt(data.ReportID, 10);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = parseInt(data.SecurityGroupID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
