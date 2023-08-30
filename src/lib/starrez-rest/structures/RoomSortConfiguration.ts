// Generated from XML description of RoomSortConfiguration

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomSortConfiguration {
  roomSortConfigurationID?: number;
  roomLocationAreaID?: number;
  roomLocationID?: number;
  roomTypeID?: number;
  profileItemID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSortConfiguration");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSortConfigurationID != null) this.roomSortConfigurationID = parseInt(data.RoomSortConfigurationID, 10);
    if (data.RoomLocationAreaID != null) this.roomLocationAreaID = parseInt(data.RoomLocationAreaID, 10);
    if (data.RoomLocationID != null) this.roomLocationID = parseInt(data.RoomLocationID, 10);
    if (data.RoomTypeID != null) this.roomTypeID = parseInt(data.RoomTypeID, 10);
    if (data.ProfileItemID != null) this.profileItemID = parseInt(data.ProfileItemID, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = parseInt(data.CreatedBy_SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSortConfiguration | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSortConfiguration/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSortConfiguration with id ${id}`);
    } else {
      return new RoomSortConfiguration(await response.text());
    }
  }
}

RoomSortConfiguration satisfies StarRezStructureStatic<RoomSortConfiguration>
