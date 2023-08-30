// Generated from XML description of EntryApplicationPreference

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryApplicationPreference {
  entryApplicationPreferenceID?: number;
  entryApplicationID?: number;
  preferenceID?: number;
  preference?: number;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryApplicationPreference");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryApplicationPreferenceID != null) this.entryApplicationPreferenceID = parseInt(data.EntryApplicationPreferenceID, 10);
    if (data.EntryApplicationID != null) this.entryApplicationID = parseInt(data.EntryApplicationID, 10);
    if (data.PreferenceID != null) this.preferenceID = parseInt(data.PreferenceID, 10);
    if (data.Preference != null) this.preference = parseInt(data.Preference, 10);
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryApplicationPreference | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryApplicationPreference/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryApplicationPreference with id ${id}`);
    } else {
      return new EntryApplicationPreference(await response.text());
    }
  }
}

EntryApplicationPreference satisfies StarRezStructureStatic<EntryApplicationPreference>
