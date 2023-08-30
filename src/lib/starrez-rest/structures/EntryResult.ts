// Generated from XML description of EntryResult

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.EntryResultID != null) this.entryResultID = parseInt(data.EntryResultID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ResultType != null) this.resultType = data.ResultType;
    if (data.Year != null) this.year = parseInt(data.Year, 10);
    if (data.TermID != null) this.termID = parseInt(data.TermID, 10);
    if (data.TermNumber != null) this.termNumber = parseInt(data.TermNumber, 10);
    if (data.SubjectLevel != null) this.subjectLevel = data.SubjectLevel;
    if (data.Subject != null) this.subject = data.Subject;
    if (data.Result != null) this.result = data.Result;
    if (data.Rating != null) this.rating = parseFloat(data.Rating);
    if (data.HoursEnrolled != null) this.hoursEnrolled = parseFloat(data.HoursEnrolled);
    if (data.HoursCompleted != null) this.hoursCompleted = parseFloat(data.HoursCompleted);
    if (data.HoursGraded != null) this.hoursGraded = parseFloat(data.HoursGraded);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryResult | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryResult/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryResult with id ${id}`);
    } else {
      return new EntryResult(await response.text());
    }
}

}
