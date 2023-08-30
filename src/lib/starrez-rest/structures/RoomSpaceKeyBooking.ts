// Generated from XML description of RoomSpaceKeyBooking

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceKeyBooking {
  dateCreated?: Date;
  roomSpaceKeyBookingID?: number;
  roomSpaceKeyID?: number;
  entryID?: number;
  roomSpaceKeyStatusEnum?: unknown;
  entryName?: string;
  dateStart?: Date;
  dateEnd?: Date;
  comments?: string;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceKeyBooking");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.RoomSpaceKeyBookingID != null) this.roomSpaceKeyBookingID = (data.RoomSpaceKeyBookingID != null ? parseInt(data.RoomSpaceKeyBookingID, 10) : data.RoomSpaceKeyBookingID);
    if (data.RoomSpaceKeyID != null) this.roomSpaceKeyID = (data.RoomSpaceKeyID != null ? parseInt(data.RoomSpaceKeyID, 10) : data.RoomSpaceKeyID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.RoomSpaceKeyStatusEnum != null) this.roomSpaceKeyStatusEnum = data.RoomSpaceKeyStatusEnum;
    if (data.EntryName != null) this.entryName = data.EntryName;
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceKeyBooking | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceKeyBooking/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceKeyBooking with id ${id}`);
    } else {
      return new RoomSpaceKeyBooking(await response.text());
    }
  }
}

RoomSpaceKeyBooking satisfies StarRezStructureStatic<RoomSpaceKeyBooking>
