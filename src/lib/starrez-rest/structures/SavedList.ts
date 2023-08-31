// Generated from XML description of SavedList

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class SavedList {
  savedListID?: number;
  description?: string;
  parentID?: number;
  folder?: boolean;
  comments?: string;
  tableName?: string;
  securityUserID?: number;
  recordTypeEnum?: unknown;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "SavedList");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.SavedListID != null) this.savedListID = (data.SavedListID != null ? parseInt(data.SavedListID, 10) : data.SavedListID);
    if (data.Description != null) this.description = data.Description;
    if (data.ParentID != null) this.parentID = (data.ParentID != null ? parseInt(data.ParentID, 10) : data.ParentID);
    if (data.Folder != null) this.folder = data.Folder === 'true';
    if (data.Comments != null) this.comments = data.Comments;
    if (data.TableName != null) this.tableName = data.TableName;
    if (data.SecurityUserID != null) this.securityUserID = (data.SecurityUserID != null ? parseInt(data.SecurityUserID, 10) : data.SecurityUserID);
    if (data.RecordTypeEnum != null) this.recordTypeEnum = data.RecordTypeEnum;
    if (data.DateCreated != null) this.dateCreated = (data.DateCreated != null ? new Date(data.DateCreated) : data.DateCreated);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a SavedList by its ID or by exact match on other fields.
   * @param param Either the ID of the SavedList to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single SavedList object or null (if id) or an array of SavedList objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<SavedList | null>;
  static async select(param: Partial<Record<keyof SavedList, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SavedList[]>;
  static async select(param: number | Partial<Record<keyof SavedList, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SavedList | SavedList[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SavedList/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SavedList`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch SavedList with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new SavedList(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new SavedList(entry));
      }
    }
  }
}

SavedList satisfies StarRezStructureStatic<SavedList>
