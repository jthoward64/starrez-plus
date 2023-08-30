// Generated from XML description of CategoryLevel

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

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

    if (data.CategoryID != null) this.categoryID = (data.CategoryID != null ? parseInt(data.CategoryID, 10) : data.CategoryID);
    if (data.Level1 != null) this.level1 = data.Level1;
    if (data.Level1ID != null) this.level1ID = (data.Level1ID != null ? parseInt(data.Level1ID, 10) : data.Level1ID);
    if (data.Level2 != null) this.level2 = data.Level2;
    if (data.Level2ID != null) this.level2ID = (data.Level2ID != null ? parseInt(data.Level2ID, 10) : data.Level2ID);
    if (data.Level3 != null) this.level3 = data.Level3;
    if (data.Level3ID != null) this.level3ID = (data.Level3ID != null ? parseInt(data.Level3ID, 10) : data.Level3ID);
    if (data.Level4 != null) this.level4 = data.Level4;
    if (data.Level4ID != null) this.level4ID = (data.Level4ID != null ? parseInt(data.Level4ID, 10) : data.Level4ID);
    if (data.DateModified != null) this.dateModified = (data.DateModified != null ? new Date(data.DateModified) : data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<CategoryLevel | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/CategoryLevel/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch CategoryLevel with id ${id}`);
    } else {
      return new CategoryLevel(await response.text());
    }
  }
}

CategoryLevel satisfies StarRezStructureStatic<CategoryLevel>
