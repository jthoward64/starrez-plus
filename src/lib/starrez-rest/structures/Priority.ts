// Generated from XML description of Priority

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class Priority {
  priorityID?: number;
  description?: string;
  sortOrder?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Priority");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.PriorityID != null) this.priorityID = parseInt(data.PriorityID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.SortOrder != null) this.sortOrder = parseInt(data.SortOrder, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Priority | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Priority/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Priority with id ${id}`);
    } else {
      return new Priority(await response.text());
    }
}

}
