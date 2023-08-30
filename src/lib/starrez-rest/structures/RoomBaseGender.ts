// Generated from XML description of RoomBaseGender

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class RoomBaseGender {
  roomBaseGenderID?: number;
  dateStart?: Date | null;
  dateEnd?: Date | null;
  roomBaseID?: number;
  genderTypeEnum?: unknown;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoomBaseGender");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoomBaseGenderID != null) this.roomBaseGenderID = parseInt(data.RoomBaseGenderID, 10);
    if (data.DateStart != null) this.dateStart = new Date(data.DateStart);
    if (data.DateEnd != null) this.dateEnd = new Date(data.DateEnd);
    if (data.RoomBaseID != null) this.roomBaseID = parseInt(data.RoomBaseID, 10);
    if (data.GenderTypeEnum != null) this.genderTypeEnum = data.GenderTypeEnum;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoomBaseGender | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoomBaseGender/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoomBaseGender with id ${id}`);
    } else {
      return new RoomBaseGender(await response.text());
    }
}

}
