// Generated from XML description of EntryVisitor

import { starRezXmlToJson } from "../parsing.js";

export class EntryVisitor {
  entryVisitorID?: number;
  entryID?: number;
  visitorID?: number;
  visitorStatusEnum?: unknown;
  termSessionID?: number;
  arrivalDate?: Date;
  departureDate?: Date;
  visitorTypeID?: number;
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
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryVisitor");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryVisitorID != null) this.entryVisitorID = parseInt(data.EntryVisitorID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.VisitorID != null) this.visitorID = parseInt(data.VisitorID, 10);
    if (data.VisitorStatusEnum != null) this.visitorStatusEnum = data.VisitorStatusEnum;
    if (data.TermSessionID != null) this.termSessionID = parseInt(data.TermSessionID, 10);
    if (data.ArrivalDate != null) this.arrivalDate = new Date(data.ArrivalDate);
    if (data.DepartureDate != null) this.departureDate = new Date(data.DepartureDate);
    if (data.VisitorTypeID != null) this.visitorTypeID = parseInt(data.VisitorTypeID, 10);
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
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
