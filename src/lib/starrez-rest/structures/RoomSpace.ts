// Generated from XML description of RoomSpace

import { starRezXmlToJson } from "../parsing.js";

export class RoomSpace {
  roomSpaceID?: number;
  roomBaseID?: number;
  roomSpaceTypeEnum?: unknown;
  recordTypeEnum?: unknown;
  roomID?: number;
  description?: string;
  webDescription?: string;
  extensionID?: number;
  sortOrder?: number;
  roomRateID?: number;
  allocateSortOrder?: number;
  allocateExclude?: boolean;
  hold?: boolean;
  networked?: boolean;
  bedCapacity?: number;
  bathrooms?: number;
  street?: string;
  street2?: string;
  comments?: string;
  securityUserID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpace");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceID != null) this.roomSpaceID = parseInt(data.RoomSpaceID, 10);
    if (data.RoomBaseID != null) this.roomBaseID = parseInt(data.RoomBaseID, 10);
    if (data.RoomSpaceTypeEnum != null) this.roomSpaceTypeEnum = data.RoomSpaceTypeEnum;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.RoomID != null) this.roomID = parseInt(data.RoomID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.ExtensionID != null) this.extensionID = parseInt(data.ExtensionID, 10);
    if (data.SortOrder != null) this.sortOrder = parseInt(data.SortOrder, 10);
    if (data.RoomRateID != null) this.roomRateID = parseInt(data.RoomRateID, 10);
    if (data.AllocateSortOrder != null) this.allocateSortOrder = parseInt(data.AllocateSortOrder, 10);
    if (data.AllocateExclude != null) this.allocateExclude = data.AllocateExclude === 'true';
    if (data.Hold != null) this.hold = data.Hold === 'true';
    if (data.Networked != null) this.networked = data.Networked === 'true';
    if (data.BedCapacity != null) this.bedCapacity = parseInt(data.BedCapacity, 10);
    if (data.Bathrooms != null) this.bathrooms = parseInt(data.Bathrooms, 10);
    if (data.Street != null) this.street = data.Street;
    if (data.Street2 != null) this.street2 = data.Street2;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
