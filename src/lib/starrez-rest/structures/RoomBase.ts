// Generated from XML description of RoomBase

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomBase {
  roomBaseID?: number;
  roomLocationID?: number;
  roomLocationFloorSuiteID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  roomManagerID?: number;
  comments?: string;
  allocateSortOrder?: number;
  disabledAccess?: boolean;
  area?: number;
  bathrooms?: number;
  furniture?: string;
  flooring?: string;
  bedCapacity?: number;
  bookingHoldDateTime?: Date;
  bookingHold_EntryID?: number;
  securityUserID?: number;
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
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomBase");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomBaseID != null) this.roomBaseID = (data.RoomBaseID != null ? parseInt(data.RoomBaseID, 10) : data.RoomBaseID);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.RoomLocationFloorSuiteID != null) this.roomLocationFloorSuiteID = (data.RoomLocationFloorSuiteID != null ? parseInt(data.RoomLocationFloorSuiteID, 10) : data.RoomLocationFloorSuiteID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.RoomManagerID != null) this.roomManagerID = (data.RoomManagerID != null ? parseInt(data.RoomManagerID, 10) : data.RoomManagerID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.AllocateSortOrder != null) this.allocateSortOrder = (data.AllocateSortOrder != null ? parseInt(data.AllocateSortOrder, 10) : data.AllocateSortOrder);
    if (data.DisabledAccess != null) this.disabledAccess = data.DisabledAccess === 'true';
    if (data.Area != null) this.area = (data.Area != null ? parseInt(data.Area, 10) : data.Area);
    if (data.Bathrooms != null) this.bathrooms = (data.Bathrooms != null ? parseInt(data.Bathrooms, 10) : data.Bathrooms);
    if (data.Furniture != null) this.furniture = data.Furniture;
    if (data.Flooring != null) this.flooring = data.Flooring;
    if (data.BedCapacity != null) this.bedCapacity = (data.BedCapacity != null ? parseInt(data.BedCapacity, 10) : data.BedCapacity);
    if (data.BookingHoldDateTime != null) this.bookingHoldDateTime = (data.BookingHoldDateTime != null ? new Date(data.BookingHoldDateTime) : data.BookingHoldDateTime);
    if (data.BookingHold_EntryID != null) this.bookingHold_EntryID = (data.BookingHold_EntryID != null ? parseInt(data.BookingHold_EntryID, 10) : data.BookingHold_EntryID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.CustomString3 != null) this.customString3 = data.CustomString3;
    if (data.CustomString4 != null) this.customString4 = data.CustomString4;
    if (data.CustomString5 != null) this.customString5 = data.CustomString5;
    if (data.CustomString6 != null) this.customString6 = data.CustomString6;
    if (data.CustomDate1 != null) this.customDate1 = (data.CustomDate1 != null ? new Date(data.CustomDate1) : data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = (data.CustomDate2 != null ? new Date(data.CustomDate2) : data.CustomDate2);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomBase | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomBase/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomBase with id ${id}`);
    } else {
      return new RoomBase(await response.text());
    }
  }
}

RoomBase satisfies StarRezStructureStatic<RoomBase>
