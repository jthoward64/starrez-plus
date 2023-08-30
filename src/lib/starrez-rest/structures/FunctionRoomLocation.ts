// Generated from XML description of FunctionRoomLocation

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.FunctionRoomLocationID != null) this.functionRoomLocationID = parseInt(data.FunctionRoomLocationID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
