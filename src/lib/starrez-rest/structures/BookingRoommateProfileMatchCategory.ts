// Generated from XML description of BookingRoommateProfileMatchCategory

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class BookingRoommateProfileMatchCategory {
  bookingRoommateProfileMatchCategoryID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  viewOnWeb?: boolean;
  dateCreated?: Date;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "BookingRoommateProfileMatchCategory");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.BookingRoommateProfileMatchCategoryID != null) this.bookingRoommateProfileMatchCategoryID = (data.BookingRoommateProfileMatchCategoryID != null ? parseInt(data.BookingRoommateProfileMatchCategoryID, 10) : data.BookingRoommateProfileMatchCategoryID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<BookingRoommateProfileMatchCategory | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingRoommateProfileMatchCategory/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch BookingRoommateProfileMatchCategory with id ${id}`);
    } else {
      return new BookingRoommateProfileMatchCategory(await response.text());
    }
  }
}

BookingRoommateProfileMatchCategory satisfies StarRezStructureStatic<BookingRoommateProfileMatchCategory>
