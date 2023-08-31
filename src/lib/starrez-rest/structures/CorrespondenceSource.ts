// Generated from XML description of CorrespondenceSource

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class CorrespondenceSource {
  correspondenceSourceID?: number;
  description?: string;
  comments?: string;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "CorrespondenceSource");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CorrespondenceSourceID != null) this.correspondenceSourceID = (data.CorrespondenceSourceID != null ? parseInt(data.CorrespondenceSourceID, 10) : data.CorrespondenceSourceID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<CorrespondenceSource | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CorrespondenceSource/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch CorrespondenceSource with id ${id}`);
    } else {
      return new CorrespondenceSource(await response.text());
    }
  }
}

CorrespondenceSource satisfies StarRezStructureStatic<CorrespondenceSource>
