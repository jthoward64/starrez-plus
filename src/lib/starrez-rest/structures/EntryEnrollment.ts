// Generated from XML description of EntryEnrollment

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryEnrollment {
  entryEnrollmentID?: number;
  entryID?: number;
  enrollmentTypeEnum?: unknown;
  courseID?: number;
  termID?: number;
  enrollmentOrder?: number;
  enrollmentField?: string;
  sequence?: number;
  institution?: string;
  campus?: string;
  faculty?: string;
  department?: string;
  major?: string;
  majorCategory?: string;
  minor?: string;
  isEnrolled?: boolean;
  fullTime?: boolean;
  postGrad?: boolean;
  graduationDate?: Date | null;
  subjects?: string;
  years?: string;
  comments?: string;
  dateStart?: Date | null;
  dateEnd?: Date | null;
  customBit1?: boolean;
  customBit2?: boolean;
  customString1?: string;
  customString2?: string;
  customString3?: string;
  customString4?: string;
  customString5?: string;
  customString6?: string;
  customDate1?: Date | null;
  customDate2?: Date | null;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryEnrollment");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryEnrollmentID != null) this.entryEnrollmentID = (data.EntryEnrollmentID != null ? parseInt(data.EntryEnrollmentID, 10) : data.EntryEnrollmentID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.EnrollmentTypeEnum != null) this.enrollmentTypeEnum = data.EnrollmentTypeEnum;
    if (data.CourseID != null) this.courseID = (data.CourseID != null ? parseInt(data.CourseID, 10) : data.CourseID);
    if (data.TermID != null) this.termID = (data.TermID != null ? parseInt(data.TermID, 10) : data.TermID);
    if (data.EnrollmentOrder != null) this.enrollmentOrder = (data.EnrollmentOrder != null ? parseInt(data.EnrollmentOrder, 10) : data.EnrollmentOrder);
    if (data.EnrollmentField != null) this.enrollmentField = data.EnrollmentField;
    if (data.Sequence != null) this.sequence = (data.Sequence != null ? parseInt(data.Sequence, 10) : data.Sequence);
    if (data.Institution != null) this.institution = data.Institution;
    if (data.Campus != null) this.campus = data.Campus;
    if (data.Faculty != null) this.faculty = data.Faculty;
    if (data.Department != null) this.department = data.Department;
    if (data.Major != null) this.major = data.Major;
    if (data.MajorCategory != null) this.majorCategory = data.MajorCategory;
    if (data.Minor != null) this.minor = data.Minor;
    if (data.IsEnrolled != null) this.isEnrolled = data.IsEnrolled === 'true';
    if (data.FullTime != null) this.fullTime = data.FullTime === 'true';
    if (data.PostGrad != null) this.postGrad = data.PostGrad === 'true';
    if (data.GraduationDate != null) this.graduationDate = (data.GraduationDate != null ? new Date(data.GraduationDate) : data.GraduationDate);
    if (data.Subjects != null) this.subjects = data.Subjects;
    if (data.Years != null) this.years = data.Years;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.CustomString3 != null) this.customString3 = data.CustomString3;
    if (data.CustomString4 != null) this.customString4 = data.CustomString4;
    if (data.CustomString5 != null) this.customString5 = data.CustomString5;
    if (data.CustomString6 != null) this.customString6 = data.CustomString6;
    if (data.CustomDate1 != null) this.customDate1 = (data.CustomDate1 != null ? new Date(data.CustomDate1) : data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = (data.CustomDate2 != null ? new Date(data.CustomDate2) : data.CustomDate2);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryEnrollment | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryEnrollment/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryEnrollment with id ${id}`);
    } else {
      return new EntryEnrollment(await response.text());
    }
  }
}

EntryEnrollment satisfies StarRezStructureStatic<EntryEnrollment>
