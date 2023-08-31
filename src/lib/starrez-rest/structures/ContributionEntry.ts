// Generated from XML description of ContributionEntry

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ContributionEntry {
  contributionEntryID?: number;
  contributionID?: number;
  entryID?: number;
  involvementType?: string;
  involvementComments?: string;
  workflowStepID?: number;
  assignedTo_SecurityUserID?: number;
  current_WorkflowHistoryID?: number;
  previous_WorkflowHistoryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ContributionEntry");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ContributionEntryID != null) this.contributionEntryID = (data.ContributionEntryID != null ? parseInt(data.ContributionEntryID, 10) : data.ContributionEntryID);
    if (data.ContributionID != null) this.contributionID = (data.ContributionID != null ? parseInt(data.ContributionID, 10) : data.ContributionID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.InvolvementType != null) this.involvementType = data.InvolvementType;
    if (data.InvolvementComments != null) this.involvementComments = data.InvolvementComments;
    if (data.WorkflowStepID != null) this.workflowStepID = (data.WorkflowStepID != null ? parseInt(data.WorkflowStepID, 10) : data.WorkflowStepID);
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = (data.AssignedTo_SecurityUserID != null ? parseInt(data.AssignedTo_SecurityUserID, 10) : data.AssignedTo_SecurityUserID);
    if (data.Current_WorkflowHistoryID != null) this.current_WorkflowHistoryID = (data.Current_WorkflowHistoryID != null ? parseInt(data.Current_WorkflowHistoryID, 10) : data.Current_WorkflowHistoryID);
    if (data.Previous_WorkflowHistoryID != null) this.previous_WorkflowHistoryID = (data.Previous_WorkflowHistoryID != null ? parseInt(data.Previous_WorkflowHistoryID, 10) : data.Previous_WorkflowHistoryID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a ContributionEntry by its ID or by exact match on other fields.
   * @param param Either the ID of the ContributionEntry to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ContributionEntry object or null (if id) or an array of ContributionEntry objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ContributionEntry | null>;
  static async select(param: Partial<Record<keyof ContributionEntry, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ContributionEntry[]>;
  static async select(param: number | Partial<Record<keyof ContributionEntry, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ContributionEntry | ContributionEntry[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ContributionEntry/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ContributionEntry`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ContributionEntry with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ContributionEntry(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ContributionEntry(entry));
      }
    }
  }
}

ContributionEntry satisfies StarRezStructureStatic<ContributionEntry>
