// Generated from XML description of Incident

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.IncidentID != null) this.incidentID = parseInt(data.IncidentID, 10);
    if (data.IncidentStatusID != null) this.incidentStatusID = parseInt(data.IncidentStatusID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.IncidentDate != null) this.incidentDate = new Date(data.IncidentDate);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.Title != null) this.title = data.Title;
    if (data.Description != null) this.description = data.Description;
    if (data.ReportNumber != null) this.reportNumber = data.ReportNumber;
    if (data.IncidentManager_EntryID != null) this.incidentManager_EntryID = parseInt(data.IncidentManager_EntryID, 10);
    if (data.ActionRequired != null) this.actionRequired = data.ActionRequired;
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.RoomLocationFloorSuiteID != null) this.roomLocationFloorSuiteID = parseInt(data.RoomLocationFloorSuiteID, 10);
    if (data.RoomBaseID != null) this.roomBaseID = parseInt(data.RoomBaseID, 10);
    if (data.LocationComments != null) this.locationComments = data.LocationComments;
    if (data.IncidentCleryGeographyID != null) this.incidentCleryGeographyID = parseInt(data.IncidentCleryGeographyID, 10);
    if (data.LocationLocked != null) this.locationLocked = data.LocationLocked === 'true';
    if (data.PropertyDamaged != null) this.propertyDamaged = data.PropertyDamaged === 'true';
    if (data.PropertyStolen != null) this.propertyStolen = data.PropertyStolen === 'true';
    if (data.Victim != null) this.victim = data.Victim === 'true';
    if (data.VictimPerpetratorKnown != null) this.victimPerpetratorKnown = data.VictimPerpetratorKnown === 'true';
    if (data.VictimInjured != null) this.victimInjured = data.VictimInjured === 'true';
    if (data.VictimComments != null) this.victimComments = data.VictimComments;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.IncidentGUID != null) this.incidentGUID = data.IncidentGUID;
    if (data.timestamp != null) this.timestamp = new Date(data.timestamp);
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Incident | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Incident/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Incident with id ${id}`);
    } else {
      return new Incident(await response.text());
    }
}

}
