// Generated from XML description of Workflow

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Workflow {
  workflowID?: number;
  tableName?: string;
  description?: string;
  workflowOrder?: number;
  dateCreated?: Date;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Workflow");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WorkflowID != null) this.workflowID = (data.WorkflowID != null ? parseInt(data.WorkflowID, 10) : data.WorkflowID);
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.Description != null) this.description = data.Description;
    if (data.WorkflowOrder != null) this.workflowOrder = (data.WorkflowOrder != null ? parseInt(data.WorkflowOrder, 10) : data.WorkflowOrder);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Workflow by its ID or by exact match on other fields.
   * @param param Either the ID of the Workflow to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Workflow object or null (if id) or an array of Workflow objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Workflow | null>;
  static async select(param: Partial<Record<keyof Workflow, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Workflow[]>;
  static async select(param: number | Partial<Record<keyof Workflow, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Workflow | Workflow[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Workflow/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Workflow`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Workflow with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Workflow(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Workflow(entry));
      }
    }
  }
}

Workflow satisfies StarRezStructureStatic<Workflow>
