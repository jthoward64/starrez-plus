// Generated from XML description of Course

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class Course {
  courseID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  courseCode?: string;
  effectiveDate?: Date;
  status?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Course");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CourseID != null) this.courseID = parseInt(data.CourseID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.CourseCode != null) this.courseCode = data.CourseCode;
    if (data.EffectiveDate != null) this.effectiveDate = new Date(data.EffectiveDate);
    if (data.Status != null) this.status = data.Status;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Course | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Course/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Course with id ${id}`);
    } else {
      return new Course(await response.text());
    }
}

}