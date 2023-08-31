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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ResourceBooking | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ResourceBooking/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch ResourceBooking with id ${id}`);
    } else {
      return new ResourceBooking(await response.text());
    }
  }
}

ResourceBooking satisfies StarRezStructureStatic<ResourceBooking>
