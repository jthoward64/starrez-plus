// Generated from XML description of CategoryLevel

import { starRezXmlToJson } from "../parsing.js";

export class CategoryLevel {
  categoryID?: number;
  level1?: string;
  level1ID?: number;
  level2?: string;
  level2ID?: number;
  level3?: string;
  level3ID?: number;
  level4?: string;
  level4ID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "CategoryLevel");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.CategoryID != null) this.categoryID = parseInt(data.CategoryID, 10);
    if (data.Level1 != null) this.level1 = data.Level1;
    if (data.Level1ID != null) this.level1ID = parseInt(data.Level1ID, 10);
    if (data.Level2 != null) this.level2 = data.Level2;
    if (data.Level2ID != null) this.level2ID = parseInt(data.Level2ID, 10);
    if (data.Level3 != null) this.level3 = data.Level3;
    if (data.Level3ID != null) this.level3ID = parseInt(data.Level3ID, 10);
    if (data.Level4 != null) this.level4 = data.Level4;
    if (data.Level4ID != null) this.level4ID = parseInt(data.Level4ID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

  const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }
}
