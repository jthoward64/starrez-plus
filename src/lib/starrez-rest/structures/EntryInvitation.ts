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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryInvitation | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryInvitation/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryInvitation with id ${id}`);
    } else {
      return new EntryInvitation(await response.text());
    }
  }
}

EntryInvitation satisfies StarRezStructureStatic<EntryInvitation>
