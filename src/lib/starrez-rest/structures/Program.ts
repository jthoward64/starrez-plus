// Generated from XML description of Program

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Program {
  programID?: number;
  title?: string;
  description?: string;
  goal?: string;
  purpose?: string;
  benefit?: string;
  community?: string;
  programCost?: string;
  amountChargeToEntry?: string;
  chargeItemID?: number;
  termSessionID?: number;
  categoryID?: number;
  programTypeID?: number;
  programSubTypeID?: number;
  dateStart?: Date;
  dateEnd?: Date;
  dateApproved?: Date | null;
  attendeeEstimate?: number;
  attendeeMaximum?: number;
  maxItemsPerEntry?: number;
  programEvaluationTypeID?: number;
  attendeeActual?: number;
  evaluationHighlight?: string;
  evaluationImprovements?: string;
  viewOnWeb?: boolean;
  webImageLocation?: string;
  webDescription?: string;
  webComments?: string;
  activeDateStart?: Date | null;
  activeDateEnd?: Date | null;
  roomLocationID?: number;
  roomLocationFloorSuiteID?: number;
  roomBaseID?: number;
  locationComments?: string;
  printReportOnCheckIn?: boolean;
  checkIn_ReportID?: number;
  comments?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  timestamp?: Date;
  workflowStepID?: number;
  assignedTo_SecurityUserID?: number;
  current_WorkflowHistoryID?: number;
  previous_WorkflowHistoryID?: number;
  onlyAttendeesCanCheckIn?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Program");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ProgramID != null) this.programID = (data.ProgramID != null ? parseInt(data.ProgramID, 10) : data.ProgramID);
    if (data.Title != null) this.title = data.Title;
    if (data.Description != null) this.description = data.Description;
    if (data.Goal != null) this.goal = data.Goal;
    if (data.Purpose != null) this.purpose = data.Purpose;
    if (data.Benefit != null) this.benefit = data.Benefit;
    if (data.Community != null) this.community = data.Community;
    if (data.ProgramCost != null) this.programCost = data.ProgramCost;
    if (data.AmountChargeToEntry != null) this.amountChargeToEntry = data.AmountChargeToEntry;
    if (data.ChargeItemID != null) this.chargeItemID = (data.ChargeItemID != null ? parseInt(data.ChargeItemID, 10) : data.ChargeItemID);
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.ProgramTypeID != null) this.programTypeID = (data.ProgramTypeID != null ? parseInt(data.ProgramTypeID, 10) : data.ProgramTypeID);
    if (data.ProgramSubTypeID != null) this.programSubTypeID = (data.ProgramSubTypeID != null ? parseInt(data.ProgramSubTypeID, 10) : data.ProgramSubTypeID);
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.DateApproved != null) this.dateApproved = (data.DateApproved != null ? new Date(data.DateApproved) : data.DateApproved);
    if (data.AttendeeEstimate != null) this.attendeeEstimate = (data.AttendeeEstimate != null ? parseInt(data.AttendeeEstimate, 10) : data.AttendeeEstimate);
    if (data.AttendeeMaximum != null) this.attendeeMaximum = (data.AttendeeMaximum != null ? parseInt(data.AttendeeMaximum, 10) : data.AttendeeMaximum);
    if (data.MaxItemsPerEntry != null) this.maxItemsPerEntry = (data.MaxItemsPerEntry != null ? parseInt(data.MaxItemsPerEntry, 10) : data.MaxItemsPerEntry);
    if (data.ProgramEvaluationTypeID != null) this.programEvaluationTypeID = (data.ProgramEvaluationTypeID != null ? parseInt(data.ProgramEvaluationTypeID, 10) : data.ProgramEvaluationTypeID);
    if (data.AttendeeActual != null) this.attendeeActual = (data.AttendeeActual != null ? parseInt(data.AttendeeActual, 10) : data.AttendeeActual);
    if (data.EvaluationHighlight != null) this.evaluationHighlight = data.EvaluationHighlight;
    if (data.EvaluationImprovements != null) this.evaluationImprovements = data.EvaluationImprovements;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebImageLocation != null) this.webImageLocation = data.WebImageLocation;
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.ActiveDateStart != null) this.activeDateStart = (data.ActiveDateStart != null ? new Date(data.ActiveDateStart) : data.ActiveDateStart);
    if (data.ActiveDateEnd != null) this.activeDateEnd = (data.ActiveDateEnd != null ? new Date(data.ActiveDateEnd) : data.ActiveDateEnd);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.RoomLocationFloorSuiteID != null) this.roomLocationFloorSuiteID = (data.RoomLocationFloorSuiteID != null ? parseInt(data.RoomLocationFloorSuiteID, 10) : data.RoomLocationFloorSuiteID);
    if (data.RoomBaseID != null) this.roomBaseID = (data.RoomBaseID != null ? parseInt(data.RoomBaseID, 10) : data.RoomBaseID);
    if (data.LocationComments != null) this.locationComments = data.LocationComments;
    if (data.PrintReportOnCheckIn != null) this.printReportOnCheckIn = data.PrintReportOnCheckIn === 'true';
    if (data.CheckIn_ReportID != null) this.checkIn_ReportID = (data.CheckIn_ReportID != null ? parseInt(data.CheckIn_ReportID, 10) : data.CheckIn_ReportID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.timestamp != null) this.timestamp = (data.timestamp != null ? new Date(data.timestamp) : data.timestamp);
    if (data.WorkflowStepID != null) this.workflowStepID = (data.WorkflowStepID != null ? parseInt(data.WorkflowStepID, 10) : data.WorkflowStepID);
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = (data.AssignedTo_SecurityUserID != null ? parseInt(data.AssignedTo_SecurityUserID, 10) : data.AssignedTo_SecurityUserID);
    if (data.Current_WorkflowHistoryID != null) this.current_WorkflowHistoryID = (data.Current_WorkflowHistoryID != null ? parseInt(data.Current_WorkflowHistoryID, 10) : data.Current_WorkflowHistoryID);
    if (data.Previous_WorkflowHistoryID != null) this.previous_WorkflowHistoryID = (data.Previous_WorkflowHistoryID != null ? parseInt(data.Previous_WorkflowHistoryID, 10) : data.Previous_WorkflowHistoryID);
    if (data.OnlyAttendeesCanCheckIn != null) this.onlyAttendeesCanCheckIn = data.OnlyAttendeesCanCheckIn === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Program | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Program/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Program with id ${id}`);
    } else {
      return new Program(await response.text());
    }
  }
}

Program satisfies StarRezStructureStatic<Program>
