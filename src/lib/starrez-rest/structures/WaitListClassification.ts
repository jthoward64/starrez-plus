// Generated from XML description of WaitListClassification

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WaitListClassification {
  waitListClassificationID?: number;
  waitListID?: number;
  classificationID?: number;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WaitListClassification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WaitListClassificationID != null) this.waitListClassificationID = parseInt(data.WaitListClassificationID, 10);
    if (data.WaitListID != null) this.waitListID = parseInt(data.WaitListID, 10);
    if (data.ClassificationID != null) this.classificationID = parseInt(data.ClassificationID, 10);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WaitListClassification | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WaitListClassification/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WaitListClassification with id ${id}`);
    } else {
      return new WaitListClassification(await response.text());
    }
  }
}

WaitListClassification satisfies StarRezStructureStatic<WaitListClassification>
