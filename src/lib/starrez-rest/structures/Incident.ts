// Generated from XML description of Incident

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Incident {
  incidentID?: number;
  incidentStatusID?: number;
  categoryID?: number;
  incidentDate?: Date;
  viewOnWeb?: boolean;
  title?: string;
  description?: string;
  reportNumber?: string;
  incidentManager_EntryID?: number;
  actionRequired?: string;
  roomLocationID?: number;
  roomLocationFloorSuiteID?: number;
  roomBaseID?: number;
  locationComments?: string;
  incidentCleryGeographyID?: number;
  locationLocked?: boolean;
  propertyDamaged?: boolean;
  propertyStolen?: boolean;
  victim?: boolean;
  victimPerpetratorKnown?: boolean;
  victimInjured?: boolean;
  victimComments?: string;
  comments?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  incidentGUID?: string;
  timestamp?: Date;
  workflowStepID?: number;
  assignedTo_SecurityUserID?: number;
  current_WorkflowHistoryID?: number;
  previous_WorkflowHistoryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Incident");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentID != null) this.incidentID = (data.IncidentID != null ? parseInt(data.IncidentID, 10) : data.IncidentID);
    if (data.IncidentStatusID != null) this.incidentStatusID = (data.IncidentStatusID != null ? parseInt(data.IncidentStatusID, 10) : data.IncidentStatusID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.IncidentDate != null) this.incidentDate = (data.IncidentDate != null ? new Date(data.IncidentDate) : data.IncidentDate);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.Title != null) this.title = data.Title;
    if (data.Description != null) this.description = data.Description;
    if (data.ReportNumber != null) this.reportNumber = data.ReportNumber;
    if (data.IncidentManager_EntryID != null) this.incidentManager_EntryID = (data.IncidentManager_EntryID != null ? parseInt(data.IncidentManager_EntryID, 10) : data.IncidentManager_EntryID);
    if (data.ActionRequired != null) this.actionRequired = data.ActionRequired;
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.RoomLocationFloorSuiteID != null) this.roomLocationFloorSuiteID = (data.RoomLocationFloorSuiteID != null ? parseInt(data.RoomLocationFloorSuiteID, 10) : data.RoomLocationFloorSuiteID);
    if (data.RoomBaseID != null) this.roomBaseID = (data.RoomBaseID != null ? parseInt(data.RoomBaseID, 10) : data.RoomBaseID);
    if (data.LocationComments != null) this.locationComments = data.LocationComments;
    if (data.IncidentCleryGeographyID != null) this.incidentCleryGeographyID = (data.IncidentCleryGeographyID != null ? parseInt(data.IncidentCleryGeographyID, 10) : data.IncidentCleryGeographyID);
    if (data.LocationLocked != null) this.locationLocked = data.LocationLocked === 'true';
    if (data.PropertyDamaged != null) this.propertyDamaged = data.PropertyDamaged === 'true';
    if (data.PropertyStolen != null) this.propertyStolen = data.PropertyStolen === 'true';
    if (data.Victim != null) this.victim = data.Victim === 'true';
    if (data.VictimPerpetratorKnown != null) this.victimPerpetratorKnown = data.VictimPerpetratorKnown === 'true';
    if (data.VictimInjured != null) this.victimInjured = data.VictimInjured === 'true';
    if (data.VictimComments != null) this.victimComments = data.VictimComments;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.IncidentGUID != null) this.incidentGUID = data.IncidentGUID;
    if (data.timestamp != null) this.timestamp = (data.timestamp != null ? new Date(data.timestamp) : data.timestamp);
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Incident | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Incident/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Incident with id ${id}`);
    } else {
      return new Incident(await response.text());
    }
  }
}

Incident satisfies StarRezStructureStatic<Incident>
