// Generated from XML description of WorkflowPermission

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.WorkflowPermissionID != null) this.workflowPermissionID = (data.WorkflowPermissionID != null ? parseInt(data.WorkflowPermissionID, 10) : data.WorkflowPermissionID);
    if (data.WorkflowID != null) this.workflowID = (data.WorkflowID != null ? parseInt(data.WorkflowID, 10) : data.WorkflowID);
    if (data.AccessTypeEnum != null) this.accessTypeEnum = data.AccessTypeEnum;
    if (data.SecurityGroupID != null) this.securityGroupID = (data.SecurityGroupID != null ? parseInt(data.SecurityGroupID, 10) : data.SecurityGroupID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a WorkflowPermission by its ID or by exact match on other fields.
   * @param param Either the ID of the WorkflowPermission to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single WorkflowPermission object or null (if id) or an array of WorkflowPermission objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<WorkflowPermission | null>;
  static async select(param: Partial<Record<keyof WorkflowPermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WorkflowPermission[]>;
  static async select(param: number | Partial<Record<keyof WorkflowPermission, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<WorkflowPermission | WorkflowPermission[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WorkflowPermission/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WorkflowPermission`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch WorkflowPermission with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new WorkflowPermission(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new WorkflowPermission(entry));
      }
    }
  }
}

WorkflowPermission satisfies StarRezStructureStatic<WorkflowPermission>
