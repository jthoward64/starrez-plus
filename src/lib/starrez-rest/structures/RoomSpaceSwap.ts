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

    if (data.RoomSpaceSwapID != null) this.roomSpaceSwapID = (data.RoomSpaceSwapID != null ? parseInt(data.RoomSpaceSwapID, 10) : data.RoomSpaceSwapID);
    if (data.InitiatedBy_BookingID != null) this.initiatedBy_BookingID = (data.InitiatedBy_BookingID != null ? parseInt(data.InitiatedBy_BookingID, 10) : data.InitiatedBy_BookingID);
    if (data.Offered_BookingID != null) this.offered_BookingID = (data.Offered_BookingID != null ? parseInt(data.Offered_BookingID, 10) : data.Offered_BookingID);
    if (data.Requested_BookingID != null) this.requested_BookingID = (data.Requested_BookingID != null ? parseInt(data.Requested_BookingID, 10) : data.Requested_BookingID);
    if (data.RoomSpaceSwapStatusEnum != null) this.roomSpaceSwapStatusEnum = data.RoomSpaceSwapStatusEnum;
    if (data.AcceptedDate != null) this.acceptedDate = (data.AcceptedDate != null ? new Date(data.AcceptedDate) : data.AcceptedDate);
    if (data.ConfirmedDate != null) this.confirmedDate = (data.ConfirmedDate != null ? new Date(data.ConfirmedDate) : data.ConfirmedDate);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.Interim != null) this.interim = data.Interim === 'true';
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceSwap | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceSwap/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceSwap with id ${id}`);
    } else {
      return new RoomSpaceSwap(await response.text());
    }
  }
}

RoomSpaceSwap satisfies StarRezStructureStatic<RoomSpaceSwap>
