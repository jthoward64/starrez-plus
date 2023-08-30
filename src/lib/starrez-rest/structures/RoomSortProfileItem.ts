// Generated from XML description of RoomSortProfileItem

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSortProfileItem {
  roomSortProfileItemID?: number;
  roomSortProfileID?: number;
  roomSortConfigurationID?: number;
  sortOrder?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSortProfileItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSortProfileItemID != null) this.roomSortProfileItemID = (data.RoomSortProfileItemID != null ? parseInt(data.RoomSortProfileItemID, 10) : data.RoomSortProfileItemID);
    if (data.RoomSortProfileID != null) this.roomSortProfileID = (data.RoomSortProfileID != null ? parseInt(data.RoomSortProfileID, 10) : data.RoomSortProfileID);
    if (data.RoomSortConfigurationID != null) this.roomSortConfigurationID = (data.RoomSortConfigurationID != null ? parseInt(data.RoomSortConfigurationID, 10) : data.RoomSortConfigurationID);
    if (data.SortOrder != null) this.sortOrder = (data.SortOrder != null ? parseInt(data.SortOrder, 10) : data.SortOrder);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSortProfileItem | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSortProfileItem/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSortProfileItem with id ${id}`);
    } else {
      return new RoomSortProfileItem(await response.text());
    }
  }
}

RoomSortProfileItem satisfies StarRezStructureStatic<RoomSortProfileItem>
