// Generated from XML description of CategoryPermission

import { starRezXmlToJson } from "../parsing.js";

export class CategoryPermission {
  categoryPermissionID?: number;
  categoryID?: number;
  accessTypeEnum?: unknown;
  securityGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "CategoryPermission");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CategoryPermissionID != null) this.categoryPermissionID = parseInt(data.CategoryPermissionID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = parseInt(data.SecurityGroupID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
