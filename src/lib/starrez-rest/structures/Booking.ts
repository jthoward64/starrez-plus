// Generated from XML description of Booking

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Booking {
  bookingID?: number;
  roomSpaceID?: number;
  entryID?: number;
  entryStatusEnum?: unknown;
  roomTypeID?: number;
  groupID?: number;
  roomLocationID?: number;
  start_BookingReasonID?: number;
  end_BookingReasonID?: number;
  bookingTypeID?: number;
  roomRateID?: number;
  bookingLinkTypeEnum?: unknown;
  termSessionID?: number;
  housekeepingID?: number;
  entryInvitationID?: number;
  roomLocationFixed?: boolean;
  roomRateAmount?: string;
  checkInDate?: Date;
  checkOutDate?: Date;
  eTA?: number;
  eTD?: number;
  checkInDateActual?: Date | null;
  checkOutDateActual?: Date | null;
  dateChargedTo?: Date;
  contractDateStart?: Date;
  contractDateEnd?: Date;
  resvChargeToEntry?: boolean;
  numberOfGuests?: number;
  numberOfGuestsFree?: number;
  numberOfChildren?: number;
  numberOfChildrenFree?: number;
  specialRequirement?: string;
  comments?: string;
  dateBilled?: Date | null;
  autoAllocationDetail?: string;
  additionalOccupantCount?: number;
  emotionalSupportAnimalCount?: number;
  serviceAnimalCount?: number;
  petCount?: number;
  paidTo?: Date | null;
  excess?: string;
  customBit1?: boolean;
  customBit2?: boolean;
  customBit3?: boolean;
  customBit4?: boolean;
  customString1?: string;
  customString2?: string;
  customString3?: string;
  customString4?: string;
  customString5?: string;
  customString6?: string;
  customString7?: string;
  customString8?: string;
  customString9?: string;
  customString10?: string;
  customDate1?: Date | null;
  customDate2?: Date | null;
  customDate3?: Date | null;
  customDate4?: Date | null;
  securityUserID?: number;
  dateModifiedBilling?: Date;
  dateCreated?: Date;
  timestamp?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Booking");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.BookingID != null) this.bookingID = (data.BookingID != null ? parseInt(data.BookingID, 10) : data.BookingID);
    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.EntryStatusEnum != null) this.entryStatusEnum = data.EntryStatusEnum;
    if (data.RoomTypeID != null) this.roomTypeID = (data.RoomTypeID != null ? parseInt(data.RoomTypeID, 10) : data.RoomTypeID);
    if (data.GroupID != null) this.groupID = (data.GroupID != null ? parseInt(data.GroupID, 10) : data.GroupID);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.Start_BookingReasonID != null) this.start_BookingReasonID = (data.Start_BookingReasonID != null ? parseInt(data.Start_BookingReasonID, 10) : data.Start_BookingReasonID);
    if (data.End_BookingReasonID != null) this.end_BookingReasonID = (data.End_BookingReasonID != null ? parseInt(data.End_BookingReasonID, 10) : data.End_BookingReasonID);
    if (data.BookingTypeID != null) this.bookingTypeID = (data.BookingTypeID != null ? parseInt(data.BookingTypeID, 10) : data.BookingTypeID);
    if (data.RoomRateID != null) this.roomRateID = (data.RoomRateID != null ? parseInt(data.RoomRateID, 10) : data.RoomRateID);
    if (data.BookingLinkTypeEnum != null) this.bookingLinkTypeEnum = data.BookingLinkTypeEnum;
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.HousekeepingID != null) this.housekeepingID = (data.HousekeepingID != null ? parseInt(data.HousekeepingID, 10) : data.HousekeepingID);
    if (data.EntryInvitationID != null) this.entryInvitationID = (data.EntryInvitationID != null ? parseInt(data.EntryInvitationID, 10) : data.EntryInvitationID);
    if (data.RoomLocationFixed != null) this.roomLocationFixed = data.RoomLocationFixed === 'true';
    if (data.RoomRateAmount != null) this.roomRateAmount = data.RoomRateAmount;
    if (data.CheckInDate != null) this.checkInDate = (data.CheckInDate != null ? new Date(data.CheckInDate) : data.CheckInDate);
    if (data.CheckOutDate != null) this.checkOutDate = (data.CheckOutDate != null ? new Date(data.CheckOutDate) : data.CheckOutDate);
    if (data.ETA != null) this.eTA = (data.ETA != null ? parseInt(data.ETA, 10) : data.ETA);
    if (data.ETD != null) this.eTD = (data.ETD != null ? parseInt(data.ETD, 10) : data.ETD);
    if (data.CheckInDateActual != null) this.checkInDateActual = (data.CheckInDateActual != null ? new Date(data.CheckInDateActual) : data.CheckInDateActual);
    if (data.CheckOutDateActual != null) this.checkOutDateActual = (data.CheckOutDateActual != null ? new Date(data.CheckOutDateActual) : data.CheckOutDateActual);
    if (data.DateChargedTo != null) this.dateChargedTo = (data.DateChargedTo != null ? new Date(data.DateChargedTo) : data.DateChargedTo);
    if (data.ContractDateStart != null) this.contractDateStart = (data.ContractDateStart != null ? new Date(data.ContractDateStart) : data.ContractDateStart);
    if (data.ContractDateEnd != null) this.contractDateEnd = (data.ContractDateEnd != null ? new Date(data.ContractDateEnd) : data.ContractDateEnd);
    if (data.ResvChargeToEntry != null) this.resvChargeToEntry = data.ResvChargeToEntry === 'true';
    if (data.NumberOfGuests != null) this.numberOfGuests = (data.NumberOfGuests != null ? parseInt(data.NumberOfGuests, 10) : data.NumberOfGuests);
    if (data.NumberOfGuestsFree != null) this.numberOfGuestsFree = (data.NumberOfGuestsFree != null ? parseInt(data.NumberOfGuestsFree, 10) : data.NumberOfGuestsFree);
    if (data.NumberOfChildren != null) this.numberOfChildren = (data.NumberOfChildren != null ? parseInt(data.NumberOfChildren, 10) : data.NumberOfChildren);
    if (data.NumberOfChildrenFree != null) this.numberOfChildrenFree = (data.NumberOfChildrenFree != null ? parseInt(data.NumberOfChildrenFree, 10) : data.NumberOfChildrenFree);
    if (data.SpecialRequirement != null) this.specialRequirement = data.SpecialRequirement;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateBilled != null) this.dateBilled = (data.DateBilled != null ? new Date(data.DateBilled) : data.DateBilled);
    if (data.AutoAllocationDetail != null) this.autoAllocationDetail = data.AutoAllocationDetail;
    if (data.AdditionalOccupantCount != null) this.additionalOccupantCount = (data.AdditionalOccupantCount != null ? parseInt(data.AdditionalOccupantCount, 10) : data.AdditionalOccupantCount);
    if (data.EmotionalSupportAnimalCount != null) this.emotionalSupportAnimalCount = (data.EmotionalSupportAnimalCount != null ? parseInt(data.EmotionalSupportAnimalCount, 10) : data.EmotionalSupportAnimalCount);
    if (data.ServiceAnimalCount != null) this.serviceAnimalCount = (data.ServiceAnimalCount != null ? parseInt(data.ServiceAnimalCount, 10) : data.ServiceAnimalCount);
    if (data.PetCount != null) this.petCount = (data.PetCount != null ? parseInt(data.PetCount, 10) : data.PetCount);
    if (data.PaidTo != null) this.paidTo = (data.PaidTo != null ? new Date(data.PaidTo) : data.PaidTo);
    if (data.Excess != null) this.excess = data.Excess;
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomBit3 != null) this.customBit3 = data.CustomBit3 === 'true';
    if (data.CustomBit4 != null) this.customBit4 = data.CustomBit4 === 'true';
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.CustomString3 != null) this.customString3 = data.CustomString3;
    if (data.CustomString4 != null) this.customString4 = data.CustomString4;
    if (data.CustomString5 != null) this.customString5 = data.CustomString5;
    if (data.CustomString6 != null) this.customString6 = data.CustomString6;
    if (data.CustomString7 != null) this.customString7 = data.CustomString7;
    if (data.CustomString8 != null) this.customString8 = data.CustomString8;
    if (data.CustomString9 != null) this.customString9 = data.CustomString9;
    if (data.CustomString10 != null) this.customString10 = data.CustomString10;
    if (data.CustomDate1 != null) this.customDate1 = (data.CustomDate1 != null ? new Date(data.CustomDate1) : data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = (data.CustomDate2 != null ? new Date(data.CustomDate2) : data.CustomDate2);
    if (data.CustomDate3 != null) this.customDate3 = (data.CustomDate3 != null ? new Date(data.CustomDate3) : data.CustomDate3);
    if (data.CustomDate4 != null) this.customDate4 = (data.CustomDate4 != null ? new Date(data.CustomDate4) : data.CustomDate4);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModifiedBilling != null) this.dateModifiedBilling = (data.DateModifiedBilling != null ? new Date(data.DateModifiedBilling) : data.DateModifiedBilling);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.timestamp != null) this.timestamp = (data.timestamp != null ? new Date(data.timestamp) : data.timestamp);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Booking | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Booking/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Booking with id ${id}`);
    } else {
      return new Booking(await response.text());
    }
  }
}

Booking satisfies StarRezStructureStatic<Booking>
