// Generated from XML description of ConcernEntry

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ConcernEntry {
  concernEntryID?: number;
  concernID?: number;
  entryID?: number;
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
  involvementType?: string;
  involvementComments?: string;
  workflowStepID?: number;
  assignedTo_SecurityUserID?: number;
  current_WorkflowHistoryID?: number;
  previous_WorkflowHistoryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ConcernEntry");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ConcernEntryID != null) this.concernEntryID = (data.ConcernEntryID != null ? parseInt(data.ConcernEntryID, 10) : data.ConcernEntryID);
    if (data.ConcernID != null) this.concernID = (data.ConcernID != null ? parseInt(data.ConcernID, 10) : data.ConcernID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
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
    if (data.InvolvementType != null) this.involvementType = data.InvolvementType;
    if (data.InvolvementComments != null) this.involvementComments = data.InvolvementComments;
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ConcernEntry | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ConcernEntry/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ConcernEntry with id ${id}`);
    } else {
      return new ConcernEntry(await response.text());
    }
  }
}

ConcernEntry satisfies StarRezStructureStatic<ConcernEntry>
