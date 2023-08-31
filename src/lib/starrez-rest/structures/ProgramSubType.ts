// Generated from XML description of ProgramSubType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ProgramSubType {
  programSubTypeID?: number;
  programTypeID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ProgramSubType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ProgramSubTypeID != null) this.programSubTypeID = (data.ProgramSubTypeID != null ? parseInt(data.ProgramSubTypeID, 10) : data.ProgramSubTypeID);
    if (data.ProgramTypeID != null) this.programTypeID = (data.ProgramTypeID != null ? parseInt(data.ProgramTypeID, 10) : data.ProgramTypeID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ProgramSubType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ProgramSubType/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ProgramSubType with id ${id}`);
    } else {
      return new ProgramSubType(await response.text());
    }
  }
}

ProgramSubType satisfies StarRezStructureStatic<ProgramSubType>
