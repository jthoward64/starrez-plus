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

    if (data.ProgramID != null) this.programID = parseInt(data.ProgramID, 10);
    if (data.Title != null) this.title = data.Title;
    if (data.Description != null) this.description = data.Description;
    if (data.Goal != null) this.goal = data.Goal;
    if (data.Purpose != null) this.purpose = data.Purpose;
    if (data.Benefit != null) this.benefit = data.Benefit;
    if (data.Community != null) this.community = data.Community;
    if (data.ProgramCost != null) this.programCost = data.ProgramCost;
    if (data.AmountChargeToEntry != null) this.amountChargeToEntry = data.AmountChargeToEntry;
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.ProgramTypeID != null) this.programTypeID = parseInt(data.ProgramTypeID, 10);
    if (data.ProgramSubTypeID != null) this.programSubTypeID = parseInt(data.ProgramSubTypeID, 10);
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.DateApproved != null) this.dateApproved = new Date(data.DateApproved);
    if (data.AttendeeEstimate != null) this.attendeeEstimate = parseInt(data.AttendeeEstimate, 10);
    if (data.AttendeeMaximum != null) this.attendeeMaximum = parseInt(data.AttendeeMaximum, 10);
    if (data.MaxItemsPerEntry != null) this.maxItemsPerEntry = parseInt(data.MaxItemsPerEntry, 10);
    if (data.ProgramEvaluationTypeID != null) this.programEvaluationTypeID = parseInt(data.ProgramEvaluationTypeID, 10);
    if (data.AttendeeActual != null) this.attendeeActual = parseInt(data.AttendeeActual, 10);
    if (data.EvaluationHighlight != null) this.evaluationHighlight = data.EvaluationHighlight;
    if (data.EvaluationImprovements != null) this.evaluationImprovements = data.EvaluationImprovements;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebImageLocation != null) this.webImageLocation = data.WebImageLocation;
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.ActiveDateStart != null) this.activeDateStart = new Date(data.ActiveDateStart);
    if (data.ActiveDateEnd != null) this.activeDateEnd = new Date(data.ActiveDateEnd);
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.RoomLocationFloorSuiteID != null) this.roomLocationFloorSuiteID = parseInt(data.RoomLocationFloorSuiteID, 10);
    if (data.RoomBaseID != null) this.roomBaseID = parseInt(data.RoomBaseID, 10);
    if (data.LocationComments != null) this.locationComments = data.LocationComments;
    if (data.PrintReportOnCheckIn != null) this.printReportOnCheckIn = data.PrintReportOnCheckIn === 'true';
    if (data.CheckIn_ReportID != null) this.checkIn_ReportID = parseInt(data.CheckIn_ReportID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.timestamp != null) this.timestamp = new Date(data.timestamp);
    if (data.WorkflowStepID != null) this.workflowStepID = parseInt(data.WorkflowStepID, 10);
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = parseInt(data.AssignedTo_SecurityUserID, 10);
    if (data.Current_WorkflowHistoryID != null) this.current_WorkflowHistoryID = parseInt(data.Current_WorkflowHistoryID, 10);
    if (data.Previous_WorkflowHistoryID != null) this.previous_WorkflowHistoryID = parseInt(data.Previous_WorkflowHistoryID, 10);
    if (data.OnlyAttendeesCanCheckIn != null) this.onlyAttendeesCanCheckIn = data.OnlyAttendeesCanCheckIn === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

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
