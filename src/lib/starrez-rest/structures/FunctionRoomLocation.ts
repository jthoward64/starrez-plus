// Generated from XML description of FunctionRoomLocation

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionRoomLocation {
  functionRoomLocationID?: number;
  recordTypeEnum?: unknown;
  categoryID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionRoomLocation");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionRoomLocationID != null) this.functionRoomLocationID = (data.FunctionRoomLocationID != null ? parseInt(data.FunctionRoomLocationID, 10) : data.FunctionRoomLocationID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FunctionRoomLocation | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionRoomLocation/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionRoomLocation with id ${id}`);
    } else {
      return new FunctionRoomLocation(await response.text());
    }
  }
}

FunctionRoomLocation satisfies StarRezStructureStatic<FunctionRoomLocation>
