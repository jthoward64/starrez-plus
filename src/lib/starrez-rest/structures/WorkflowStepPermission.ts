// Generated from XML description of WorkflowStepPermission

import { starRezXmlToJson } from "../parsing.js";

export class WorkflowStepPermission {
  workflowStepPermissionID?: number;
  workflowStepID?: number;
  accessTypeEnum?: unknown;
  securityGroupID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WorkflowStepPermission");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WorkflowStepPermissionID != null) this.workflowStepPermissionID = parseInt(data.WorkflowStepPermissionID, 10);
    if (data.WorkflowStepID != null) this.workflowStepID = parseInt(data.WorkflowStepID, 10);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = parseInt(data.SecurityGroupID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
