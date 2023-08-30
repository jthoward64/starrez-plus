// Generated from XML description of IncidentEntry

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class IncidentEntry {
  incidentEntryID?: number;
  incidentID?: number;
  entryID?: number;
  incidentInvolvementID?: number;
  reported?: boolean;
  link_IncidentEntryID?: number | null;
  linkRelationship?: string;
  identityKnown?: boolean;
  name?: string;
  demographic?: string;
  genderEnum?: unknown;
  race?: string;
  religion?: string;
  ethnicity?: string;
  height?: string;
  weight?: string;
  hairColour?: string;
  eyeColour?: string;
  age?: string;
  comments?: string;
  workflowStepID?: number;
  assignedTo_SecurityUserID?: number;
  current_WorkflowHistoryID?: number;
  previous_WorkflowHistoryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "IncidentEntry");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.IncidentEntryID != null) this.incidentEntryID = parseInt(data.IncidentEntryID, 10);
    if (data.IncidentID != null) this.incidentID = parseInt(data.IncidentID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.IncidentInvolvementID != null) this.incidentInvolvementID = parseInt(data.IncidentInvolvementID, 10);
    if (data.Reported != null) this.reported = data.Reported === 'true';
    if (data.Link_IncidentEntryID != null) this.link_IncidentEntryID = parseInt(data.Link_IncidentEntryID, 10);
    if (data.LinkRelationship != null) this.linkRelationship = data.LinkRelationship;
    if (data.IdentityKnown != null) this.identityKnown = data.IdentityKnown === 'true';
    if (data.Name != null) this.name = data.Name;
    if (data.Demographic != null) this.demographic = data.Demographic;
    if (data.GenderEnum != null) this.genderEnum = data.GenderEnum;
    if (data.Race != null) this.race = data.Race;
    if (data.Religion != null) this.religion = data.Religion;
    if (data.Ethnicity != null) this.ethnicity = data.Ethnicity;
    if (data.Height != null) this.height = data.Height;
    if (data.Weight != null) this.weight = data.Weight;
    if (data.HairColour != null) this.hairColour = data.HairColour;
    if (data.EyeColour != null) this.eyeColour = data.EyeColour;
    if (data.Age != null) this.age = data.Age;
    if (data.Comments != null) this.comments = data.Comments;
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<IncidentEntry | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/IncidentEntry/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch IncidentEntry with id ${id}`);
    } else {
      return new IncidentEntry(await response.text());
    }
  }
}

IncidentEntry satisfies StarRezStructureStatic<IncidentEntry>
