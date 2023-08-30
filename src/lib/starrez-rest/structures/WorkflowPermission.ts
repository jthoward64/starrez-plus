// Generated from XML description of WorkflowPermission

import { starRezXmlToJson } from "../parsing.js";

export class WorkflowPermission {
  workflowPermissionID?: number;
  workflowID?: number;
  accessTypeEnum?: unknown;
  securityGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WorkflowPermission");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WorkflowPermissionID != null) this.workflowPermissionID = parseInt(data.WorkflowPermissionID, 10);
    if (data.WorkflowID != null) this.workflowID = parseInt(data.WorkflowID, 10);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = parseInt(data.SecurityGroupID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
