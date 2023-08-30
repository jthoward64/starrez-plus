// Generated from XML description of WaitListClassification

import { starRezXmlToJson } from "../parsing.js";

export class WaitListClassification {
  waitListClassificationID?: number;
  waitListID?: number;
  classificationID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WaitListClassification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WaitListClassificationID != null) this.waitListClassificationID = parseInt(data.WaitListClassificationID, 10);
    if (data.WaitListID != null) this.waitListID = parseInt(data.WaitListID, 10);
    if (data.ClassificationID != null) this.classificationID = parseInt(data.ClassificationID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
