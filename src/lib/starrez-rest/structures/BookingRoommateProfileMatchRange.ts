// Generated from XML description of BookingRoommateProfileMatchRange

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class BookingRoommateProfileMatchRange {
  bookingRoommateProfileMatchRangeID?: number;
  recordTypeEnum?: unknown;
  bookingRoommateProfileMatchCategoryID?: number;
  description?: string;
  comments?: string;
  minimumMatchPercentage?: number;
  maximumMatchPercentage?: number;
  matchColour?: string;
  webDescription?: string;
  webComments?: string;
  viewOnWeb?: boolean;
  dateCreated?: Date;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "BookingRoommateProfileMatchRange");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.BookingRoommateProfileMatchRangeID != null) this.bookingRoommateProfileMatchRangeID = parseInt(data.BookingRoommateProfileMatchRangeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.BookingRoommateProfileMatchCategoryID != null) this.bookingRoommateProfileMatchCategoryID = parseInt(data.BookingRoommateProfileMatchCategoryID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.MinimumMatchPercentage != null) this.minimumMatchPercentage = parseInt(data.MinimumMatchPercentage, 10);
    if (data.MaximumMatchPercentage != null) this.maximumMatchPercentage = parseInt(data.MaximumMatchPercentage, 10);
    if (data.MatchColour != null) this.matchColour = data.MatchColour;
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<BookingRoommateProfileMatchRange | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingRoommateProfileMatchRange/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch BookingRoommateProfileMatchRange with id ${id}`);
    } else {
      return new BookingRoommateProfileMatchRange(await response.text());
    }
}

}
