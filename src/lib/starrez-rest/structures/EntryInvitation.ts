// Generated from XML description of EntryInvitation

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.EntryInvitationID != null) this.entryInvitationID = parseInt(data.EntryInvitationID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.RoommateGroupID != null) this.roommateGroupID = parseInt(data.RoommateGroupID, 10);
    if (data.Accepted_EntryID != null) this.accepted_EntryID = parseInt(data.Accepted_EntryID, 10);
    if (data.InvitationStatusEnum != null) this.invitationStatusEnum = data.InvitationStatusEnum;
    if (data.Name != null) this.name = data.Name;
    if (data.Email != null) this.email = data.Email;
    if (data.DateExpiry != null) this.dateExpiry = new Date(data.DateExpiry);
    if (data.RegistrationURL != null) this.registrationURL = data.RegistrationURL;
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
