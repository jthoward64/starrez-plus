// Generated from XML description of WaitListEntryApplication

import { starRezXmlToJson } from "../parsing.js";

export class WaitListEntryApplication {
  waitListEntryApplicationID?: number;
  waitListID?: number;
  entryApplicationID?: number;
  waitListOrder?: number;
  numberOfBedrooms?: number;
  numberOfBathrooms?: number;
  rentAmount?: string;
  active?: boolean;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WaitListEntryApplication");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WaitListEntryApplicationID != null) this.waitListEntryApplicationID = parseInt(data.WaitListEntryApplicationID, 10);
    if (data.WaitListID != null) this.waitListID = parseInt(data.WaitListID, 10);
    if (data.EntryApplicationID != null) this.entryApplicationID = parseInt(data.EntryApplicationID, 10);
    if (data.WaitListOrder != null) this.waitListOrder = parseInt(data.WaitListOrder, 10);
    if (data.NumberOfBedrooms != null) this.numberOfBedrooms = parseInt(data.NumberOfBedrooms, 10);
    if (data.NumberOfBathrooms != null) this.numberOfBathrooms = parseInt(data.NumberOfBathrooms, 10);
    if (data.RentAmount != null) this.rentAmount = data.RentAmount;
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
