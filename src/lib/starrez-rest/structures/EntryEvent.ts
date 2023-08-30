// Generated from XML description of EntryEvent

import { starRezXmlToJson } from "../parsing.js";

export class EntryEvent {
  entryEventID?: number;
  entryID?: number;
  eventID?: number;
  eventRegistrationFeeID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryEvent");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryEventID != null) this.entryEventID = parseInt(data.EntryEventID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.EventID != null) this.eventID = parseInt(data.EventID, 10);
    if (data.EventRegistrationFeeID != null) this.eventRegistrationFeeID = parseInt(data.EventRegistrationFeeID, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
