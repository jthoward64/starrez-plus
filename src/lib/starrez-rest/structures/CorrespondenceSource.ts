// Generated from XML description of CorrespondenceSource

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.CorrespondenceSourceID != null) this.correspondenceSourceID = parseInt(data.CorrespondenceSourceID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
