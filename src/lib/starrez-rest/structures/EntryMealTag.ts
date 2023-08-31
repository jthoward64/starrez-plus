// Generated from XML description of EntryMealTag

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryMealTag {
  entryMealTagID?: number;
  entryMealID?: number;
  tagType?: string;
  tag?: string;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryMealTag");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryMealTagID != null) this.entryMealTagID = (data.EntryMealTagID != null ? parseInt(data.EntryMealTagID, 10) : data.EntryMealTagID);
    if (data.EntryMealID != null) this.entryMealID = (data.EntryMealID != null ? parseInt(data.EntryMealID, 10) : data.EntryMealID);
    if (data.TagType != null) this.tagType = data.TagType;
    if (data.Tag != null) this.tag = data.Tag;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<EntryMealTag | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryMealTag/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryMealTag with id ${id}`);
    } else {
      return new EntryMealTag(await response.text());
    }
  }
}

EntryMealTag satisfies StarRezStructureStatic<EntryMealTag>
