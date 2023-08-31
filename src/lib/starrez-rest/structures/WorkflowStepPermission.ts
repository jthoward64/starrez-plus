// Generated from XML description of WorkflowStepPermission

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.WorkflowStepPermissionID != null) this.workflowStepPermissionID = (data.WorkflowStepPermissionID != null ? parseInt(data.WorkflowStepPermissionID, 10) : data.WorkflowStepPermissionID);
    if (data.WorkflowStepID != null) this.workflowStepID = (data.WorkflowStepID != null ? parseInt(data.WorkflowStepID, 10) : data.WorkflowStepID);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = (data.SecurityGroupID != null ? parseInt(data.SecurityGroupID, 10) : data.SecurityGroupID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WorkflowStepPermission | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WorkflowStepPermission/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WorkflowStepPermission with id ${id}`);
    } else {
      return new WorkflowStepPermission(await response.text());
    }
  }
}

WorkflowStepPermission satisfies StarRezStructureStatic<WorkflowStepPermission>
