// Generated from XML description of ConcernSubType

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ConcernSubType {
  concernSubTypeID?: number;
  concernTypeID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ConcernSubType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ConcernSubTypeID != null) this.concernSubTypeID = (data.ConcernSubTypeID != null ? parseInt(data.ConcernSubTypeID, 10) : data.ConcernSubTypeID);
    if (data.ConcernTypeID != null) this.concernTypeID = (data.ConcernTypeID != null ? parseInt(data.ConcernTypeID, 10) : data.ConcernTypeID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ConcernSubType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ConcernSubType/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ConcernSubType with id ${id}`);
    } else {
      return new ConcernSubType(await response.text());
    }
  }
}

ConcernSubType satisfies StarRezStructureStatic<ConcernSubType>
