// Generated from XML description of GroupContactEntry

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class GroupContactEntry {
  groupContactEntryID?: number;
  groupID?: number;
  entryID?: number;
  responsibilities?: string;
  comments?: string;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "GroupContactEntry");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.GroupContactEntryID != null) this.groupContactEntryID = (data.GroupContactEntryID != null ? parseInt(data.GroupContactEntryID, 10) : data.GroupContactEntryID);
    if (data.GroupID != null) this.groupID = (data.GroupID != null ? parseInt(data.GroupID, 10) : data.GroupID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.Responsibilities != null) this.responsibilities = data.Responsibilities;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<GroupContactEntry | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GroupContactEntry/${id}`;
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch GroupContactEntry with id ${id}`);
    } else {
      return new GroupContactEntry(await response.text());
    }
  }
}

GroupContactEntry satisfies StarRezStructureStatic<GroupContactEntry>
