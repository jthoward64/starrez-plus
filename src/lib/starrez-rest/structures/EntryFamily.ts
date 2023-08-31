// Generated from XML description of EntryFamily

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryFamily {
  entryFamilyID?: number;
  entryID?: number;
  entryFamilyName?: string;
  dOB?: Date | null;
  relationship?: string;
  genderEnum?: unknown;
  related_EntryID?: number;
  resident?: boolean;
  grade?: string;
  school?: string;
  country?: string;
  occupation?: string;
  deceased?: boolean;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryFamily");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryFamilyID != null) this.entryFamilyID = (data.EntryFamilyID != null ? parseInt(data.EntryFamilyID, 10) : data.EntryFamilyID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.EntryFamilyName != null) this.entryFamilyName = data.EntryFamilyName;
    if (data.DOB != null) this.dOB = (data.DOB != null ? new Date(data.DOB) : data.DOB);
    if (data.Relationship != null) this.relationship = data.Relationship;
    if (data.GenderEnum != null) this.genderEnum = data.GenderEnum;
    if (data.Related_EntryID != null) this.related_EntryID = (data.Related_EntryID != null ? parseInt(data.Related_EntryID, 10) : data.Related_EntryID);
    if (data.Resident != null) this.resident = data.Resident === 'true';
    if (data.Grade != null) this.grade = data.Grade;
    if (data.School != null) this.school = data.School;
    if (data.Country != null) this.country = data.Country;
    if (data.Occupation != null) this.occupation = data.Occupation;
    if (data.Deceased != null) this.deceased = data.Deceased === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryFamily | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryFamily/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryFamily with id ${id}`);
    } else {
      return new EntryFamily(await response.text());
    }
  }
}

EntryFamily satisfies StarRezStructureStatic<EntryFamily>
