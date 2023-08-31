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

  /**
   * Fetches a EntryMembership by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryMembership to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryMembership object or null (if id) or an array of EntryMembership objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryMembership | null>;
  static async select(param: Partial<Record<keyof EntryMembership, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryMembership[]>;
  static async select(param: number | Partial<Record<keyof EntryMembership, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryMembership | EntryMembership[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryMembership/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryMembership`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryMembership with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryMembership(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryMembership(entry));
      }
    }
  }
}

EntryMembership satisfies StarRezStructureStatic<EntryMembership>
