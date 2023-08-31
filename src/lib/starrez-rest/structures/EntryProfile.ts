// Generated from XML description of EntryProfile

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryProfile {
  entryProfileID?: number;
  entryID?: number;
  profileTypeID?: number;
  profileItemID?: number;
  profileWeightEnum?: unknown;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryProfile");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryProfileID != null) this.entryProfileID = (data.EntryProfileID != null ? parseInt(data.EntryProfileID, 10) : data.EntryProfileID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.ProfileTypeID != null) this.profileTypeID = (data.ProfileTypeID != null ? parseInt(data.ProfileTypeID, 10) : data.ProfileTypeID);
    if (data.ProfileItemID != null) this.profileItemID = (data.ProfileItemID != null ? parseInt(data.ProfileItemID, 10) : data.ProfileItemID);
    if (data.ProfileWeightEnum != null) this.profileWeightEnum = data.ProfileWeightEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryProfile | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryProfile/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryProfile with id ${id}`);
    } else {
      return new EntryProfile(await response.text());
    }
  }
}

EntryProfile satisfies StarRezStructureStatic<EntryProfile>
