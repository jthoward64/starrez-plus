// Generated from XML description of Visitor

import { starRezXmlToJson } from "../parsing.js";

export class Visitor {
  visitorID?: number;
  visitor_EntryID?: number;
  nameLast?: string;
  nameFirst?: string;
  genderEnum?: unknown;
  email?: string | null;
  dOB?: Date | null;
  iD1?: string;
  iDType?: string;
  iDNumber?: string;
  phoneNumber?: string;
  banned?: boolean;
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
  comments?: string;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "Visitor");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.VisitorID != null) this.visitorID = parseInt(data.VisitorID, 10);
    if (data.Visitor_EntryID != null) this.visitor_EntryID = parseInt(data.Visitor_EntryID, 10);
    if (data.NameLast != null) this.nameLast = data.NameLast;
    if (data.NameFirst != null) this.nameFirst = data.NameFirst;
    if (data.GenderEnum != null) this.genderEnum = data.GenderEnum;
    if (data.Email != null) this.email = data.Email;
    if (data.DOB != null) this.dOB = new Date(data.DOB);
    if (data.ID1 != null) this.iD1 = data.ID1;
    if (data.IDType != null) this.iDType = data.IDType;
    if (data.IDNumber != null) this.iDNumber = data.IDNumber;
    if (data.PhoneNumber != null) this.phoneNumber = data.PhoneNumber;
    if (data.Banned != null) this.banned = data.Banned === 'true';
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
    if (data.Comments != null) this.comments = data.Comments;
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
