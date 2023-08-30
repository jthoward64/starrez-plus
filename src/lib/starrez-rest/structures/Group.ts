// Generated from XML description of Group

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class Group {
  groupID?: number;
  categoryID?: number;
  eventID?: number;
  groupStatusEnum?: unknown;
  description?: string;
  termSessionID?: number;
  checkInDate?: Date;
  checkOutDate?: Date;
  genderEnum?: unknown;
  contactID?: number;
  bookingTypeID?: number;
  roomRateID?: number;
  housekeepingID?: number;
  groupRegistration?: boolean;
  leader_EntryID?: number;
  resvChargeToEntry?: boolean;
  resvChargeToEntryExtraDays?: boolean;
  mealChargeToEntry?: boolean;
  resvChargeToEntryExtraDays_RoomRateID?: number;
  comments?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  timestamp?: Date;
  viewOnPortal?: boolean;
  activeDateStart?: Date | null;
  activeDateEnd?: Date | null;
  advanceBookingDays?: number;
  minBookingNights?: number;
  maxBookingNights?: number;
  groupCode?: string;
  keepEntireRangeBlocked?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Group");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GroupID != null) this.groupID = parseInt(data.GroupID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.EventID != null) this.eventID = parseInt(data.EventID, 10);
    if (data.GroupStatusEnum != null) this.groupStatusEnum = data.GroupStatusEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.CheckInDate != null) this.checkInDate = new Date(data.CheckInDate);
    if (data.CheckOutDate != null) this.checkOutDate = new Date(data.CheckOutDate);
    if (data.GenderEnum != null) this.genderEnum = data.GenderEnum;
    if (data.ContactID != null) this.contactID = parseInt(data.ContactID, 10);
    if (data.BookingTypeID != null) this.bookingTypeID = parseInt(data.BookingTypeID, 10);
    if (data.RoomRateID != null) this.roomRateID = parseInt(data.RoomRateID, 10);
    if (data.HousekeepingID != null) this.housekeepingID = parseInt(data.HousekeepingID, 10);
    if (data.GroupRegistration != null) this.groupRegistration = data.GroupRegistration === 'true';
    if (data.Leader_EntryID != null) this.leader_EntryID = parseInt(data.Leader_EntryID, 10);
    if (data.ResvChargeToEntry != null) this.resvChargeToEntry = data.ResvChargeToEntry === 'true';
    if (data.ResvChargeToEntryExtraDays != null) this.resvChargeToEntryExtraDays = data.ResvChargeToEntryExtraDays === 'true';
    if (data.MealChargeToEntry != null) this.mealChargeToEntry = data.MealChargeToEntry === 'true';
    if (data.ResvChargeToEntryExtraDays_RoomRateID != null) this.resvChargeToEntryExtraDays_RoomRateID = parseInt(data.ResvChargeToEntryExtraDays_RoomRateID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.timestamp != null) this.timestamp = new Date(data.timestamp);
    if (data.ViewOnPortal != null) this.viewOnPortal = data.ViewOnPortal === 'true';
    if (data.ActiveDateStart != null) this.activeDateStart = new Date(data.ActiveDateStart);
    if (data.ActiveDateEnd != null) this.activeDateEnd = new Date(data.ActiveDateEnd);
    if (data.AdvanceBookingDays != null) this.advanceBookingDays = parseInt(data.AdvanceBookingDays, 10);
    if (data.MinBookingNights != null) this.minBookingNights = parseInt(data.MinBookingNights, 10);
    if (data.MaxBookingNights != null) this.maxBookingNights = parseInt(data.MaxBookingNights, 10);
    if (data.GroupCode != null) this.groupCode = data.GroupCode;
    if (data.KeepEntireRangeBlocked != null) this.keepEntireRangeBlocked = data.KeepEntireRangeBlocked === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Group | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Group/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Group with id ${id}`);
    } else {
      return new Group(await response.text());
    }
}

}
