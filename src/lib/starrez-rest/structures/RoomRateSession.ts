// Generated from XML description of RoomRateSession

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomRateSession {
  roomRateSessionID?: number;
  roomRateID?: number;
  description?: string;
  termSessionID?: number;
  sessionOrder?: number;
  dateStart?: Date | null;
  roomRateDurationEnum?: unknown;
  roomRateDurationNumber?: number;
  roomRateDurationNights?: number;
  minimumNights?: number;
  maximumNights?: number;
  rolloverDurationEnum?: unknown;
  rolloverDurationNumber?: number;
  percentageCharges?: boolean;
  transactionDateDue?: Date | null;
  comments?: string;
  securityUserID?: number;
  dayInWeekEnum?: unknown;
  startOfMonth?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomRateSession");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomRateSessionID != null) this.roomRateSessionID = (data.RoomRateSessionID != null ? parseInt(data.RoomRateSessionID, 10) : data.RoomRateSessionID);
    if (data.RoomRateID != null) this.roomRateID = (data.RoomRateID != null ? parseInt(data.RoomRateID, 10) : data.RoomRateID);
    if (data.Description != null) this.description = data.Description;
    if (data.TermSessionID != null) this.termSessionID = (data.TermSessionID != null ? parseInt(data.TermSessionID, 10) : data.TermSessionID);
    if (data.SessionOrder != null) this.sessionOrder = (data.SessionOrder != null ? parseInt(data.SessionOrder, 10) : data.SessionOrder);
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.RoomRateDurationEnum != null) this.roomRateDurationEnum = data.RoomRateDurationEnum;
    if (data.RoomRateDurationNumber != null) this.roomRateDurationNumber = (data.RoomRateDurationNumber != null ? parseInt(data.RoomRateDurationNumber, 10) : data.RoomRateDurationNumber);
    if (data.RoomRateDurationNights != null) this.roomRateDurationNights = (data.RoomRateDurationNights != null ? parseInt(data.RoomRateDurationNights, 10) : data.RoomRateDurationNights);
    if (data.MinimumNights != null) this.minimumNights = (data.MinimumNights != null ? parseInt(data.MinimumNights, 10) : data.MinimumNights);
    if (data.MaximumNights != null) this.maximumNights = (data.MaximumNights != null ? parseInt(data.MaximumNights, 10) : data.MaximumNights);
    if (data.RolloverDurationEnum != null) this.rolloverDurationEnum = data.RolloverDurationEnum;
    if (data.RolloverDurationNumber != null) this.rolloverDurationNumber = (data.RolloverDurationNumber != null ? parseInt(data.RolloverDurationNumber, 10) : data.RolloverDurationNumber);
    if (data.PercentageCharges != null) this.percentageCharges = data.PercentageCharges === 'true';
    if (data.TransactionDateDue != null) this.transactionDateDue = (data.TransactionDateDue != null ? new Date(data.TransactionDateDue) : data.TransactionDateDue);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DayInWeekEnum != null) this.dayInWeekEnum = data.DayInWeekEnum;
    if (data.StartOfMonth != null) this.startOfMonth = (data.StartOfMonth != null ? parseInt(data.StartOfMonth, 10) : data.StartOfMonth);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a RoomRateSession by its ID or by exact match on other fields.
   * @param param Either the ID of the RoomRateSession to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single RoomRateSession object or null (if id) or an array of RoomRateSession objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<RoomRateSession | null>;
  static async select(param: Partial<Record<keyof RoomRateSession, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomRateSession[]>;
  static async select(param: number | Partial<Record<keyof RoomRateSession, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<RoomRateSession | RoomRateSession[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomRateSession/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomRateSession`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomRateSession with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new RoomRateSession(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new RoomRateSession(entry));
      }
    }
  }
}

RoomRateSession satisfies StarRezStructureStatic<RoomRateSession>
