// Generated from XML description of RoomTypeCapacity

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class RoomTypeCapacity {
  roomTypeCapacityID?: number;
  recordTypeEnum?: unknown;
  roomTypeID?: number;
  description?: string;
  capacity?: number;
  dateStart?: Date;
  dateEnd?: Date;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomTypeCapacity");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomTypeCapacityID != null) this.roomTypeCapacityID = parseInt(data.RoomTypeCapacityID, 10);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.RoomTypeID != null) this.roomTypeID = parseInt(data.RoomTypeID, 10);
    if (data.Description != null) this.description = data.Description;
    if (data.Capacity != null) this.capacity = parseInt(data.Capacity, 10);
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomTypeCapacity | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomTypeCapacity/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomTypeCapacity with id ${id}`);
    } else {
      return new RoomTypeCapacity(await response.text());
    }
}

}
