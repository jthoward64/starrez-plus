// Generated from XML description of RoomConfigurationTermType

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class RoomConfigurationTermType {
  roomConfigurationTermTypeID?: number;
  roomConfigurationID?: number;
  termTypeID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomConfigurationTermType");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomConfigurationTermTypeID != null) this.roomConfigurationTermTypeID = (data.RoomConfigurationTermTypeID != null ? parseInt(data.RoomConfigurationTermTypeID, 10) : data.RoomConfigurationTermTypeID);
    if (data.RoomConfigurationID != null) this.roomConfigurationID = (data.RoomConfigurationID != null ? parseInt(data.RoomConfigurationID, 10) : data.RoomConfigurationID);
    if (data.TermTypeID != null) this.termTypeID = (data.TermTypeID != null ? parseInt(data.TermTypeID, 10) : data.TermTypeID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomConfigurationTermType | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomConfigurationTermType/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomConfigurationTermType with id ${id}`);
    } else {
      return new RoomConfigurationTermType(await response.text());
    }
  }
}

RoomConfigurationTermType satisfies StarRezStructureStatic<RoomConfigurationTermType>
