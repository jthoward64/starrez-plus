// Generated from XML description of Contribution

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.ContributionID != null) this.contributionID = (data.ContributionID != null ? parseInt(data.ContributionID, 10) : data.ContributionID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.ContributionDate != null) this.contributionDate = (data.ContributionDate != null ? new Date(data.ContributionDate) : data.ContributionDate);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.Description != null) this.description = data.Description;
    if (data.LocationComments != null) this.locationComments = data.LocationComments;
    if (data.ContributionTypeID != null) this.contributionTypeID = (data.ContributionTypeID != null ? parseInt(data.ContributionTypeID, 10) : data.ContributionTypeID);
    if (data.ContributionSubTypeID != null) this.contributionSubTypeID = (data.ContributionSubTypeID != null ? parseInt(data.ContributionSubTypeID, 10) : data.ContributionSubTypeID);
    if (data.ReportNumber != null) this.reportNumber = data.ReportNumber;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Resolution != null) this.resolution = data.Resolution;
    if (data.WorkflowStepID != null) this.workflowStepID = (data.WorkflowStepID != null ? parseInt(data.WorkflowStepID, 10) : data.WorkflowStepID);
    if (data.AssignedTo_SecurityUserID != null) this.assignedTo_SecurityUserID = (data.AssignedTo_SecurityUserID != null ? parseInt(data.AssignedTo_SecurityUserID, 10) : data.AssignedTo_SecurityUserID);
    if (data.Current_WorkflowHistoryID != null) this.current_WorkflowHistoryID = (data.Current_WorkflowHistoryID != null ? parseInt(data.Current_WorkflowHistoryID, 10) : data.Current_WorkflowHistoryID);
    if (data.Previous_WorkflowHistoryID != null) this.previous_WorkflowHistoryID = (data.Previous_WorkflowHistoryID != null ? parseInt(data.Previous_WorkflowHistoryID, 10) : data.Previous_WorkflowHistoryID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.ReportedByName != null) this.reportedByName = data.ReportedByName;
    if (data.ReportedByEmail != null) this.reportedByEmail = data.ReportedByEmail;
    if (data.ReportedByPhone != null) this.reportedByPhone = data.ReportedByPhone;
    if (data.ReportedByRelationship != null) this.reportedByRelationship = data.ReportedByRelationship;
    if (data.ReportedByContact != null) this.reportedByContact = data.ReportedByContact === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Contribution by its ID or by exact match on other fields.
   * @param param Either the ID of the Contribution to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Contribution object or null (if id) or an array of Contribution objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Contribution | null>;
  static async select(param: Partial<Record<keyof Contribution, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Contribution[]>;
  static async select(param: number | Partial<Record<keyof Contribution, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Contribution | Contribution[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Contribution/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Contribution`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Contribution with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Contribution(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Contribution(entry));
      }
    }
  }
}

Contribution satisfies StarRezStructureStatic<Contribution>
