// Generated from XML description of Entry

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.EventID != null) this.eventID = parseInt(data.EventID, 10);
    if (data.ContactID != null) this.contactID = parseInt(data.ContactID, 10);
    if (data.EntryStatusEnum != null) this.entryStatusEnum = data.EntryStatusEnum;
    if (data.AddressTypeID != null) this.addressTypeID = parseInt(data.AddressTypeID, 10);
    if (data.BookingID != null) this.bookingID = parseInt(data.BookingID, 10);
    if (data.EntryApplicationID != null) this.entryApplicationID = parseInt(data.EntryApplicationID, 10);
    if (data.PinNumber != null) this.pinNumber = parseInt(data.PinNumber, 10);
    if (data.Password != null) this.password = data.Password;
    if (data.PortalEmail != null) this.portalEmail = data.PortalEmail;
    if (data.PortalAuthProviderUserID != null) this.portalAuthProviderUserID = data.PortalAuthProviderUserID;
    if (data.PortalPasswordHash != null) this.portalPasswordHash = data.PortalPasswordHash;
    if (data.PortalPasswordSalt != null) this.portalPasswordSalt = data.PortalPasswordSalt;
    if (data.PortalResetGUID != null) this.portalResetGUID = data.PortalResetGUID;
    if (data.ConferenceEmail != null) this.conferenceEmail = data.ConferenceEmail;
    if (data.AgentPassword != null) this.agentPassword = data.AgentPassword;
    if (data.AgentPasswordResetGuid != null) this.agentPasswordResetGuid = data.AgentPasswordResetGuid;
    if (data.AgentPasswordResetExpiryDate != null) this.agentPasswordResetExpiryDate = new Date(data.AgentPasswordResetExpiryDate);
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
    if (data.DOB != null) this.dOB = new Date(data.DOB);
    if (data.Position != null) this.position = data.Position;
    if (data.ID1 != null) this.iD1 = data.ID1;
    if (data.ID2 != null) this.iD2 = data.ID2;
    if (data.ID3 != null) this.iD3 = data.ID3;
    if (data.ID4 != null) this.iD4 = parseInt(data.ID4, 10);
    if (data.ID5 != null) this.iD5 = parseInt(data.ID5, 10);
    if (data.PhoneProcessToAccount != null) this.phoneProcessToAccount = data.PhoneProcessToAccount === 'true';
    if (data.PhoneChargeTypeID != null) this.phoneChargeTypeID = parseInt(data.PhoneChargeTypeID, 10);
    if (data.PhoneDisableValue != null) this.phoneDisableValue = data.PhoneDisableValue;
    if (data.PhoneRestrictValue != null) this.phoneRestrictValue = data.PhoneRestrictValue;
    if (data.PhoneControlEnum != null) this.phoneControlEnum = data.PhoneControlEnum;
    if (data.TaxExemptionEnum != null) this.taxExemptionEnum = data.TaxExemptionEnum;
    if (data.LastCheckInOutDate != null) this.lastCheckInOutDate = new Date(data.LastCheckInOutDate);
    if (data.Previous_EntryStatusEnum != null) this.previous_EntryStatusEnum = data.Previous_EntryStatusEnum;
    if (data.Testing != null) this.testing = data.Testing === 'true';
    if (data.User_SecurityUserID != null) this.user_SecurityUserID = parseInt(data.User_SecurityUserID, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.EntryGUID != null) this.entryGUID = data.EntryGUID;
    if (data.timestamp != null) this.timestamp = new Date(data.timestamp);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<Entry | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/Entry/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch Entry with id ${id}`);
    } else {
      return new Entry(await response.text());
    }
}

}
