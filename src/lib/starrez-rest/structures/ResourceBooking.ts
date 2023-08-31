// Generated from XML description of ResourceBooking

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class ResourceBooking {
  resourceBookingID?: number;
  entryID?: number;
  resourceID?: number;
  dateStart?: Date;
  dateEnd?: Date;
  description?: string;
  bookingID?: number;
  autoAssigned?: boolean;
  resourceBookingStatusEnum?: unknown;
  comments?: string;
  dateCreated?: Date;
  securityUserID?: number;
  programID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ResourceBooking");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ResourceBookingID != null) this.resourceBookingID = (data.ResourceBookingID != null ? parseInt(data.ResourceBookingID, 10) : data.ResourceBookingID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ResourceID != null) this.resourceID = (data.ResourceID != null ? parseInt(data.ResourceID, 10) : data.ResourceID);
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.Description != null) this.description = data.Description;
    if (data.BookingID != null) this.bookingID = (data.BookingID != null ? parseInt(data.BookingID, 10) : data.BookingID);
    if (data.AutoAssigned != null) this.autoAssigned = data.AutoAssigned === 'true';
    if (data.ResourceBookingStatusEnum != null) this.resourceBookingStatusEnum = data.ResourceBookingStatusEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.ProgramID != null) this.programID = (data.ProgramID != null ? parseInt(data.ProgramID, 10) : data.ProgramID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a ResourceBooking by its ID or by exact match on other fields.
   * @param param Either the ID of the ResourceBooking to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single ResourceBooking object or null (if id) or an array of ResourceBooking objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<ResourceBooking | null>;
  static async select(param: Partial<Record<keyof ResourceBooking, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ResourceBooking[]>;
  static async select(param: number | Partial<Record<keyof ResourceBooking, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<ResourceBooking | ResourceBooking[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ResourceBooking/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ResourceBooking`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ResourceBooking with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new ResourceBooking(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new ResourceBooking(entry));
      }
    }
  }
}

ResourceBooking satisfies StarRezStructureStatic<ResourceBooking>
