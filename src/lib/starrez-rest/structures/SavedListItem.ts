// Generated from XML description of SavedListItem

import { starRezXmlToJson } from "../parsing.js";

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

    if (data.SavedListItemID != null) this.savedListItemID = parseInt(data.SavedListItemID, 10);
    if (data.SavedListID != null) this.savedListID = parseInt(data.SavedListID, 10);
    if (data.ItemID != null) this.itemID = parseInt(data.ItemID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
