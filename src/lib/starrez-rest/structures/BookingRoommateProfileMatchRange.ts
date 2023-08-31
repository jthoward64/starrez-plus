// Generated from XML description of BookingRoommateProfileMatchRange

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.BookingRoommateProfileMatchRangeID != null) this.bookingRoommateProfileMatchRangeID = (data.BookingRoommateProfileMatchRangeID != null ? parseInt(data.BookingRoommateProfileMatchRangeID, 10) : data.BookingRoommateProfileMatchRangeID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.BookingRoommateProfileMatchCategoryID != null) this.bookingRoommateProfileMatchCategoryID = (data.BookingRoommateProfileMatchCategoryID != null ? parseInt(data.BookingRoommateProfileMatchCategoryID, 10) : data.BookingRoommateProfileMatchCategoryID);
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.MinimumMatchPercentage != null) this.minimumMatchPercentage = (data.MinimumMatchPercentage != null ? parseInt(data.MinimumMatchPercentage, 10) : data.MinimumMatchPercentage);
    if (data.MaximumMatchPercentage != null) this.maximumMatchPercentage = (data.MaximumMatchPercentage != null ? parseInt(data.MaximumMatchPercentage, 10) : data.MaximumMatchPercentage);
    if (data.MatchColour != null) this.matchColour = data.MatchColour;
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebComments != null) this.webComments = data.WebComments;
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

  /**
   * Fetches a BookingRoommateProfileMatchRange by its ID or by exact match on other fields.
   * @param param Either the ID of the BookingRoommateProfileMatchRange to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single BookingRoommateProfileMatchRange object or null (if id) or an array of BookingRoommateProfileMatchRange objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<BookingRoommateProfileMatchRange | null>;
  static async select(param: Partial<Record<keyof BookingRoommateProfileMatchRange, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingRoommateProfileMatchRange[]>;
  static async select(param: number | Partial<Record<keyof BookingRoommateProfileMatchRange, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<BookingRoommateProfileMatchRange | BookingRoommateProfileMatchRange[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingRoommateProfileMatchRange/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/BookingRoommateProfileMatchRange`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch BookingRoommateProfileMatchRange with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new BookingRoommateProfileMatchRange(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new BookingRoommateProfileMatchRange(entry));
      }
    }
  }
}

BookingRoommateProfileMatchRange satisfies StarRezStructureStatic<BookingRoommateProfileMatchRange>
