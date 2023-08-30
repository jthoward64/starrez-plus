// Generated from XML description of WaitListProfile

import { starRezXmlToJson } from "../parsing.js";

export class WaitListProfile {
  waitListProfileID?: number;
  waitListID?: number;
  profileItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WaitListProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WaitListProfileID != null) this.waitListProfileID = parseInt(data.WaitListProfileID, 10);
    if (data.WaitListID != null) this.waitListID = parseInt(data.WaitListID, 10);
    if (data.ProfileItemID != null) this.profileItemID = parseInt(data.ProfileItemID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
