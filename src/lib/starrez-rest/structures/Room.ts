// Generated from XML description of Room

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class Room {
  roomID?: number;
  roomBaseID?: number;
  roomConfigurationID?: number;
  roomTypeID?: number;
  roomLocationID?: number;
  roomLocationFloorSuiteID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  genderTypeEnum?: unknown;
  roomManagerID?: number;
  comments?: string;
  allocateSortOrder?: number;
  disabledAccess?: boolean;
  area?: number;
  bathrooms?: number;
  bedCapacity?: number;
  furniture?: string;
  flooring?: string;
  customBit1?: boolean;
  customBit2?: boolean;
  customString1?: string;
  customString2?: string;
  customString3?: string;
  customString4?: string;
  customString5?: string;
  customString6?: string;
  customDate1?: Date | null;
  customDate2?: Date | null;
  viewOnWeb?: boolean;
  webComments?: string;
  webDescription?: string;
  webImageLocation?: string;
  bookingHoldDateTime?: Date;
  bookingHold_EntryID?: number;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Room");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomID != null) this.roomID = parseInt(data.RoomID, 10);
    if (data.RoomBaseID != null) this.roomBaseID = parseInt(data.RoomBaseID, 10);
    if (data.RoomConfigurationID != null) this.roomConfigurationID = parseInt(data.RoomConfigurationID, 10);
    if (data.RoomTypeID != null) this.roomTypeID = parseInt(data.RoomTypeID, 10);
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.RoomLocationFloorSuiteID != null) this.roomLocationFloorSuiteID = parseInt(data.RoomLocationFloorSuiteID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.GenderTypeEnum != null) this.genderTypeEnum = data.GenderTypeEnum;
    if (data.RoomManagerID != null) this.roomManagerID = parseInt(data.RoomManagerID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.AllocateSortOrder != null) this.allocateSortOrder = parseInt(data.AllocateSortOrder, 10);
    if (data.DisabledAccess != null) this.disabledAccess = data.DisabledAccess === 'true';
    if (data.Area != null) this.area = parseInt(data.Area, 10);
    if (data.Bathrooms != null) this.bathrooms = parseInt(data.Bathrooms, 10);
    if (data.BedCapacity != null) this.bedCapacity = parseInt(data.BedCapacity, 10);
    if (data.Furniture != null) this.furniture = data.Furniture;
    if (data.Flooring != null) this.flooring = data.Flooring;
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.CustomString3 != null) this.customString3 = data.CustomString3;
    if (data.CustomString4 != null) this.customString4 = data.CustomString4;
    if (data.CustomString5 != null) this.customString5 = data.CustomString5;
    if (data.CustomString6 != null) this.customString6 = data.CustomString6;
    if (data.CustomDate1 != null) this.customDate1 = new Date(data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = new Date(data.CustomDate2);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebImageLocation != null) this.webImageLocation = data.WebImageLocation;
    if (data.BookingHoldDateTime != null) this.bookingHoldDateTime = new Date(data.BookingHoldDateTime);
    if (data.BookingHold_EntryID != null) this.bookingHold_EntryID = parseInt(data.BookingHold_EntryID, 10);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Room | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Room/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Room with id ${id}`);
    } else {
      return new Room(await response.text());
    }
}

}