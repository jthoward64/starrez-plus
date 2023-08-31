// Generated from XML description of EntryMembership

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.EntryMembershipID != null) this.entryMembershipID = (data.EntryMembershipID != null ? parseInt(data.EntryMembershipID, 10) : data.EntryMembershipID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.MembershipTypeID != null) this.membershipTypeID = (data.MembershipTypeID != null ? parseInt(data.MembershipTypeID, 10) : data.MembershipTypeID);
    if (data.Description != null) this.description = data.Description;
    if (data.MembershipNumber != null) this.membershipNumber = data.MembershipNumber;
    if (data.MembershipStatus != null) this.membershipStatus = data.MembershipStatus;
    if (data.MembershipAction != null) this.membershipAction = data.MembershipAction;
    if (data.MembershipDateStart != null) this.membershipDateStart = (data.MembershipDateStart != null ? new Date(data.MembershipDateStart) : data.MembershipDateStart);
    if (data.MembershipDateEnd != null) this.membershipDateEnd = (data.MembershipDateEnd != null ? new Date(data.MembershipDateEnd) : data.MembershipDateEnd);
    if (data.AmountPaid != null) this.amountPaid = data.AmountPaid;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryMembership | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryMembership/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryMembership with id ${id}`);
    } else {
      return new EntryMembership(await response.text());
    }
  }
}

EntryMembership satisfies StarRezStructureStatic<EntryMembership>
