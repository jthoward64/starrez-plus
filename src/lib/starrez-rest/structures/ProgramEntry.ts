// Generated from XML description of ProgramEntry

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ProgramEntry {
  programEntryID?: number;
  programID?: number;
  entryID?: number;
  programEntryStatusEnum?: unknown;
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  workflowStepID?: number;
  assignedTo_SecurityUserID?: number;
  current_WorkflowHistoryID?: number;
  previous_WorkflowHistoryID?: number;
  dateCreated?: Date;
  programEntryGUID?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ProgramEntry");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ProgramEntryID != null) this.programEntryID = (data.ProgramEntryID != null ? parseInt(data.ProgramEntryID, 10) : data.ProgramEntryID);
    if (data.ProgramID != null) this.programID = (data.ProgramID != null ? parseInt(data.ProgramID, 10) : data.ProgramID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ProgramEntryStatusEnum != null) this.programEntryStatusEnum = data.ProgramEntryStatusEnum;
    if (data.CheckInDate != null) this.checkInDate = (data.CheckInDate != null ? new Date(data.CheckInDate) : data.CheckInDate);
    if (data.CheckOutDate != null) this.checkOutDate = (data.CheckOutDate != null ? new Date(data.CheckOutDate) : data.CheckOutDate);
    if (data.WorkflowStepID != null) this.workflowStepID = (data.WorkflowStepID != null ? parseInt(data.WorkflowStepID, 10) : data.WorkflowStepID);
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = (data.AssignedTo_SecurityUserID != null ? parseInt(data.AssignedTo_SecurityUserID, 10) : data.AssignedTo_SecurityUserID);
    if (data.Current_WorkflowHistoryID != null) this.current_WorkflowHistoryID = (data.Current_WorkflowHistoryID != null ? parseInt(data.Current_WorkflowHistoryID, 10) : data.Current_WorkflowHistoryID);
    if (data.Previous_WorkflowHistoryID != null) this.previous_WorkflowHistoryID = (data.Previous_WorkflowHistoryID != null ? parseInt(data.Previous_WorkflowHistoryID, 10) : data.Previous_WorkflowHistoryID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.ProgramEntryGUID != null) this.programEntryGUID = data.ProgramEntryGUID;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ProgramEntry | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ProgramEntry/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ProgramEntry with id ${id}`);
    } else {
      return new ProgramEntry(await response.text());
    }
  }
}

ProgramEntry satisfies StarRezStructureStatic<ProgramEntry>
