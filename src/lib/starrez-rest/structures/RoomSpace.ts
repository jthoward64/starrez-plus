// Generated from XML description of RoomSpace

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.RoomSpaceID != null) this.roomSpaceID = (data.RoomSpaceID != null ? parseInt(data.RoomSpaceID, 10) : data.RoomSpaceID);
    if (data.RoomBaseID != null) this.roomBaseID = (data.RoomBaseID != null ? parseInt(data.RoomBaseID, 10) : data.RoomBaseID);
    if (data.RoomSpaceTypeEnum != null) this.roomSpaceTypeEnum = data.RoomSpaceTypeEnum;
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.RoomID != null) this.roomID = (data.RoomID != null ? parseInt(data.RoomID, 10) : data.RoomID);
    if (data.Description != null) this.description = data.Description;
    if (data.WebDescription != null) this.webDescription = data.WebDescription;
    if (data.ExtensionID != null) this.extensionID = (data.ExtensionID != null ? parseInt(data.ExtensionID, 10) : data.ExtensionID);
    if (data.SortOrder != null) this.sortOrder = (data.SortOrder != null ? parseInt(data.SortOrder, 10) : data.SortOrder);
    if (data.RoomRateID != null) this.roomRateID = (data.RoomRateID != null ? parseInt(data.RoomRateID, 10) : data.RoomRateID);
    if (data.AllocateSortOrder != null) this.allocateSortOrder = (data.AllocateSortOrder != null ? parseInt(data.AllocateSortOrder, 10) : data.AllocateSortOrder);
    if (data.AllocateExclude != null) this.allocateExclude = data.AllocateExclude === 'true';
    if (data.Hold != null) this.hold = data.Hold === 'true';
    if (data.Networked != null) this.networked = data.Networked === 'true';
    if (data.BedCapacity != null) this.bedCapacity = (data.BedCapacity != null ? parseInt(data.BedCapacity, 10) : data.BedCapacity);
    if (data.Bathrooms != null) this.bathrooms = (data.Bathrooms != null ? parseInt(data.Bathrooms, 10) : data.Bathrooms);
    if (data.Street != null) this.street = data.Street;
    if (data.Street2 != null) this.street2 = data.Street2;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpace | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpace/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpace with id ${id}`);
    } else {
      return new RoomSpace(await response.text());
    }
  }
}

RoomSpace satisfies StarRezStructureStatic<RoomSpace>
