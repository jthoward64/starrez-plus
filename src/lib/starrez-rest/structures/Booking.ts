import { EntryStatus } from "./EntryStatus";
import { fromXML } from "./parsing";

export class Booking {
  bookingID: number;
  roomSpaceID: number;
  entryID: number;
  entryStatusEnum: EntryStatus;
  roomTypeID: number;
  groupID: number;
  roomLocationID: number;
  startBookingReasonID: number;
  endBookingReasonID: number;
  bookingTypeID: number;
  roomRateID: number;
  bookingLinkTypeEnum: string;
  termSessionID: number;
  housekeepingID: number;
  entryInvitationID: number;
  roomLocationFixed: boolean;
  roomRateAmount: number;
  checkInDate: string;
  checkOutDate: string;
  eta: number;
  etd: number;
  checkInDateActual: string | null;
  checkOutDateActual: string | null;
  dateChargedTo: string;
  contractDateStart: string;
  contractDateEnd: string;
  resvChargeToEntry: boolean;
  numberOfGuests: number;
  numberOfGuestsFree: number;
  numberOfChildren: number;
  numberOfChildrenFree: number;
  specialRequirement: string;
  comments: string;
  paidTo: string | null;
  excess: number;
  securityUserID: number;
  dateModifiedBilling: string;
  dateCreated: string;
  timestamp: string;
  dateModified: string;

  constructor(xml: string | Node) {
    const data = fromXML(xml, "Booking");

    if (!data) {
      throw new Error('Invalid XML');
    }

    this.bookingID = data.bookingID ?? 0;
    this.roomSpaceID = data.roomSpaceID ?? 0;
    this.entryID = data.entryID ?? 0;
    this.entryStatusEnum = data.entryStatusEnum;
    this.roomTypeID = data.roomTypeID ?? 0;
    this.groupID = data.groupID ?? 0;
    this.roomLocationID = data.roomLocationID ?? 0;
    this.startBookingReasonID = data.startBookingReasonID ?? 0;
    this.endBookingReasonID = data.endBookingReasonID ?? 0;
    this.bookingTypeID = data.bookingTypeID ?? 0;
    this.roomRateID = data.roomRateID ?? 0;
    this.bookingLinkTypeEnum = data.bookingLinkTypeEnum ?? 'None';
    this.termSessionID = data.termSessionID ?? 0;
    this.housekeepingID = data.housekeepingID ?? 0;
    this.entryInvitationID = data.entryInvitationID ?? 0;
    this.roomLocationFixed = data.roomLocationFixed ?? false;
    this.roomRateAmount = data.roomRateAmount ?? 0;
    this.checkInDate = data.checkInDate ?? '';
    this.checkOutDate = data.checkOutDate ?? '';
    this.eta = data.eta ?? 0;
    this.etd = data.etd ?? 0;
    this.checkInDateActual = data.checkInDateActual ?? null;
    this.checkOutDateActual = data.checkOutDateActual ?? null;
    this.dateChargedTo = data.dateChargedTo ?? '';
    this.contractDateStart = data.contractDateStart ?? '';
    this.contractDateEnd = data.contractDateEnd ?? '';
    this.resvChargeToEntry = data.resvChargeToEntry ?? false;
    this.numberOfGuests = data.numberOfGuests ?? 0;
    this.numberOfGuestsFree = data.numberOfGuestsFree ?? 0;
    this.numberOfChildren = data.numberOfChildren ?? 0;
    this.numberOfChildrenFree = data.numberOfChildrenFree ?? 0;
    this.specialRequirement = data.specialRequirement ?? '';
    this.comments = data.comments ?? '';
    this.paidTo = data.paidTo ?? null;
    this.excess = data.excess ?? 0;
    this.securityUserID = data.securityUserID ?? 0;
    this.dateModifiedBilling = data.dateModifiedBilling ?? '';
    this.dateCreated = data.dateCreated ?? '';
    this.timestamp = data.timestamp ?? '';
    this.dateModified = data.dateModified ?? '';

    // Check for custom fields and log a warning if any are populated
    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}