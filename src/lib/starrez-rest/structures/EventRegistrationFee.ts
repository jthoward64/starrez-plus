// Generated from XML description of EventRegistrationFee

import { starRezXmlToJson } from "../parsing.js";

export class EventRegistrationFee {
  eventRegistrationFeeID?: number;
  eventID?: number;
  chargeToEntry?: boolean;
  chargeItemID?: number;
  description?: string;
  dateStart?: Date | null;
  dateEnd?: Date | null;
  amount?: string;
  comments?: string;
  registrationCode?: string;
  maxRegistrations?: number;
  viewOnWeb?: boolean;
  webDescription?: string;
  webOrder?: number;
  webComments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EventRegistrationFee");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EventRegistrationFeeID != null) this.eventRegistrationFeeID = parseInt(data.EventRegistrationFeeID, 10);
    if (data.EventID != null) this.eventID = parseInt(data.EventID, 10);
    if (data.ChargeToEntry != null) this.chargeToEntry = data.ChargeToEntry === 'true';
    if (data.ChargeItemID != null) this.chargeItemID = parseInt(data.ChargeItemID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.Amount != null) this.amount = data.Amount;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.RegistrationCode != null) this.registrationCode = data.RegistrationCode;
    if (data.MaxRegistrations != null) this.maxRegistrations = parseInt(data.MaxRegistrations, 10);
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.WebOrder != null) this.webOrder = parseInt(data.WebOrder, 10);
    if (data.WebComments != null) this.webComments = data.WebComments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
