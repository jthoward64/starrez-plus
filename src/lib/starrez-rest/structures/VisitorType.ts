// Generated from XML description of VisitorType

import { starRezXmlToJson } from "../parsing.js";

export class VisitorType {
  visitorTypeID?: number;
  description?: string;
  maxGuestPerTermSession?: number;
  maxGuestsPerMonth?: number;
  maxVisitationNights?: number;
  maxConsecutiveNights?: number;
  maxNightsPerTermSession?: number;
  minAge?: number;
  visitDatesMustOverlapBookingDates?: boolean;
  sameDayVisitsOnly?: boolean;
  comments?: string;
  recordTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "VisitorType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VisitorTypeID != null) this.visitorTypeID = parseInt(data.VisitorTypeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.MaxGuestPerTermSession != null) this.maxGuestPerTermSession = parseInt(data.MaxGuestPerTermSession, 10);
    if (data.MaxGuestsPerMonth != null) this.maxGuestsPerMonth = parseInt(data.MaxGuestsPerMonth, 10);
    if (data.MaxVisitationNights != null) this.maxVisitationNights = parseInt(data.MaxVisitationNights, 10);
    if (data.MaxConsecutiveNights != null) this.maxConsecutiveNights = parseInt(data.MaxConsecutiveNights, 10);
    if (data.MaxNightsPerTermSession != null) this.maxNightsPerTermSession = parseInt(data.MaxNightsPerTermSession, 10);
    if (data.MinAge != null) this.minAge = parseInt(data.MinAge, 10);
    if (data.VisitDatesMustOverlapBookingDates != null) this.visitDatesMustOverlapBookingDates = data.VisitDatesMustOverlapBookingDates === 'true';
    if (data.SameDayVisitsOnly != null) this.sameDayVisitsOnly = data.SameDayVisitsOnly === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
