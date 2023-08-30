// Generated from XML description of Booking

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.BookingID != null) this.bookingID = parseInt(data.BookingID, 10);
    if (data.RoomSpaceID != null) this.roomSpaceID = parseInt(data.RoomSpaceID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.EntryStatusEnum != null) this.entryStatusEnum = data.EntryStatusEnum;
    if (data.RoomTypeID != null) this.roomTypeID = parseInt(data.RoomTypeID, 10);
    if (data.GroupID != null) this.groupID = parseInt(data.GroupID, 10);
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.Start_BookingReasonID != null) this.start_BookingReasonID = parseInt(data.Start_BookingReasonID, 10);
    if (data.End_BookingReasonID != null) this.end_BookingReasonID = parseInt(data.End_BookingReasonID, 10);
    if (data.BookingTypeID != null) this.bookingTypeID = parseInt(data.BookingTypeID, 10);
    if (data.RoomRateID != null) this.roomRateID = parseInt(data.RoomRateID, 10);
    if (data.BookingLinkTypeEnum != null) this.bookingLinkTypeEnum = data.BookingLinkTypeEnum;
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.HousekeepingID != null) this.housekeepingID = parseInt(data.HousekeepingID, 10);
    if (data.EntryInvitationID != null) this.entryInvitationID = parseInt(data.EntryInvitationID, 10);
    if (data.RoomLocationFixed != null) this.roomLocationFixed = data.RoomLocationFixed === 'true';
    if (data.RoomRateAmount != null) this.roomRateAmount = data.RoomRateAmount;
    if (data.CheckInDate != null) this.checkInDate = new Date(data.CheckInDate);
    if (data.CheckOutDate != null) this.checkOutDate = new Date(data.CheckOutDate);
    if (data.ETA != null) this.eTA = parseInt(data.ETA, 10);
    if (data.ETD != null) this.eTD = parseInt(data.ETD, 10);
    if (data.CheckInDateActual != null) this.checkInDateActual = new Date(data.CheckInDateActual);
    if (data.CheckOutDateActual != null) this.checkOutDateActual = new Date(data.CheckOutDateActual);
    if (data.DateChargedTo != null) this.dateChargedTo = new Date(data.DateChargedTo);
    if (data.ContractDateStart != null) this.contractDateStart = new Date(data.ContractDateStart);
    if (data.ContractDateEnd != null) this.contractDateEnd = new Date(data.ContractDateEnd);
    if (data.ResvChargeToEntry != null) this.resvChargeToEntry = data.ResvChargeToEntry === 'true';
    if (data.NumberOfGuests != null) this.numberOfGuests = parseInt(data.NumberOfGuests, 10);
    if (data.NumberOfGuestsFree != null) this.numberOfGuestsFree = parseInt(data.NumberOfGuestsFree, 10);
    if (data.NumberOfChildren != null) this.numberOfChildren = parseInt(data.NumberOfChildren, 10);
    if (data.NumberOfChildrenFree != null) this.numberOfChildrenFree = parseInt(data.NumberOfChildrenFree, 10);
    if (data.SpecialRequirement != null) this.specialRequirement = data.SpecialRequirement;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateBilled != null) this.dateBilled = new Date(data.DateBilled);
    if (data.AutoAllocationDetail != null) this.autoAllocationDetail = data.AutoAllocationDetail;
    if (data.AdditionalOccupantCount != null) this.additionalOccupantCount = parseInt(data.AdditionalOccupantCount, 10);
    if (data.EmotionalSupportAnimalCount != null) this.emotionalSupportAnimalCount = parseInt(data.EmotionalSupportAnimalCount, 10);
    if (data.ServiceAnimalCount != null) this.serviceAnimalCount = parseInt(data.ServiceAnimalCount, 10);
    if (data.PetCount != null) this.petCount = parseInt(data.PetCount, 10);
    if (data.PaidTo != null) this.paidTo = new Date(data.PaidTo);
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
    if (data.CustomDate1 != null) this.customDate1 = new Date(data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = new Date(data.CustomDate2);
    if (data.CustomDate3 != null) this.customDate3 = new Date(data.CustomDate3);
    if (data.CustomDate4 != null) this.customDate4 = new Date(data.CustomDate4);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModifiedBilling != null) this.dateModifiedBilling = new Date(data.DateModifiedBilling);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.timestamp != null) this.timestamp = new Date(data.timestamp);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
