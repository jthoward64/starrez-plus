// Generated from XML description of RoomRateSession

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomRateSession | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomRateSession/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomRateSession with id ${id}`);
    } else {
      return new RoomRateSession(await response.text());
    }
  }
}

RoomRateSession satisfies StarRezStructureStatic<RoomRateSession>
