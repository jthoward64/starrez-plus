// Generated from XML description of GroupContactEntry

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
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

  /**
   * Fetches a GroupContactEntry by its ID or by exact match on other fields.
   * @param param Either the ID of the GroupContactEntry to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single GroupContactEntry object or null (if id) or an array of GroupContactEntry objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<GroupContactEntry | null>;
  static async select(param: Partial<Record<keyof GroupContactEntry, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GroupContactEntry[]>;
  static async select(param: number | Partial<Record<keyof GroupContactEntry, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<GroupContactEntry | GroupContactEntry[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GroupContactEntry/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/GroupContactEntry`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch GroupContactEntry with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new GroupContactEntry(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new GroupContactEntry(entry));
      }
    }
  }
}

GroupContactEntry satisfies StarRezStructureStatic<GroupContactEntry>
