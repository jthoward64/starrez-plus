// Generated from XML description of ContributionSubType

import { starRezXmlToJson } from "../parsing.js";

export class ContributionSubType {
  contributionSubTypeID?: number;
  contributionTypeID?: number;
  description?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ContributionSubType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ContributionSubTypeID != null) this.contributionSubTypeID = parseInt(data.ContributionSubTypeID, 10);
    if (data.ContributionTypeID != null) this.contributionTypeID = parseInt(data.ContributionTypeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
