// Generated from XML description of ProgramSubType

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.ProgramSubTypeID != null) this.programSubTypeID = parseInt(data.ProgramSubTypeID, 10);
    if (data.ProgramTypeID != null) this.programTypeID = parseInt(data.ProgramTypeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
