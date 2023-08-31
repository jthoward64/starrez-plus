// Generated from XML description of GroupRoomTypeAndRates

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class GroupRoomTypeAndRates {
  groupRoomTypeAndRatesID?: number;
  groupID?: number;
  description?: string;
  roomTypeID?: number;
  roomLocationID?: number;
  roomRateID?: number;
  guestEstimate?: number;
  guestGuarantee?: number;
  guestMaximum?: number;
  amount?: string;
  amountDouble?: string;
  amountExtra?: string;
  amountChildren?: string;
  comments?: string;
  viewOnWeb?: boolean;
  webDescription?: string;
  webOrder?: number;
  webComments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GroupRoomTypeAndRates");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GroupRoomTypeAndRatesID != null) this.groupRoomTypeAndRatesID = (data.GroupRoomTypeAndRatesID != null ? parseInt(data.GroupRoomTypeAndRatesID, 10) : data.GroupRoomTypeAndRatesID);
    if (data.GroupID != null) this.groupID = (data.GroupID != null ? parseInt(data.GroupID, 10) : data.GroupID);
    if (data.Description != null) this.description = data.Description;
    if (data.RoomTypeID != null) this.roomTypeID = (data.RoomTypeID != null ? parseInt(data.RoomTypeID, 10) : data.RoomTypeID);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.RoomRateID != null) this.roomRateID = (data.RoomRateID != null ? parseInt(data.RoomRateID, 10) : data.RoomRateID);
    if (data.GuestEstimate != null) this.guestEstimate = (data.GuestEstimate != null ? parseInt(data.GuestEstimate, 10) : data.GuestEstimate);
    if (data.GuestGuarantee != null) this.guestGuarantee = (data.GuestGuarantee != null ? parseInt(data.GuestGuarantee, 10) : data.GuestGuarantee);
    if (data.GuestMaximum != null) this.guestMaximum = (data.GuestMaximum != null ? parseInt(data.GuestMaximum, 10) : data.GuestMaximum);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountDouble != null) this.amountDouble = data.AmountDouble;
    if (data.AmountExtra != null) this.amountExtra = data.AmountExtra;
    if (data.AmountChildren != null) this.amountChildren = data.AmountChildren;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebOrder != null) this.webOrder = (data.WebOrder != null ? parseInt(data.WebOrder, 10) : data.WebOrder);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<GroupRoomTypeAndRates | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GroupRoomTypeAndRates/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch GroupRoomTypeAndRates with id ${id}`);
    } else {
      return new GroupRoomTypeAndRates(await response.text());
    }
  }
}

GroupRoomTypeAndRates satisfies StarRezStructureStatic<GroupRoomTypeAndRates>
