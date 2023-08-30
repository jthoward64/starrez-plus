// Generated from XML description of EntryFamily

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.EntryFamilyID != null) this.entryFamilyID = parseInt(data.EntryFamilyID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.EntryFamilyName != null) this.entryFamilyName = data.EntryFamilyName;
    if (data.DOB != null) this.dOB = new Date(data.DOB);
    if (data.Relationship != null) this.relationship = data.Relationship;
    if (data.GenderEnum != null) this.genderEnum = data.GenderEnum;
    if (data.Related_EntryID != null) this.related_EntryID = parseInt(data.Related_EntryID, 10);
    if (data.Resident != null) this.resident = data.Resident === 'true';
    if (data.Grade != null) this.grade = data.Grade;
    if (data.School != null) this.school = data.School;
    if (data.Country != null) this.country = data.Country;
    if (data.Occupation != null) this.occupation = data.Occupation;
    if (data.Deceased != null) this.deceased = data.Deceased === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
