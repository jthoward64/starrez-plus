// Generated from XML description of Event

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Event {
  eventID?: number;
  eventStatusEnum?: unknown;
  eventCode?: string;
  description?: string;
  eventTypeID?: number;
  contactID?: number;
  categoryID?: number;
  termSessionID?: number;
  eventPortalSiteStatusEnum?: unknown;
  dateStart?: Date;
  dateEnd?: Date;
  activeDateStart?: Date | null;
  activeDateEnd?: Date | null;
  attendeeGuarantee?: number;
  attendeeEstimate?: number;
  attendeeMaximum?: number;
  groupID?: number;
  deposit?: string;
  depositDueDate?: Date;
  depositPaid?: boolean;
  deposit_TransactionID?: number;
  chargeComments?: string;
  assigned_SecurityUserID?: number;
  comments?: string;
  viewOnWeb?: boolean;
  webDescription?: string;
  webOrder?: number;
  webComments?: string;
  conferenceFullMessage?: string;
  webHeader?: string;
  defaultFunctionDuration?: string;
  logo_RecordAttachmentID?: number;
  minimumNightStay?: number;
  minimumCheckInDate?: Date | null;
  maximumCheckInDate?: Date | null;
  minimumCheckOutDate?: Date | null;
  maximumCheckOutDate?: Date | null;
  registerViaPortal?: boolean;
  registerViaAdminUpload?: boolean;
  requireFunctions?: boolean;
  requireHousing?: boolean;
  requireMealPlans?: boolean;
  requireDeposit?: boolean;
  requireAttendees?: boolean;
  requireTasks?: boolean;
  eventUrlName?: string;
  registerUrl?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  timestamp?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Event");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EventID != null) this.eventID = (data.EventID != null ? parseInt(data.EventID, 10) : data.EventID);
    if (data.EventStatusEnum != null) this.eventStatusEnum = data.EventStatusEnum;
    if (data.EventCode != null) this.eventCode = data.EventCode;
    if (data.Description != null) this.description = data.Description;
    if (data.EventTypeID != null) this.eventTypeID = (data.EventTypeID != null ? parseInt(data.EventTypeID, 10) : data.EventTypeID);
    if (data.ContactID != null) this.contactID = (data.ContactID != null ? parseInt(data.ContactID, 10) : data.ContactID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.EventPortalSiteStatusEnum != null) this.eventPortalSiteStatusEnum = data.EventPortalSiteStatusEnum;
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.ActiveDateStart != null) this.activeDateStart = (data.ActiveDateStart != null ? new Date(data.ActiveDateStart) : data.ActiveDateStart);
    if (data.ActiveDateEnd != null) this.activeDateEnd = (data.ActiveDateEnd != null ? new Date(data.ActiveDateEnd) : data.ActiveDateEnd);
    if (data.AttendeeGuarantee != null) this.attendeeGuarantee = (data.AttendeeGuarantee != null ? parseInt(data.AttendeeGuarantee, 10) : data.AttendeeGuarantee);
    if (data.AttendeeEstimate != null) this.attendeeEstimate = (data.AttendeeEstimate != null ? parseInt(data.AttendeeEstimate, 10) : data.AttendeeEstimate);
    if (data.AttendeeMaximum != null) this.attendeeMaximum = (data.AttendeeMaximum != null ? parseInt(data.AttendeeMaximum, 10) : data.AttendeeMaximum);
    if (data.GroupID != null) this.groupID = (data.GroupID != null ? parseInt(data.GroupID, 10) : data.GroupID);
    if (data.Deposit != null) this.deposit = data.Deposit;
    if (data.DepositDueDate != null) this.depositDueDate = (data.DepositDueDate != null ? new Date(data.DepositDueDate) : data.DepositDueDate);
    if (data.DepositPaid != null) this.depositPaid = data.DepositPaid === 'true';
    if (data.Deposit_TransactionID != null) this.deposit_TransactionID = (data.Deposit_TransactionID != null ? parseInt(data.Deposit_TransactionID, 10) : data.Deposit_TransactionID);
    if (data.ChargeComments != null) this.chargeComments = data.ChargeComments;
    if (data.Assigned_SecurityUserID != null) this.assigned_SecurityUserID = (data.Assigned_SecurityUserID != null ? parseInt(data.Assigned_SecurityUserID, 10) : data.Assigned_SecurityUserID);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebOrder != null) this.webOrder = (data.WebOrder != null ? parseInt(data.WebOrder, 10) : data.WebOrder);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.ConferenceFullMessage != null) this.conferenceFullMessage = data.ConferenceFullMessage;
    if (data.WebHeader != null) this.webHeader = data.WebHeader;
    if (data.DefaultFunctionDuration != null) this.defaultFunctionDuration = data.DefaultFunctionDuration;
    if (data.Logo_RecordAttachmentID != null) this.logo_RecordAttachmentID = (data.Logo_RecordAttachmentID != null ? parseInt(data.Logo_RecordAttachmentID, 10) : data.Logo_RecordAttachmentID);
    if (data.MinimumNightStay != null) this.minimumNightStay = (data.MinimumNightStay != null ? parseInt(data.MinimumNightStay, 10) : data.MinimumNightStay);
    if (data.MinimumCheckInDate != null) this.minimumCheckInDate = (data.MinimumCheckInDate != null ? new Date(data.MinimumCheckInDate) : data.MinimumCheckInDate);
    if (data.MaximumCheckInDate != null) this.maximumCheckInDate = (data.MaximumCheckInDate != null ? new Date(data.MaximumCheckInDate) : data.MaximumCheckInDate);
    if (data.MinimumCheckOutDate != null) this.minimumCheckOutDate = (data.MinimumCheckOutDate != null ? new Date(data.MinimumCheckOutDate) : data.MinimumCheckOutDate);
    if (data.MaximumCheckOutDate != null) this.maximumCheckOutDate = (data.MaximumCheckOutDate != null ? new Date(data.MaximumCheckOutDate) : data.MaximumCheckOutDate);
    if (data.RegisterViaPortal != null) this.registerViaPortal = data.RegisterViaPortal === 'true';
    if (data.RegisterViaAdminUpload != null) this.registerViaAdminUpload = data.RegisterViaAdminUpload === 'true';
    if (data.RequireFunctions != null) this.requireFunctions = data.RequireFunctions === 'true';
    if (data.RequireHousing != null) this.requireHousing = data.RequireHousing === 'true';
    if (data.RequireMealPlans != null) this.requireMealPlans = data.RequireMealPlans === 'true';
    if (data.RequireDeposit != null) this.requireDeposit = data.RequireDeposit === 'true';
    if (data.RequireAttendees != null) this.requireAttendees = data.RequireAttendees === 'true';
    if (data.RequireTasks != null) this.requireTasks = data.RequireTasks === 'true';
    if (data.EventUrlName != null) this.eventUrlName = data.EventUrlName;
    if (data.RegisterUrl != null) this.registerUrl = data.RegisterUrl;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.timestamp != null) this.timestamp = (data.timestamp != null ? new Date(data.timestamp) : data.timestamp);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Event | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Event/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Event with id ${id}`);
    } else {
      return new Event(await response.text());
    }
  }
}

Event satisfies StarRezStructureStatic<Event>
