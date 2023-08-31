// Generated from XML description of ApplicationStatus

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ApplicationStatus {
  applicationStatusID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ApplicationStatus");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ApplicationStatusID != null) this.applicationStatusID = (data.ApplicationStatusID != null ? parseInt(data.ApplicationStatusID, 10) : data.ApplicationStatusID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ApplicationStatus | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ApplicationStatus/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ApplicationStatus with id ${id}`);
    } else {
      return new ApplicationStatus(await response.text());
    }
  }
}

ApplicationStatus satisfies StarRezStructureStatic<ApplicationStatus>
