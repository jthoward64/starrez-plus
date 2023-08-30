// Generated from XML description of Contribution

import { starRezXmlToJson } from "../parsing.js";

export class Contribution {
  contributionID?: number;
  categoryID?: number;
  contributionDate?: Date;
  roomLocationID?: number;
  description?: string;
  locationComments?: string;
  contributionTypeID?: number;
  contributionSubTypeID?: number;
  reportNumber?: string;
  comments?: string;
  resolution?: string;
  workflowStepID?: number;
  assignedTo_SecurityUserID?: number;
  current_WorkflowHistoryID?: number;
  previous_WorkflowHistoryID?: number;
  dateCreated?: Date;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  reportedByName?: string;
  reportedByEmail?: string;
  reportedByPhone?: string;
  reportedByRelationship?: string;
  reportedByContact?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Contribution");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ContributionID != null) this.contributionID = parseInt(data.ContributionID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.ContributionDate != null) this.contributionDate = new Date(data.ContributionDate);
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.LocationComments != null) this.locationComments = data.LocationComments;
    if (data.ContributionTypeID != null) this.contributionTypeID = parseInt(data.ContributionTypeID, 10);
    if (data.ContributionSubTypeID != null) this.contributionSubTypeID = parseInt(data.ContributionSubTypeID, 10);
    if (data.ReportNumber != null) this.reportNumber = data.ReportNumber;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Resolution != null) this.resolution = data.Resolution;
    if (data.WorkflowStepID != null) this.workflowStepID = parseInt(data.WorkflowStepID, 10);
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = parseInt(data.AssignedTo_SecurityUserID, 10);
    if (data.Current_WorkflowHistoryID != null) this.current_WorkflowHistoryID = parseInt(data.Current_WorkflowHistoryID, 10);
    if (data.Previous_WorkflowHistoryID != null) this.previous_WorkflowHistoryID = parseInt(data.Previous_WorkflowHistoryID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.ReportedByName != null) this.reportedByName = data.ReportedByName;
    if (data.ReportedByEmail != null) this.reportedByEmail = data.ReportedByEmail;
    if (data.ReportedByPhone != null) this.reportedByPhone = data.ReportedByPhone;
    if (data.ReportedByRelationship != null) this.reportedByRelationship = data.ReportedByRelationship;
    if (data.ReportedByContact != null) this.reportedByContact = data.ReportedByContact === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
