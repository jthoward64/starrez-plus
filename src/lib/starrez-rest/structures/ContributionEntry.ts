// Generated from XML description of ContributionEntry

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ContributionEntry | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ContributionEntry/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ContributionEntry with id ${id}`);
    } else {
      return new ContributionEntry(await response.text());
    }
  }
}

ContributionEntry satisfies StarRezStructureStatic<ContributionEntry>
