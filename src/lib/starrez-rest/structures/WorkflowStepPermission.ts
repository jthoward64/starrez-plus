// Generated from XML description of WorkflowStepPermission

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a WorkflowStepPermission by its ID or by exact match on other fields.
   * @param param Either the ID of the WorkflowStepPermission to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WorkflowStepPermission object or null (if id) or an array of WorkflowStepPermission objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WorkflowStepPermission | null>;
  static async select(param: Partial<Record<keyof WorkflowStepPermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WorkflowStepPermission[]>;
  static async select(param: number | Partial<Record<keyof WorkflowStepPermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WorkflowStepPermission | WorkflowStepPermission[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WorkflowStepPermission/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WorkflowStepPermission`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WorkflowStepPermission with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WorkflowStepPermission(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WorkflowStepPermission(entry));
      }
    }
  }
}

WorkflowStepPermission satisfies StarRezStructureStatic<WorkflowStepPermission>
