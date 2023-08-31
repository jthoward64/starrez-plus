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

  /**
   * Fetches a VisitorType by its ID or by exact match on other fields.
   * @param param Either the ID of the VisitorType to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single VisitorType object or null (if id) or an array of VisitorType objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<VisitorType | null>;
  static async select(param: Partial<Record<keyof VisitorType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VisitorType[]>;
  static async select(param: number | Partial<Record<keyof VisitorType, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<VisitorType | VisitorType[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VisitorType/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/VisitorType`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch VisitorType with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new VisitorType(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new VisitorType(entry));
      }
    }
  }
}

VisitorType satisfies StarRezStructureStatic<VisitorType>
