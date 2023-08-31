// Generated from XML description of EntryGroup

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class EntryGroup {
  entryGroupID?: number;
  entryID?: number;
  groupID?: number;
  securityUserID?: number;
  createdBy_SecurityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "EntryGroup");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.EntryGroupID != null) this.entryGroupID = (data.EntryGroupID != null ? parseInt(data.EntryGroupID, 10) : data.EntryGroupID);
    if (data.EntryID != null) this.entryID = (data.EntryID != null ? parseInt(data.EntryID, 10) : data.EntryID);
    if (data.GroupID != null) this.groupID = (data.GroupID != null ? parseInt(data.GroupID, 10) : data.GroupID);
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.CreatedBy_SecurityUserID != null) this.createdBy_SecurityUserID = (data.CreatedBy_SecurityUserID != null ? parseInt(data.CreatedBy_SecurityUserID, 10) : data.CreatedBy_SecurityUserID);
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a EntryGroup by its ID or by exact match on other fields.
   * @param param Either the ID of the EntryGroup to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single EntryGroup object or null (if id) or an array of EntryGroup objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<EntryGroup | null>;
  static async select(param: Partial<Record<keyof EntryGroup, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryGroup[]>;
  static async select(param: number | Partial<Record<keyof EntryGroup, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<EntryGroup | EntryGroup[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryGroup/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/EntryGroup`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch EntryGroup with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new EntryGroup(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new EntryGroup(entry));
      }
    }
  }
}

EntryGroup satisfies StarRezStructureStatic<EntryGroup>
