// Generated from XML description of ResponseStatus

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ResponseStatus {
  responseStatusID?: number;
  description?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ResponseStatus");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ResponseStatusID != null) this.responseStatusID = parseInt(data.ResponseStatusID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ResponseStatus | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ResponseStatus/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ResponseStatus with id ${id}`);
    } else {
      return new ResponseStatus(await response.text());
    }
  }
}

ResponseStatus satisfies StarRezStructureStatic<ResponseStatus>
