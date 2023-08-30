// Generated from XML description of SavedListItem

import { starRezXmlToJson } from "../parsing.js";
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

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<SavedListItem | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/SavedListItem/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch SavedListItem with id ${id}`);
    } else {
      return new SavedListItem(await response.text());
    }
  }
}

SavedListItem satisfies StarRezStructureStatic<SavedListItem>
