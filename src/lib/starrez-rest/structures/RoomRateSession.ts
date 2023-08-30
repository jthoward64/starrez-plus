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

    if (data.RoomRateSessionID != null) this.roomRateSessionID = parseInt(data.RoomRateSessionID, 10);
    if (data.RoomRateID != null) this.roomRateID = parseInt(data.RoomRateID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.SessionOrder != null) this.sessionOrder = parseInt(data.SessionOrder, 10);
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.RoomRateDurationEnum != null) this.roomRateDurationEnum = data.RoomRateDurationEnum;
    if (data.RoomRateDurationNumber != null) this.roomRateDurationNumber = parseInt(data.RoomRateDurationNumber, 10);
    if (data.RoomRateDurationNights != null) this.roomRateDurationNights = parseInt(data.RoomRateDurationNights, 10);
    if (data.MinimumNights != null) this.minimumNights = parseInt(data.MinimumNights, 10);
    if (data.MaximumNights != null) this.maximumNights = parseInt(data.MaximumNights, 10);
    if (data.RolloverDurationEnum != null) this.rolloverDurationEnum = data.RolloverDurationEnum;
    if (data.RolloverDurationNumber != null) this.rolloverDurationNumber = parseInt(data.RolloverDurationNumber, 10);
    if (data.PercentageCharges != null) this.percentageCharges = data.PercentageCharges === 'true';
    if (data.TransactionDateDue != null) this.transactionDateDue = new Date(data.TransactionDateDue);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DayInWeekEnum != null) this.dayInWeekEnum = data.DayInWeekEnum;
    if (data.StartOfMonth != null) this.startOfMonth = parseInt(data.StartOfMonth, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

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
