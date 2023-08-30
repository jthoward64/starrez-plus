// Generated from XML description of EntryMealTag

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.EntryMealTagID != null) this.entryMealTagID = parseInt(data.EntryMealTagID, 10);
    if (data.EntryMealID != null) this.entryMealID = parseInt(data.EntryMealID, 10);
    if (data.TagType != null) this.tagType = data.TagType;
    if (data.Tag != null) this.tag = data.Tag;
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
