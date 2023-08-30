// Generated from XML description of GroupRoomSpace

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class GroupRoomSpace {
  groupRoomSpaceID?: number;
  groupID?: number;
  roomSpaceID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GroupRoomSpace");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GroupRoomSpaceID != null) this.groupRoomSpaceID = parseInt(data.GroupRoomSpaceID, 10);
    if (data.GroupID != null) this.groupID = parseInt(data.GroupID, 10);
    if (data.RoomSpaceID != null) this.roomSpaceID = parseInt(data.RoomSpaceID, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<GroupRoomSpace | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GroupRoomSpace/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch GroupRoomSpace with id ${id}`);
    } else {
      return new GroupRoomSpace(await response.text());
    }
  }
}

GroupRoomSpace satisfies StarRezStructureStatic<GroupRoomSpace>
