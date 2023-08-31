// Generated from XML description of EntryResult

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryResult {
  entryResultID?: number;
  entryID?: number;
  resultType?: string;
  year?: number;
  termID?: number;
  termNumber?: number;
  subjectLevel?: string;
  subject?: string;
  result?: string;
  rating?: number;
  hoursEnrolled?: number;
  hoursCompleted?: number;
  hoursGraded?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryResult");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryResultID != null) this.entryResultID = (data.EntryResultID != null ? parseInt(data.EntryResultID, 10) : data.EntryResultID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ResultType != null) this.resultType = data.ResultType;
    if (data.Year != null) this.year = (data.Year != null ? parseInt(data.Year, 10) : data.Year);
    if (data.TermID != null) this.termID = (data.TermID != null ? parseInt(data.TermID, 10) : data.TermID);
    if (data.TermNumber != null) this.termNumber = (data.TermNumber != null ? parseInt(data.TermNumber, 10) : data.TermNumber);
    if (data.SubjectLevel != null) this.subjectLevel = data.SubjectLevel;
    if (data.Subject != null) this.subject = data.Subject;
    if (data.Result != null) this.result = data.Result;
    if (data.Rating != null) this.rating = (data.Rating != null ? parseFloat(data.Rating) : data.Rating);
    if (data.HoursEnrolled != null) this.hoursEnrolled = (data.HoursEnrolled != null ? parseFloat(data.HoursEnrolled) : data.HoursEnrolled);
    if (data.HoursCompleted != null) this.hoursCompleted = (data.HoursCompleted != null ? parseFloat(data.HoursCompleted) : data.HoursCompleted);
    if (data.HoursGraded != null) this.hoursGraded = (data.HoursGraded != null ? parseFloat(data.HoursGraded) : data.HoursGraded);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryResult | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryResult/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryResult with id ${id}`);
    } else {
      return new EntryResult(await response.text());
    }
  }
}

EntryResult satisfies StarRezStructureStatic<EntryResult>
