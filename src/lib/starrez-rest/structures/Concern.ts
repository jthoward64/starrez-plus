// Generated from XML description of Concern

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Concern {
  concernID?: number;
  categoryID?: number;
  concernDate?: Date;
  roomLocationID?: number;
  title?: string;
  description?: string;
  locationComments?: string;
  concernTypeID?: number;
  concernSubTypeID?: number;
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
    const data = starRezXmlToJson(xml, "Concern");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ConcernID != null) this.concernID = parseInt(data.ConcernID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.ConcernDate != null) this.concernDate = new Date(data.ConcernDate);
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.Title != null) this.title = data.Title;
    if (data.Description != null) this.description = data.Description;
    if (data.LocationComments != null) this.locationComments = data.LocationComments;
    if (data.ConcernTypeID != null) this.concernTypeID = parseInt(data.ConcernTypeID, 10);
    if (data.ConcernSubTypeID != null) this.concernSubTypeID = parseInt(data.ConcernSubTypeID, 10);
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Concern | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Concern/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Concern with id ${id}`);
    } else {
      return new Concern(await response.text());
    }
  }
}

Concern satisfies StarRezStructureStatic<Concern>
