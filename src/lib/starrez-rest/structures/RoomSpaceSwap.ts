// Generated from XML description of RoomSpaceSwap

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSpaceSwap {
  roomSpaceSwapID?: number;
  initiatedBy_BookingID?: number;
  offered_BookingID?: number;
  requested_BookingID?: number;
  roomSpaceSwapStatusEnum?: unknown;
  acceptedDate?: Date | null;
  confirmedDate?: Date | null;
  webComments?: string;
  interim?: boolean;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceSwap");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceSwapID != null) this.roomSpaceSwapID = parseInt(data.RoomSpaceSwapID, 10);
    if (data.InitiatedBy_BookingID != null) this.initiatedBy_BookingID = parseInt(data.InitiatedBy_BookingID, 10);
    if (data.Offered_BookingID != null) this.offered_BookingID = parseInt(data.Offered_BookingID, 10);
    if (data.Requested_BookingID != null) this.requested_BookingID = parseInt(data.Requested_BookingID, 10);
    if (data.RoomSpaceSwapStatusEnum != null) this.roomSpaceSwapStatusEnum = data.RoomSpaceSwapStatusEnum;
    if (data.AcceptedDate != null) this.acceptedDate = new Date(data.AcceptedDate);
    if (data.ConfirmedDate != null) this.confirmedDate = new Date(data.ConfirmedDate);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.Interim != null) this.interim = data.Interim === 'true';
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceSwap | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceSwap/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceSwap with id ${id}`);
    } else {
      return new RoomSpaceSwap(await response.text());
    }
  }
}

RoomSpaceSwap satisfies StarRezStructureStatic<RoomSpaceSwap>
