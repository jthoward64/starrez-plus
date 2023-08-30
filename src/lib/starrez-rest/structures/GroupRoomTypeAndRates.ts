// Generated from XML description of GroupRoomTypeAndRates

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.GroupRoomTypeAndRatesID != null) this.groupRoomTypeAndRatesID = parseInt(data.GroupRoomTypeAndRatesID, 10);
    if (data.GroupID != null) this.groupID = parseInt(data.GroupID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.RoomTypeID != null) this.roomTypeID = parseInt(data.RoomTypeID, 10);
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.RoomRateID != null) this.roomRateID = parseInt(data.RoomRateID, 10);
    if (data.GuestEstimate != null) this.guestEstimate = parseInt(data.GuestEstimate, 10);
    if (data.GuestGuarantee != null) this.guestGuarantee = parseInt(data.GuestGuarantee, 10);
    if (data.GuestMaximum != null) this.guestMaximum = parseInt(data.GuestMaximum, 10);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.AmountDouble != null) this.amountDouble = data.AmountDouble;
    if (data.AmountExtra != null) this.amountExtra = data.AmountExtra;
    if (data.AmountChildren != null) this.amountChildren = data.AmountChildren;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebOrder != null) this.webOrder = parseInt(data.WebOrder, 10);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<GroupRoomTypeAndRates | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GroupRoomTypeAndRates/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch GroupRoomTypeAndRates with id ${id}`);
    } else {
      return new GroupRoomTypeAndRates(await response.text());
    }
}

}
