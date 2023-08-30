// Generated from XML description of FunctionRoomBooking

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.FunctionRoomBookingID != null) this.functionRoomBookingID = parseInt(data.FunctionRoomBookingID, 10);
    if (data.FunctionRoomID != null) this.functionRoomID = parseInt(data.FunctionRoomID, 10);
    if (data.FunctionBookingID != null) this.functionBookingID = parseInt(data.FunctionBookingID, 10);
    if (data.FunctionRoomSetupID != null) this.functionRoomSetupID = parseInt(data.FunctionRoomSetupID, 10);
    if (data.FunctionRoomRateID != null) this.functionRoomRateID = parseInt(data.FunctionRoomRateID, 10);
    if (data.FunctionRoomBookingStatusEnum != null) this.functionRoomBookingStatusEnum = data.FunctionRoomBookingStatusEnum;
    if (data.FunctionRoomRateAmount != null) this.functionRoomRateAmount = data.FunctionRoomRateAmount;
    if (data.FunctionRoomRateAmountCost != null) this.functionRoomRateAmountCost = data.FunctionRoomRateAmountCost;
    if (data.SetupNotes != null) this.setupNotes = data.SetupNotes;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FunctionRoomBooking | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionRoomBooking/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionRoomBooking with id ${id}`);
    } else {
      return new FunctionRoomBooking(await response.text());
    }
}

}
