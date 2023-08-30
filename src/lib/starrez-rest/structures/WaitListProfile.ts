// Generated from XML description of WaitListProfile

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class WaitListProfile {
  waitListProfileID?: number;
  waitListID?: number;
  profileItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WaitListProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WaitListProfileID != null) this.waitListProfileID = parseInt(data.WaitListProfileID, 10);
    if (data.WaitListID != null) this.waitListID = parseInt(data.WaitListID, 10);
    if (data.ProfileItemID != null) this.profileItemID = parseInt(data.ProfileItemID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WaitListProfile | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitListProfile/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WaitListProfile with id ${id}`);
    } else {
      return new WaitListProfile(await response.text());
    }
}

}
