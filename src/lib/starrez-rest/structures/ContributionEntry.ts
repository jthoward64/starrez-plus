// Generated from XML description of ContributionEntry

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.ContributionEntryID != null) this.contributionEntryID = parseInt(data.ContributionEntryID, 10);
    if (data.ContributionID != null) this.contributionID = parseInt(data.ContributionID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.InvolvementType != null) this.involvementType = data.InvolvementType;
    if (data.InvolvementComments != null) this.involvementComments = data.InvolvementComments;
    if (data.WorkflowStepID != null) this.workflowStepID = parseInt(data.WorkflowStepID, 10);
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = parseInt(data.AssignedTo_SecurityUserID, 10);
    if (data.Current_WorkflowHistoryID != null) this.current_WorkflowHistoryID = parseInt(data.Current_WorkflowHistoryID, 10);
    if (data.Previous_WorkflowHistoryID != null) this.previous_WorkflowHistoryID = parseInt(data.Previous_WorkflowHistoryID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ContributionEntry | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ContributionEntry/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ContributionEntry with id ${id}`);
    } else {
      return new ContributionEntry(await response.text());
    }
}

}
