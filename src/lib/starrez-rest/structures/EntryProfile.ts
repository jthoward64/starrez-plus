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

    if (data.EntryProfileID != null) this.entryProfileID = parseInt(data.EntryProfileID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.ProfileTypeID != null) this.profileTypeID = parseInt(data.ProfileTypeID, 10);
    if (data.ProfileItemID != null) this.profileItemID = parseInt(data.ProfileItemID, 10);
    if (data.ProfileWeightEnum != null) this.profileWeightEnum = data.ProfileWeightEnum;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryProfile | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryProfile/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryProfile with id ${id}`);
    } else {
      return new EntryProfile(await response.text());
    }
  }
}

EntryProfile satisfies StarRezStructureStatic<EntryProfile>
