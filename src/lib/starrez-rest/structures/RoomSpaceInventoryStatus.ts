// Generated from XML description of RoomSpaceInventoryStatus

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class RoomSpaceInventoryStatus {
  roomSpaceInventoryStatusID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  comments?: string;
  active?: boolean;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomSpaceInventoryStatus");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomSpaceInventoryStatusID != null) this.roomSpaceInventoryStatusID = parseInt(data.RoomSpaceInventoryStatusID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.Active != null) this.active = data.Active === 'true';
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomSpaceInventoryStatus | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomSpaceInventoryStatus/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomSpaceInventoryStatus with id ${id}`);
    } else {
      return new RoomSpaceInventoryStatus(await response.text());
    }
}

}
