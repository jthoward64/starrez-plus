// Generated from XML description of ProgramEntry

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.ProgramEntryID != null) this.programEntryID = parseInt(data.ProgramEntryID, 10);
    if (data.ProgramID != null) this.programID = parseInt(data.ProgramID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ProgramEntryStatusEnum != null) this.programEntryStatusEnum = data.ProgramEntryStatusEnum;
    if (data.CheckInDate != null) this.checkInDate = new Date(data.CheckInDate);
    if (data.CheckOutDate != null) this.checkOutDate = new Date(data.CheckOutDate);
    if (data.WorkflowStepID != null) this.workflowStepID = parseInt(data.WorkflowStepID, 10);
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = parseInt(data.AssignedTo_SecurityUserID, 10);
    if (data.Current_WorkflowHistoryID != null) this.current_WorkflowHistoryID = parseInt(data.Current_WorkflowHistoryID, 10);
    if (data.Previous_WorkflowHistoryID != null) this.previous_WorkflowHistoryID = parseInt(data.Previous_WorkflowHistoryID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.ProgramEntryGUID != null) this.programEntryGUID = data.ProgramEntryGUID;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
