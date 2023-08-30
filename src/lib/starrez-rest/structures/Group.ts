// Generated from XML description of Group

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.GroupID != null) this.groupID = (data.GroupID != null ? parseInt(data.GroupID, 10) : data.GroupID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.EventID != null) this.eventID = (data.EventID != null ? parseInt(data.EventID, 10) : data.EventID);
    if (data.GroupStatusEnum != null) this.groupStatusEnum = data.GroupStatusEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.CheckInDate != null) this.checkInDate = (data.CheckInDate != null ? new Date(data.CheckInDate) : data.CheckInDate);
    if (data.CheckOutDate != null) this.checkOutDate = (data.CheckOutDate != null ? new Date(data.CheckOutDate) : data.CheckOutDate);
    if (data.GenderEnum != null) this.genderEnum = data.GenderEnum;
    if (data.ContactID != null) this.contactID = (data.ContactID != null ? parseInt(data.ContactID, 10) : data.ContactID);
    if (data.BookingTypeID != null) this.bookingTypeID = (data.BookingTypeID != null ? parseInt(data.BookingTypeID, 10) : data.BookingTypeID);
    if (data.RoomRateID != null) this.roomRateID = (data.RoomRateID != null ? parseInt(data.RoomRateID, 10) : data.RoomRateID);
    if (data.HousekeepingID != null) this.housekeepingID = (data.HousekeepingID != null ? parseInt(data.HousekeepingID, 10) : data.HousekeepingID);
    if (data.GroupRegistration != null) this.groupRegistration = data.GroupRegistration === 'true';
    if (data.Leader_EntryID != null) this.leader_EntryID = (data.Leader_EntryID != null ? parseInt(data.Leader_EntryID, 10) : data.Leader_EntryID);
    if (data.ResvChargeToEntry != null) this.resvChargeToEntry = data.ResvChargeToEntry === 'true';
    if (data.ResvChargeToEntryExtraDays != null) this.resvChargeToEntryExtraDays = data.ResvChargeToEntryExtraDays === 'true';
    if (data.MealChargeToEntry != null) this.mealChargeToEntry = data.MealChargeToEntry === 'true';
    if (data.ResvChargeToEntryExtraDays_RoomRateID != null) this.resvChargeToEntryExtraDays_RoomRateID = (data.ResvChargeToEntryExtraDays_RoomRateID != null ? parseInt(data.ResvChargeToEntryExtraDays_RoomRateID, 10) : data.ResvChargeToEntryExtraDays_RoomRateID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.timestamp != null) this.timestamp = (data.timestamp != null ? new Date(data.timestamp) : data.timestamp);
    if (data.ViewOnPortal != null) this.viewOnPortal = data.ViewOnPortal === 'true';
    if (data.ActiveDateStart != null) this.activeDateStart = (data.ActiveDateStart != null ? new Date(data.ActiveDateStart) : data.ActiveDateStart);
    if (data.ActiveDateEnd != null) this.activeDateEnd = (data.ActiveDateEnd != null ? new Date(data.ActiveDateEnd) : data.ActiveDateEnd);
    if (data.AdvanceBookingDays != null) this.advanceBookingDays = (data.AdvanceBookingDays != null ? parseInt(data.AdvanceBookingDays, 10) : data.AdvanceBookingDays);
    if (data.MinBookingNights != null) this.minBookingNights = (data.MinBookingNights != null ? parseInt(data.MinBookingNights, 10) : data.MinBookingNights);
    if (data.MaxBookingNights != null) this.maxBookingNights = (data.MaxBookingNights != null ? parseInt(data.MaxBookingNights, 10) : data.MaxBookingNights);
    if (data.GroupCode != null) this.groupCode = data.GroupCode;
    if (data.KeepEntireRangeBlocked != null) this.keepEntireRangeBlocked = data.KeepEntireRangeBlocked === 'true';
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

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

Group satisfies StarRezStructureStatic<Group>
