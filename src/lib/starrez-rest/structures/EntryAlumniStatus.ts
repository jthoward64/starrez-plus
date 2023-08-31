// Generated from XML description of EntryAlumniStatus

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryAlumniStatus {
  entryAlumniStatusID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryAlumniStatus");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryAlumniStatusID != null) this.entryAlumniStatusID = (data.EntryAlumniStatusID != null ? parseInt(data.EntryAlumniStatusID, 10) : data.EntryAlumniStatusID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryAlumniStatus | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryAlumniStatus/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryAlumniStatus with id ${id}`);
    } else {
      return new EntryAlumniStatus(await response.text());
    }
  }
}

EntryAlumniStatus satisfies StarRezStructureStatic<EntryAlumniStatus>
