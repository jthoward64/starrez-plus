// Generated from XML description of VisitorType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.VisitorTypeID != null) this.visitorTypeID = (data.VisitorTypeID != null ? parseInt(data.VisitorTypeID, 10) : data.VisitorTypeID);
    if (data.Description != null) this.description = data.Description;
    if (data.MaxGuestPerTermSession != null) this.maxGuestPerTermSession = (data.MaxGuestPerTermSession != null ? parseInt(data.MaxGuestPerTermSession, 10) : data.MaxGuestPerTermSession);
    if (data.MaxGuestsPerMonth != null) this.maxGuestsPerMonth = (data.MaxGuestsPerMonth != null ? parseInt(data.MaxGuestsPerMonth, 10) : data.MaxGuestsPerMonth);
    if (data.MaxVisitationNights != null) this.maxVisitationNights = (data.MaxVisitationNights != null ? parseInt(data.MaxVisitationNights, 10) : data.MaxVisitationNights);
    if (data.MaxConsecutiveNights != null) this.maxConsecutiveNights = (data.MaxConsecutiveNights != null ? parseInt(data.MaxConsecutiveNights, 10) : data.MaxConsecutiveNights);
    if (data.MaxNightsPerTermSession != null) this.maxNightsPerTermSession = (data.MaxNightsPerTermSession != null ? parseInt(data.MaxNightsPerTermSession, 10) : data.MaxNightsPerTermSession);
    if (data.MinAge != null) this.minAge = (data.MinAge != null ? parseInt(data.MinAge, 10) : data.MinAge);
    if (data.VisitDatesMustOverlapBookingDates != null) this.visitDatesMustOverlapBookingDates = data.VisitDatesMustOverlapBookingDates === 'true';
    if (data.SameDayVisitsOnly != null) this.sameDayVisitsOnly = data.SameDayVisitsOnly === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<VisitorType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VisitorType/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VisitorType with id ${id}`);
    } else {
      return new VisitorType(await response.text());
    }
  }
}

VisitorType satisfies StarRezStructureStatic<VisitorType>
