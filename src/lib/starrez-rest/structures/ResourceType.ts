// Generated from XML description of ResourceType

import { starRezXmlToJson } from "../parsing.js";

export class ResourceType {
  resourceTypeID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  shortTerm?: boolean;
  autoAssign_BooleanAskEnum?: unknown;
  resourceTypeRestrictionEnum?: unknown;
  defaultBookingHours?: number;
  roomLocationAreaID?: number;
  roomLocationID?: number;
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
  dateCreated?: Date;
  maximumIssueQuantity?: number;
  comments?: string;
  viewOnWeb?: boolean;
  categoryID?: number;
  minBookingHours?: number;
  maxBookingHours?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "ResourceType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.ResourceTypeID != null) this.resourceTypeID = parseInt(data.ResourceTypeID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.ShortTerm != null) this.shortTerm = data.ShortTerm === 'true';
    if (data.AutoAssign_BooleanAskEnum != null) this.autoAssign_BooleanAskEnum = data.AutoAssign_BooleanAskEnum;
    if (data.ResourceTypeRestrictionEnum != null) this.resourceTypeRestrictionEnum = data.ResourceTypeRestrictionEnum;
    if (data.DefaultBookingHours != null) this.defaultBookingHours = parseInt(data.DefaultBookingHours, 10);
    if (data.RoomLocationAreaID != null) this.roomLocationAreaID = parseInt(data.RoomLocationAreaID, 10);
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
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
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.MaximumIssueQuantity != null) this.maximumIssueQuantity = parseInt(data.MaximumIssueQuantity, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.ViewOnWeb != null) this.viewOnWeb = data.ViewOnWeb === 'true';
    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.MinBookingHours != null) this.minBookingHours = parseInt(data.MinBookingHours, 10);
    if (data.MaxBookingHours != null) this.maxBookingHours = parseInt(data.MaxBookingHours, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
