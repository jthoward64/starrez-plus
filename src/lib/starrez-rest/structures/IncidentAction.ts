// Generated from XML description of IncidentAction

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentAction {
  incidentActionID?: number;
  incidentID?: number;
  incidentActionTypeID?: number;
  incidentActionDate?: Date;
  actionTitle?: string;
  actionManager_EntryID?: number;
  attendees?: string;
  location?: string;
  description?: string;
  comments?: string;
  dateDue?: Date | null;
  dateComplete?: Date | null;
  outcome?: string;
  incidentActionGUID?: string;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentAction");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentActionID != null) this.incidentActionID = (data.IncidentActionID != null ? parseInt(data.IncidentActionID, 10) : data.IncidentActionID);
    if (data.IncidentID != null) this.incidentID = (data.IncidentID != null ? parseInt(data.IncidentID, 10) : data.IncidentID);
    if (data.IncidentActionTypeID != null) this.incidentActionTypeID = (data.IncidentActionTypeID != null ? parseInt(data.IncidentActionTypeID, 10) : data.IncidentActionTypeID);
    if (data.IncidentActionDate != null) this.incidentActionDate = (data.IncidentActionDate != null ? new Date(data.IncidentActionDate) : data.IncidentActionDate);
    if (data.ActionTitle != null) this.actionTitle = data.ActionTitle;
    if (data.ActionManager_EntryID != null) this.actionManager_EntryID = (data.ActionManager_EntryID != null ? parseInt(data.ActionManager_EntryID, 10) : data.ActionManager_EntryID);
    if (data.Attendees != null) this.attendees = data.Attendees;
    if (data.Location != null) this.location = data.Location;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateDue != null) this.dateDue = (data.DateDue != null ? new Date(data.DateDue) : data.DateDue);
    if (data.DateComplete != null) this.dateComplete = (data.DateComplete != null ? new Date(data.DateComplete) : data.DateComplete);
    if (data.Outcome != null) this.outcome = data.Outcome;
    if (data.IncidentActionGUID != null) this.incidentActionGUID = data.IncidentActionGUID;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<IncidentAction | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentAction/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentAction with id ${id}`);
    } else {
      return new IncidentAction(await response.text());
    }
  }
}

IncidentAction satisfies StarRezStructureStatic<IncidentAction>
