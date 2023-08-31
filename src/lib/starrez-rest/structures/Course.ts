// Generated from XML description of Course

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.CourseID != null) this.courseID = (data.CourseID != null ? parseInt(data.CourseID, 10) : data.CourseID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.CourseCode != null) this.courseCode = data.CourseCode;
    if (data.EffectiveDate != null) this.effectiveDate = (data.EffectiveDate != null ? new Date(data.EffectiveDate) : data.EffectiveDate);
    if (data.Status != null) this.status = data.Status;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a Course by its ID or by exact match on other fields.
   * @param param Either the ID of the Course to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single Course object or null (if id) or an array of Course objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<Course | null>;
  static async select(param: Partial<Record<keyof Course, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Course[]>;
  static async select(param: number | Partial<Record<keyof Course, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<Course | Course[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Course/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Course`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Course with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new Course(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new Course(entry));
      }
    }
  }
}

Course satisfies StarRezStructureStatic<Course>
