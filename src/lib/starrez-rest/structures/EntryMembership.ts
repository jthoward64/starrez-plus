// Generated from XML description of EntryMembership

import { starRezXmlToJson } from "../parsing.js";

export class EntryMembership {
  entryMembershipID?: number;
  entryID?: number;
  membershipTypeID?: number;
  description?: string;
  membershipNumber?: string;
  membershipStatus?: string;
  membershipAction?: string;
  membershipDateStart?: Date | null;
  membershipDateEnd?: Date | null;
  amountPaid?: string;
  comments?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryMembership");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryMembershipID != null) this.entryMembershipID = parseInt(data.EntryMembershipID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.MembershipTypeID != null) this.membershipTypeID = parseInt(data.MembershipTypeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.MembershipNumber != null) this.membershipNumber = data.MembershipNumber;
    if (data.MembershipStatus != null) this.membershipStatus = data.MembershipStatus;
    if (data.MembershipAction != null) this.membershipAction = data.MembershipAction;
    if (data.MembershipDateStart != null) this.membershipDateStart = new Date(data.MembershipDateStart);
    if (data.MembershipDateEnd != null) this.membershipDateEnd = new Date(data.MembershipDateEnd);
    if (data.AmountPaid != null) this.amountPaid = data.AmountPaid;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
