// Generated from XML description of RoomRate

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomRate {
  roomRateID?: number;
  recordTypeEnum?: unknown;
  description?: string;
  automaticSessionRollover?: boolean;
  comments?: string;
  securityUserID?: number;
  categoryID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomRate");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomRateID != null) this.roomRateID = (data.RoomRateID != null ? parseInt(data.RoomRateID, 10) : data.RoomRateID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.Description != null) this.description = data.Description;
    if (data.AutomaticSessionRollover != null) this.automaticSessionRollover = data.AutomaticSessionRollover === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomRate | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomRate/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomRate with id ${id}`);
    } else {
      return new RoomRate(await response.text());
    }
  }
}

RoomRate satisfies StarRezStructureStatic<RoomRate>
