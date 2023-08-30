// Generated from XML description of ResourceBooking

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.ResourceBookingID != null) this.resourceBookingID = parseInt(data.ResourceBookingID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ResourceID != null) this.resourceID = parseInt(data.ResourceID, 10);
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.Description != null) this.description = data.Description;
    if (data.BookingID != null) this.bookingID = parseInt(data.BookingID, 10);
    if (data.AutoAssigned != null) this.autoAssigned = data.AutoAssigned === 'true';
    if (data.ResourceBookingStatusEnum != null) this.resourceBookingStatusEnum = data.ResourceBookingStatusEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.ProgramID != null) this.programID = parseInt(data.ProgramID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<ResourceBooking | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/ResourceBooking/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch ResourceBooking with id ${id}`);
    } else {
      return new ResourceBooking(await response.text());
    }
}

}
