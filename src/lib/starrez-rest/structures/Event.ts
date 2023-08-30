// Generated from XML description of Event

import { starRezXmlToJson } from "../parsing.js";
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
  defaultFunctionDuration?: number;
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

    if (data.EventID != null) this.eventID = parseInt(data.EventID, 10);
    if (data.EventStatusEnum != null) this.eventStatusEnum = data.EventStatusEnum;
    if (data.EventCode != null) this.eventCode = data.EventCode;
    if (data.Description != null) this.description = data.Description;
    if (data.EventTypeID != null) this.eventTypeID = parseInt(data.EventTypeID, 10);
    if (data.ContactID != null) this.contactID = parseInt(data.ContactID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.EventPortalSiteStatusEnum != null) this.eventPortalSiteStatusEnum = data.EventPortalSiteStatusEnum;
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.ActiveDateStart != null) this.activeDateStart = new Date(data.ActiveDateStart);
    if (data.ActiveDateEnd != null) this.activeDateEnd = new Date(data.ActiveDateEnd);
    if (data.AttendeeGuarantee != null) this.attendeeGuarantee = parseInt(data.AttendeeGuarantee, 10);
    if (data.AttendeeEstimate != null) this.attendeeEstimate = parseInt(data.AttendeeEstimate, 10);
    if (data.AttendeeMaximum != null) this.attendeeMaximum = parseInt(data.AttendeeMaximum, 10);
    if (data.GroupID != null) this.groupID = parseInt(data.GroupID, 10);
    if (data.Deposit != null) this.deposit = data.Deposit;
    if (data.DepositDueDate != null) this.depositDueDate = new Date(data.DepositDueDate);
    if (data.DepositPaid != null) this.depositPaid = data.DepositPaid === 'true';
    if (data.Deposit_TransactionID != null) this.deposit_TransactionID = parseInt(data.Deposit_TransactionID, 10);
    if (data.ChargeComments != null) this.chargeComments = data.ChargeComments;
    if (data.Assigned_SecurityUserID != null) this.assigned_SecurityUserID = parseInt(data.Assigned_SecurityUserID, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebOrder != null) this.webOrder = parseInt(data.WebOrder, 10);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.ConferenceFullMessage != null) this.conferenceFullMessage = data.ConferenceFullMessage;
    if (data.WebHeader != null) this.webHeader = data.WebHeader;
    if (data.DefaultFunctionDuration != null) this.defaultFunctionDuration = parseFloat(data.DefaultFunctionDuration);
    if (data.Logo_RecordAttachmentID != null) this.logo_RecordAttachmentID = parseInt(data.Logo_RecordAttachmentID, 10);
    if (data.MinimumNightStay != null) this.minimumNightStay = parseInt(data.MinimumNightStay, 10);
    if (data.MinimumCheckInDate != null) this.minimumCheckInDate = new Date(data.MinimumCheckInDate);
    if (data.MaximumCheckInDate != null) this.maximumCheckInDate = new Date(data.MaximumCheckInDate);
    if (data.MinimumCheckOutDate != null) this.minimumCheckOutDate = new Date(data.MinimumCheckOutDate);
    if (data.MaximumCheckOutDate != null) this.maximumCheckOutDate = new Date(data.MaximumCheckOutDate);
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
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.timestamp != null) this.timestamp = new Date(data.timestamp);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Event | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Event/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Event with id ${id}`);
    } else {
      return new Event(await response.text());
    }
  }
}

Event satisfies StarRezStructureStatic<Event>
