// Generated from XML description of RoommateGroupMandatoryProfile

import { starRezXmlToJson } from "../parsing.js";

export class RoommateGroupMandatoryProfile {
  roommateGroupMandatoryProfileID?: number;
  roommateGroupID?: number;
  profileItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoommateGroupMandatoryProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoommateGroupMandatoryProfileID != null) this.roommateGroupMandatoryProfileID = parseInt(data.RoommateGroupMandatoryProfileID, 10);
    if (data.RoommateGroupID != null) this.roommateGroupID = parseInt(data.RoommateGroupID, 10);
    if (data.ProfileItemID != null) this.profileItemID = parseInt(data.ProfileItemID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
