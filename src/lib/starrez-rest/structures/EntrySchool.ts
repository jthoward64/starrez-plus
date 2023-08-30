// Generated from XML description of EntrySchool

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntrySchool {
  entrySchoolID?: number;
  entryID?: number;
  schoolName?: string;
  schoolType?: string;
  schoolYears?: string;
  schoolLocation?: string;
  schoolGeographicLocation?: string;
  schoolCandidateNumber?: string;
  schoolFinalYear?: string;
  schoolFinalYearScore?: string;
  schoolFinalYearSubjects?: string;
  schoolComments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntrySchool");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntrySchoolID != null) this.entrySchoolID = parseInt(data.EntrySchoolID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.SchoolName != null) this.schoolName = data.SchoolName;
    if (data.SchoolType != null) this.schoolType = data.SchoolType;
    if (data.SchoolYears != null) this.schoolYears = data.SchoolYears;
    if (data.SchoolLocation != null) this.schoolLocation = data.SchoolLocation;
    if (data.SchoolGeographicLocation != null) this.schoolGeographicLocation = data.SchoolGeographicLocation;
    if (data.SchoolCandidateNumber != null) this.schoolCandidateNumber = data.SchoolCandidateNumber;
    if (data.SchoolFinalYear != null) this.schoolFinalYear = data.SchoolFinalYear;
    if (data.SchoolFinalYearScore != null) this.schoolFinalYearScore = data.SchoolFinalYearScore;
    if (data.SchoolFinalYearSubjects != null) this.schoolFinalYearSubjects = data.SchoolFinalYearSubjects;
    if (data.SchoolComments != null) this.schoolComments = data.SchoolComments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntrySchool | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntrySchool/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntrySchool with id ${id}`);
    } else {
      return new EntrySchool(await response.text());
    }
  }
}

EntrySchool satisfies StarRezStructureStatic<EntrySchool>
