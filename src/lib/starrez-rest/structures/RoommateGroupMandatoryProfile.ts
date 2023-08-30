// Generated from XML description of RoommateGroupMandatoryProfile

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

export class RoommateGroupMandatoryProfile {
  roommateGroupMandatoryProfileID?: number;
  roommateGroupID?: number;
  profileItemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "RoommateGroupMandatoryProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.RoommateGroupMandatoryProfileID != null) this.roommateGroupMandatoryProfileID = parseInt(data.RoommateGroupMandatoryProfileID, 10);
    if (data.RoommateGroupID != null) this.roommateGroupID = parseInt(data.RoommateGroupID, 10);
    if (data.ProfileItemID != null) this.profileItemID = parseInt(data.ProfileItemID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<RoommateGroupMandatoryProfile | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/RoommateGroupMandatoryProfile/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RoommateGroupMandatoryProfile with id ${id}`);
    } else {
      return new RoommateGroupMandatoryProfile(await response.text());
    }
}

}
