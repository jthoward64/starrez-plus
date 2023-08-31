// Generated from XML description of FunctionRoomBooking

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class FunctionRoomBooking {
  functionRoomBookingID?: number;
  functionRoomID?: number;
  functionBookingID?: number;
  functionRoomSetupID?: number;
  functionRoomRateID?: number;
  functionRoomBookingStatusEnum?: unknown;
  functionRoomRateAmount?: string;
  functionRoomRateAmountCost?: string;
  setupNotes?: string;
  comments?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionRoomBooking");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionRoomBookingID != null) this.functionRoomBookingID = (data.FunctionRoomBookingID != null ? parseInt(data.FunctionRoomBookingID, 10) : data.FunctionRoomBookingID);
    if (data.FunctionRoomID != null) this.functionRoomID = (data.FunctionRoomID != null ? parseInt(data.FunctionRoomID, 10) : data.FunctionRoomID);
    if (data.FunctionBookingID != null) this.functionBookingID = (data.FunctionBookingID != null ? parseInt(data.FunctionBookingID, 10) : data.FunctionBookingID);
    if (data.FunctionRoomSetupID != null) this.functionRoomSetupID = (data.FunctionRoomSetupID != null ? parseInt(data.FunctionRoomSetupID, 10) : data.FunctionRoomSetupID);
    if (data.FunctionRoomRateID != null) this.functionRoomRateID = (data.FunctionRoomRateID != null ? parseInt(data.FunctionRoomRateID, 10) : data.FunctionRoomRateID);
    if (data.FunctionRoomBookingStatusEnum != null) this.functionRoomBookingStatusEnum = data.FunctionRoomBookingStatusEnum;
    if (data.FunctionRoomRateAmount != null) this.functionRoomRateAmount = data.FunctionRoomRateAmount;
    if (data.FunctionRoomRateAmountCost != null) this.functionRoomRateAmountCost = data.FunctionRoomRateAmountCost;
    if (data.SetupNotes != null) this.setupNotes = data.SetupNotes;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FunctionRoomBooking | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionRoomBooking/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionRoomBooking with id ${id}`);
    } else {
      return new FunctionRoomBooking(await response.text());
    }
  }
}

FunctionRoomBooking satisfies StarRezStructureStatic<FunctionRoomBooking>
