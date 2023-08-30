// Generated from XML description of FunctionBooking

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class FunctionBooking {
  functionBookingID?: number;
  eventID?: number;
  functionTypeID?: number;
  description?: string;
  dateStart?: Date;
  dateEnd?: Date;
  activeDateStart?: Date | null;
  activeDateEnd?: Date | null;
  assigned_SecurityUserID?: number;
  attendeeGuarantee?: number;
  attendeeEstimate?: number;
  attendeeMaximum?: number;
  allowQuantity?: boolean;
  quantityMaximum?: number;
  serviceFeePercentage?: number;
  setupNotes?: string;
  comments?: string;
  customBit1?: boolean;
  customBit2?: boolean;
  customString1?: string;
  customString2?: string;
  customString3?: string;
  customString4?: string;
  customString5?: string;
  customString6?: string;
  customDate1?: Date | null;
  customDate2?: Date | null;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  viewOnWeb?: boolean;
  webDescription?: string;
  webOrder?: number;
  webComments?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "FunctionBooking");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.FunctionBookingID != null) this.functionBookingID = parseInt(data.FunctionBookingID, 10);
    if (data.EventID != null) this.eventID = parseInt(data.EventID, 10);
    if (data.FunctionTypeID != null) this.functionTypeID = parseInt(data.FunctionTypeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.ActiveDateStart != null) this.activeDateStart = new Date(data.ActiveDateStart);
    if (data.ActiveDateEnd != null) this.activeDateEnd = new Date(data.ActiveDateEnd);
    if (data.Assigned_SecurityUserID != null) this.assigned_SecurityUserID = parseInt(data.Assigned_SecurityUserID, 10);
    if (data.AttendeeGuarantee != null) this.attendeeGuarantee = parseInt(data.AttendeeGuarantee, 10);
    if (data.AttendeeEstimate != null) this.attendeeEstimate = parseInt(data.AttendeeEstimate, 10);
    if (data.AttendeeMaximum != null) this.attendeeMaximum = parseInt(data.AttendeeMaximum, 10);
    if (data.AllowQuantity != null) this.allowQuantity = data.AllowQuantity === 'true';
    if (data.QuantityMaximum != null) this.quantityMaximum = parseInt(data.QuantityMaximum, 10);
    if (data.ServiceFeePercentage != null) this.serviceFeePercentage = parseInt(data.ServiceFeePercentage, 10);
    if (data.SetupNotes != null) this.setupNotes = data.SetupNotes;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.CustomBit1 != null) this.customBit1 = data.CustomBit1 === 'true';
    if (data.CustomBit2 != null) this.customBit2 = data.CustomBit2 === 'true';
    if (data.CustomString1 != null) this.customString1 = data.CustomString1;
    if (data.CustomString2 != null) this.customString2 = data.CustomString2;
    if (data.CustomString3 != null) this.customString3 = data.CustomString3;
    if (data.CustomString4 != null) this.customString4 = data.CustomString4;
    if (data.CustomString5 != null) this.customString5 = data.CustomString5;
    if (data.CustomString6 != null) this.customString6 = data.CustomString6;
    if (data.CustomDate1 != null) this.customDate1 = new Date(data.CustomDate1);
    if (data.CustomDate2 != null) this.customDate2 = new Date(data.CustomDate2);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebOrder != null) this.webOrder = parseInt(data.WebOrder, 10);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<FunctionBooking | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/FunctionBooking/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch FunctionBooking with id ${id}`);
    } else {
      return new FunctionBooking(await response.text());
    }
}

}
