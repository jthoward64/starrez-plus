// Generated from XML description of RoomTypeCapacity

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.RoomTypeCapacityID != null) this.roomTypeCapacityID = (data.RoomTypeCapacityID != null ? parseInt(data.RoomTypeCapacityID, 10) : data.RoomTypeCapacityID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.RoomTypeID != null) this.roomTypeID = (data.RoomTypeID != null ? parseInt(data.RoomTypeID, 10) : data.RoomTypeID);
    if (data.Description != null) this.description = data.Description;
    if (data.Capacity != null) this.capacity = (data.Capacity != null ? parseInt(data.Capacity, 10) : data.Capacity);
    if (data.DateStart != null) this.dateStart = (data.DateStart != null ? new Date(data.DateStart) : data.DateStart);
    if (data.DateEnd != null) this.dateEnd = (data.DateEnd != null ? new Date(data.DateEnd) : data.DateEnd);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomTypeCapacity | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomTypeCapacity/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomTypeCapacity with id ${id}`);
    } else {
      return new RoomTypeCapacity(await response.text());
    }
  }
}

RoomTypeCapacity satisfies StarRezStructureStatic<RoomTypeCapacity>
