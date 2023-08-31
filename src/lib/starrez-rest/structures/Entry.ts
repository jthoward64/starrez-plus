// Generated from XML description of Entry

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class Entry {
  entryID?: number;
  categoryID?: number;
  eventID?: number;
  contactID?: number;
  entryStatusEnum?: unknown;
  addressTypeID?: number;
  bookingID?: number;
  entryApplicationID?: number;
  pinNumber?: number;
  password?: any;
  portalEmail?: string;
  portalAuthProviderUserID?: string;
  portalPasswordHash?: any | null;
  portalPasswordSalt?: any | null;
  portalResetGUID?: string;
  conferenceEmail?: string;
  agentPassword?: string;
  agentPasswordResetGuid?: string | null;
  agentPasswordResetExpiryDate?: Date | null;
  nameLast?: string;
  nameFirst?: string;
  nameTitle?: string;
  namePreferred?: string;
  nameWeb?: string;
  nameOther?: string;
  nameInitials?: string;
  nameSharer?: string;
  genderEnum?: unknown;
  birth_GenderEnum?: unknown;
  directoryFlagPrivacy?: boolean;
  dOB?: Date | null;
  position?: string;
  iD1?: string;
  iD2?: string;
  iD3?: string;
  iD4?: number;
  iD5?: number;
  phoneProcessToAccount?: boolean;
  phoneChargeTypeID?: number;
  phoneDisableValue?: string;
  phoneRestrictValue?: string;
  phoneControlEnum?: unknown;
  taxExemptionEnum?: unknown;
  lastCheckInOutDate?: Date | null;
  previous_EntryStatusEnum?: unknown;
  testing?: boolean;
  user_SecurityUserID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  entryGUID?: string;
  timestamp?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Entry");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.EventID != null) this.eventID = (data.EventID != null ? parseInt(data.EventID, 10) : data.EventID);
    if (data.ContactID != null) this.contactID = (data.ContactID != null ? parseInt(data.ContactID, 10) : data.ContactID);
    if (data.EntryStatusEnum != null) this.entryStatusEnum = data.EntryStatusEnum;
    if (data.AddressTypeID != null) this.addressTypeID = (data.AddressTypeID != null ? parseInt(data.AddressTypeID, 10) : data.AddressTypeID);
    if (data.BookingID != null) this.bookingID = (data.BookingID != null ? parseInt(data.BookingID, 10) : data.BookingID);
    if (data.EntryApplicationID != null) this.entryApplicationID = (data.EntryApplicationID != null ? parseInt(data.EntryApplicationID, 10) : data.EntryApplicationID);
    if (data.PinNumber != null) this.pinNumber = (data.PinNumber != null ? parseInt(data.PinNumber, 10) : data.PinNumber);
    if (data.Password != null) this.password = data.Password;
    if (data.PortalEmail != null) this.portalEmail = data.PortalEmail;
    if (data.PortalAuthProviderUserID != null) this.portalAuthProviderUserID = data.PortalAuthProviderUserID;
    if (data.PortalPasswordHash != null) this.portalPasswordHash = data.PortalPasswordHash;
    if (data.PortalPasswordSalt != null) this.portalPasswordSalt = data.PortalPasswordSalt;
    if (data.PortalResetGUID != null) this.portalResetGUID = data.PortalResetGUID;
    if (data.ConferenceEmail != null) this.conferenceEmail = data.ConferenceEmail;
    if (data.AgentPassword != null) this.agentPassword = data.AgentPassword;
    if (data.AgentPasswordResetGuid != null) this.agentPasswordResetGuid = data.AgentPasswordResetGuid;
    if (data.AgentPasswordResetExpiryDate != null) this.agentPasswordResetExpiryDate = (data.AgentPasswordResetExpiryDate != null ? new Date(data.AgentPasswordResetExpiryDate) : data.AgentPasswordResetExpiryDate);
    if (data.NameLast != null) this.nameLast = data.NameLast;
    if (data.NameFirst != null) this.nameFirst = data.NameFirst;
    if (data.NameTitle != null) this.nameTitle = data.NameTitle;
    if (data.NamePreferred != null) this.namePreferred = data.NamePreferred;
    if (data.NameWeb != null) this.nameWeb = data.NameWeb;
    if (data.NameOther != null) this.nameOther = data.NameOther;
    if (data.NameInitials != null) this.nameInitials = data.NameInitials;
    if (data.NameSharer != null) this.nameSharer = data.NameSharer;
    if (data.GenderEnum != null) this.genderEnum = data.GenderEnum;
    if (data.Birth_GenderEnum != null) this.birth_GenderEnum = data.Birth_GenderEnum;
    if (data.DirectoryFlagPrivacy != null) this.directoryFlagPrivacy = data.DirectoryFlagPrivacy === 'true';
    if (data.DOB != null) this.dOB = (data.DOB != null ? new Date(data.DOB) : data.DOB);
    if (data.Position != null) this.position = data.Position;
    if (data.ID1 != null) this.iD1 = data.ID1;
    if (data.ID2 != null) this.iD2 = data.ID2;
    if (data.ID3 != null) this.iD3 = data.ID3;
    if (data.ID4 != null) this.iD4 = (data.ID4 != null ? parseInt(data.ID4, 10) : data.ID4);
    if (data.ID5 != null) this.iD5 = (data.ID5 != null ? parseInt(data.ID5, 10) : data.ID5);
    if (data.PhoneProcessToAccount != null) this.phoneProcessToAccount = data.PhoneProcessToAccount === 'true';
    if (data.PhoneChargeTypeID != null) this.phoneChargeTypeID = (data.PhoneChargeTypeID != null ? parseInt(data.PhoneChargeTypeID, 10) : data.PhoneChargeTypeID);
    if (data.PhoneDisableValue != null) this.phoneDisableValue = data.PhoneDisableValue;
    if (data.PhoneRestrictValue != null) this.phoneRestrictValue = data.PhoneRestrictValue;
    if (data.PhoneControlEnum != null) this.phoneControlEnum = data.PhoneControlEnum;
    if (data.TaxExemptionEnum != null) this.taxExemptionEnum = data.TaxExemptionEnum;
    if (data.LastCheckInOutDate != null) this.lastCheckInOutDate = (data.LastCheckInOutDate != null ? new Date(data.LastCheckInOutDate) : data.LastCheckInOutDate);
    if (data.Previous_EntryStatusEnum != null) this.previous_EntryStatusEnum = data.Previous_EntryStatusEnum;
    if (data.Testing != null) this.testing = data.Testing === 'true';
    if (data.User_SecurityUserID != null) this.user_SecurityUserID = (data.User_SecurityUserID != null ? parseInt(data.User_SecurityUserID, 10) : data.User_SecurityUserID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.EntryGUID != null) this.entryGUID = data.EntryGUID;
    if (data.timestamp != null) this.timestamp = (data.timestamp != null ? new Date(data.timestamp) : data.timestamp);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Entry | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Entry/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch Entry with id ${id}`);
    } else {
      return new Entry(await response.text());
    }
  }
}

Entry satisfies StarRezStructureStatic<Entry>
