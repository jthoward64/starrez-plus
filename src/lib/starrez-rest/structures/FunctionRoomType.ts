// Generated from XML description of FunctionRoomType

import { starRezXmlToJson } from "../parsing.js";

export class FunctionRoomType {
  functionRoomTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  categoryID?: number;
  viewOnWeb?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionRoomType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionRoomTypeID != null) this.functionRoomTypeID = parseInt(data.FunctionRoomTypeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
