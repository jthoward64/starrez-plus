// Generated from XML description of GroupContactEntry

import { starRezXmlToJson } from "../parsing.js";
import { StarRezRestConfig } from "../StarRezRestConfig.js";

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

    if (data.GroupContactEntryID != null) this.groupContactEntryID = parseInt(data.GroupContactEntryID, 10);
    if (data.GroupID != null) this.groupID = parseInt(data.GroupID, 10);
    if (data.EntryID != null) this.entryID = parseInt(data.EntryID, 10);
    if (data.Responsibilities != null) this.responsibilities = data.Responsibilities;
    if (data.Comments != null) this.comments = data.Comments;
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<GroupContactEntry | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GroupContactEntry/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch GroupContactEntry with id ${id}`);
    } else {
      return new GroupContactEntry(await response.text());
    }
}

}
