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

    if (data.RoomSortProfileItemID != null) this.roomSortProfileItemID = parseInt(data.RoomSortProfileItemID, 10);
    if (data.RoomSortProfileID != null) this.roomSortProfileID = parseInt(data.RoomSortProfileID, 10);
    if (data.RoomSortConfigurationID != null) this.roomSortConfigurationID = parseInt(data.RoomSortConfigurationID, 10);
    if (data.SortOrder != null) this.sortOrder = parseInt(data.SortOrder, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

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
