// Generated from XML description of RoommateGroupMandatoryProfile

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.RoommateGroupMandatoryProfileID != null) this.roommateGroupMandatoryProfileID = (data.RoommateGroupMandatoryProfileID != null ? parseInt(data.RoommateGroupMandatoryProfileID, 10) : data.RoommateGroupMandatoryProfileID);
    if (data.RoommateGroupID != null) this.roommateGroupID = (data.RoommateGroupID != null ? parseInt(data.RoommateGroupID, 10) : data.RoommateGroupID);
    if (data.ProfileItemID != null) this.profileItemID = (data.ProfileItemID != null ? parseInt(data.ProfileItemID, 10) : data.ProfileItemID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

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

RoommateGroupMandatoryProfile satisfies StarRezStructureStatic<RoommateGroupMandatoryProfile>
