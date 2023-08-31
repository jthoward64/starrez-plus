// Generated from XML description of EntryInvitation

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryInvitation {
  entryInvitationID?: number;
  entryID?: number;
  roommateGroupID?: number;
  accepted_EntryID?: number;
  invitationStatusEnum?: unknown;
  name?: string;
  email?: string;
  dateExpiry?: Date | null;
  registrationURL?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryInvitation");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryInvitationID != null) this.entryInvitationID = (data.EntryInvitationID != null ? parseInt(data.EntryInvitationID, 10) : data.EntryInvitationID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.RoommateGroupID != null) this.roommateGroupID = (data.RoommateGroupID != null ? parseInt(data.RoommateGroupID, 10) : data.RoommateGroupID);
    if (data.Accepted_EntryID != null) this.accepted_EntryID = (data.Accepted_EntryID != null ? parseInt(data.Accepted_EntryID, 10) : data.Accepted_EntryID);
    if (data.InvitationStatusEnum != null) this.invitationStatusEnum = data.InvitationStatusEnum;
    if (data.Name != null) this.name = data.Name;
    if (data.Email != null) this.email = data.Email;
    if (data.DateExpiry != null) this.dateExpiry = (data.DateExpiry != null ? new Date(data.DateExpiry) : data.DateExpiry);
    if (data.RegistrationURL != null) this.registrationURL = data.RegistrationURL;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryInvitation by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryInvitation to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryInvitation object or null (if id) or an array of EntryInvitation objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryInvitation | null>;
  static async select(param: Partial<Record<keyof EntryInvitation, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryInvitation[]>;
  static async select(param: number | Partial<Record<keyof EntryInvitation, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryInvitation | EntryInvitation[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryInvitation/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryInvitation`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryInvitation with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryInvitation(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryInvitation(entry));
      }
    }
  }
}

EntryInvitation satisfies StarRezStructureStatic<EntryInvitation>
