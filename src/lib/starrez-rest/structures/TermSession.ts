// Generated from XML description of TermSession

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class TermSession {
  termSessionID?: number;
  recordTypeEnum?: unknown;
  termID?: number;
  description?: string;
  webDescription?: string;
  termSessionCode?: string;
  roomTypeID?: number;
  roomLocationID?: number;
  roomLocationFixed?: boolean;
  useActiveBookingAsTemplate?: boolean;
  start_BookingReasonID?: number;
  end_BookingReasonID?: number;
  bookingTypeID?: number;
  roomRateID?: number;
  roomRateAmount?: string;
  entryStatusEnum?: unknown;
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  contractDateStart?: Date | null;
  contractDateEnd?: Date | null;
  eTA?: number;
  eTD?: number;
  housekeepingID?: number;
  contractDateCheckInIncrease_BooleanAskEnum?: unknown;
  contractDateCheckInDecrease_BooleanAskEnum?: unknown;
  contractDateCheckOutIncrease_BooleanAskEnum?: unknown;
  contractDateCheckOutDecrease_BooleanAskEnum?: unknown;
  checkInDateActualIncrease_BooleanAskEnum?: unknown;
  checkInDateActualDecrease_BooleanAskEnum?: unknown;
  checkOutDateActualIncrease_BooleanAskEnum?: unknown;
  checkOutDateActualDecrease_BooleanAskEnum?: unknown;
  checkInUpdateStartBookingReason_BooleanAskEnum?: unknown;
  checkOutUpdateEndBookingReason_BooleanAskEnum?: unknown;
  cancelBookingUpdateEndBookingReason_BooleanAskEnum?: unknown;
  checkInDefaultStart_BookingReasonID?: number;
  checkOutDefaultEnd_BookingReasonID?: number;
  cancelBookingDefaultEnd_BookingReasonID?: number;
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
    const data = starRezXmlToJson(xml, "TermSession");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.TermID != null) this.termID = (data.TermID != null ? parseInt(data.TermID, 10) : data.TermID);
    if (data.Description != null) this.description = data.Description;
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.TermSessionCode != null) this.termSessionCode = data.TermSessionCode;
    if (data.RoomTypeID != null) this.roomTypeID = (data.RoomTypeID != null ? parseInt(data.RoomTypeID, 10) : data.RoomTypeID);
    if (data.RoomLocationID != null) this.roomLocationID = (data.RoomLocationID != null ? parseInt(data.RoomLocationID, 10) : data.RoomLocationID);
    if (data.RoomLocationFixed != null) this.roomLocationFixed = data.RoomLocationFixed === 'true';
    if (data.UseActiveBookingAsTemplate != null) this.useActiveBookingAsTemplate = data.UseActiveBookingAsTemplate === 'true';
    if (data.Start_BookingReasonID != null) this.start_BookingReasonID = (data.Start_BookingReasonID != null ? parseInt(data.Start_BookingReasonID, 10) : data.Start_BookingReasonID);
    if (data.End_BookingReasonID != null) this.end_BookingReasonID = (data.End_BookingReasonID != null ? parseInt(data.End_BookingReasonID, 10) : data.End_BookingReasonID);
    if (data.BookingTypeID != null) this.bookingTypeID = (data.BookingTypeID != null ? parseInt(data.BookingTypeID, 10) : data.BookingTypeID);
    if (data.RoomRateID != null) this.roomRateID = (data.RoomRateID != null ? parseInt(data.RoomRateID, 10) : data.RoomRateID);
    if (data.RoomRateAmount != null) this.roomRateAmount = data.RoomRateAmount;
    if (data.EntryStatusEnum != null) this.entryStatusEnum = data.EntryStatusEnum;
    if (data.CheckInDate != null) this.checkInDate = (data.CheckInDate != null ? new Date(data.CheckInDate) : data.CheckInDate);
    if (data.CheckOutDate != null) this.checkOutDate = (data.CheckOutDate != null ? new Date(data.CheckOutDate) : data.CheckOutDate);
    if (data.ContractDateStart != null) this.contractDateStart = (data.ContractDateStart != null ? new Date(data.ContractDateStart) : data.ContractDateStart);
    if (data.ContractDateEnd != null) this.contractDateEnd = (data.ContractDateEnd != null ? new Date(data.ContractDateEnd) : data.ContractDateEnd);
    if (data.ETA != null) this.eTA = (data.ETA != null ? parseInt(data.ETA, 10) : data.ETA);
    if (data.ETD != null) this.eTD = (data.ETD != null ? parseInt(data.ETD, 10) : data.ETD);
    if (data.HousekeepingID != null) this.housekeepingID = (data.HousekeepingID != null ? parseInt(data.HousekeepingID, 10) : data.HousekeepingID);
    if (data.ContractDateCheckInIncrease_BooleanAskEnum != null) this.contractDateCheckInIncrease_BooleanAskEnum = data.ContractDateCheckInIncrease_BooleanAskEnum;
    if (data.ContractDateCheckInDecrease_BooleanAskEnum != null) this.contractDateCheckInDecrease_BooleanAskEnum = data.ContractDateCheckInDecrease_BooleanAskEnum;
    if (data.ContractDateCheckOutIncrease_BooleanAskEnum != null) this.contractDateCheckOutIncrease_BooleanAskEnum = data.ContractDateCheckOutIncrease_BooleanAskEnum;
    if (data.ContractDateCheckOutDecrease_BooleanAskEnum != null) this.contractDateCheckOutDecrease_BooleanAskEnum = data.ContractDateCheckOutDecrease_BooleanAskEnum;
    if (data.CheckInDateActualIncrease_BooleanAskEnum != null) this.checkInDateActualIncrease_BooleanAskEnum = data.CheckInDateActualIncrease_BooleanAskEnum;
    if (data.CheckInDateActualDecrease_BooleanAskEnum != null) this.checkInDateActualDecrease_BooleanAskEnum = data.CheckInDateActualDecrease_BooleanAskEnum;
    if (data.CheckOutDateActualIncrease_BooleanAskEnum != null) this.checkOutDateActualIncrease_BooleanAskEnum = data.CheckOutDateActualIncrease_BooleanAskEnum;
    if (data.CheckOutDateActualDecrease_BooleanAskEnum != null) this.checkOutDateActualDecrease_BooleanAskEnum = data.CheckOutDateActualDecrease_BooleanAskEnum;
    if (data.CheckInUpdateStartBookingReason_BooleanAskEnum != null) this.checkInUpdateStartBookingReason_BooleanAskEnum = data.CheckInUpdateStartBookingReason_BooleanAskEnum;
    if (data.CheckOutUpdateEndBookingReason_BooleanAskEnum != null) this.checkOutUpdateEndBookingReason_BooleanAskEnum = data.CheckOutUpdateEndBookingReason_BooleanAskEnum;
    if (data.CancelBookingUpdateEndBookingReason_BooleanAskEnum != null) this.cancelBookingUpdateEndBookingReason_BooleanAskEnum = data.CancelBookingUpdateEndBookingReason_BooleanAskEnum;
    if (data.CheckInDefaultStart_BookingReasonID != null) this.checkInDefaultStart_BookingReasonID = (data.CheckInDefaultStart_BookingReasonID != null ? parseInt(data.CheckInDefaultStart_BookingReasonID, 10) : data.CheckInDefaultStart_BookingReasonID);
    if (data.CheckOutDefaultEnd_BookingReasonID != null) this.checkOutDefaultEnd_BookingReasonID = (data.CheckOutDefaultEnd_BookingReasonID != null ? parseInt(data.CheckOutDefaultEnd_BookingReasonID, 10) : data.CheckOutDefaultEnd_BookingReasonID);
    if (data.CancelBookingDefaultEnd_BookingReasonID != null) this.cancelBookingDefaultEnd_BookingReasonID = (data.CancelBookingDefaultEnd_BookingReasonID != null ? parseInt(data.CancelBookingDefaultEnd_BookingReasonID, 10) : data.CancelBookingDefaultEnd_BookingReasonID);
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<TermSession | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/TermSession/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch TermSession with id ${id}`);
    } else {
      return new TermSession(await response.text());
    }
  }
}

TermSession satisfies StarRezStructureStatic<TermSession>
