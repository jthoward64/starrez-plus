// Generated from XML description of Priority

import { starRezXmlToJson } from "../parsing.js";

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
}
