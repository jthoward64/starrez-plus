// Generated from XML description of SavedListItem

import { starRezXmlToJson } from "../parsing.js";
import { doStarRezRequest } from "../StarRezRequest.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class SavedListItem {
  savedListItemID?: number;
  savedListID?: number;
  itemID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "SavedListItem");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.SavedListItemID != null) this.savedListItemID = (data.SavedListItemID != null ? parseInt(data.SavedListItemID, 10) : data.SavedListItemID);
    if (data.SavedListID != null) this.savedListID = (data.SavedListID != null ? parseInt(data.SavedListID, 10) : data.SavedListID);
    if (data.ItemID != null) this.itemID = (data.ItemID != null ? parseInt(data.ItemID, 10) : data.ItemID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  /**
   * Fetches a SavedListItem by its ID or by exact match on other fields.
   * @param param Either the ID of the SavedListItem to fetch, or an object of key-value pairs to match against.
   * @param starRezConfig The configuration to use for the request.
   * @returns A promise that resolves to a single SavedListItem object or null (if id) or an array of SavedListItem objects (if other fields).
   */
  // overrides
  static async select(param: number, starRezConfig: StarRezRestConfig): Promise<SavedListItem | null>;
  static async select(param: Partial<Record<keyof SavedListItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SavedListItem[]>;
  static async select(param: number | Partial<Record<keyof SavedListItem, {toString: () => string}>>, starRezConfig: StarRezRestConfig): Promise<SavedListItem | SavedListItem[] | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    if (typeof param === 'number') {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SavedListItem/${param}`;
    } else {
      fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SavedListItem`;
      Object.entries(param).forEach(([key, value]) => {
        fetchUrl.searchParams.append(key, value.toString());
      });
    }
    const response = await doStarRezRequest(fetchUrl, starRezConfig);

    if (!response.ok) {
      throw new Error(`Failed to fetch SavedListItem with param ${JSON.stringify(param)}`);
    } else {
      if (typeof param === 'number') {
        return new SavedListItem(await response.text());
      } else {
        const xml = await response.text();
        const xmlParser = new DOMParser();
        const xmlDoc = xmlParser.parseFromString(xml, 'text/xml');
        const entries = Array.from(xmlDoc.getElementsByTagName('entry'));
        return entries.map(entry => new SavedListItem(entry));
      }
    }
  }
}

SavedListItem satisfies StarRezStructureStatic<SavedListItem>
