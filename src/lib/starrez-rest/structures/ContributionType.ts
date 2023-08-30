// Generated from XML description of ContributionType

import { starRezXmlToJson } from "../parsing.js";

export class ContributionType {
  contributionTypeID?: number;
  description?: string;
  comments?: string;
  categoryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ContributionType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ContributionTypeID != null) this.contributionTypeID = parseInt(data.ContributionTypeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
