// Generated from XML description of WebMenuClassification

import { starRezXmlToJson } from "../parsing.js";
import type { StarRezRestConfig } from "../StarRezRestConfig.js";
import type { StarRezStructureStatic } from "../StructureStatic.js";

export class WebMenuClassification {
  webMenuClassificationID?: number;
  webMenuID?: number;
  termTypeID?: number;
  classificationID?: number;
  securityUserID?: number;
  dateCreated?: Date;
  dateModified?: Date;

  constructor(xml: string | Node) {
    const data = starRezXmlToJson(xml, "WebMenuClassification");

    if (!data) {
      throw new Error('Invalid XML');
    }

    if (data.WebMenuClassificationID != null) this.webMenuClassificationID = parseInt(data.WebMenuClassificationID, 10);
    if (data.WebMenuID != null) this.webMenuID = parseInt(data.WebMenuID, 10);
    if (data.TermTypeID != null) this.termTypeID = parseInt(data.TermTypeID, 10);
    if (data.ClassificationID != null) this.classificationID = parseInt(data.ClassificationID, 10);
    if (data.SecurityUserID != null) this.securityUserID = parseInt(data.SecurityUserID, 10);
    if (data.DateCreated != null) this.dateCreated = new Date(data.DateCreated);
    if (data.DateModified != null) this.dateModified = new Date(data.DateModified);

    const customFields = Object.entries(data).filter(([key, value]) => key.startsWith('Custom') && Boolean(value));
    if (customFields.length > 0) {
      console.warn('Custom fields populated:', customFields);
    }
  }

  static async fetchById(id: number, starRezConfig: StarRezRestConfig): Promise<WebMenuClassification | null> {
    const fetchUrl = new URL(starRezConfig.baseUrl);
    fetchUrl.pathname = `${fetchUrl.pathname}/services/select/WebMenuClassification/${id}`;
    const response = await fetch(fetchUrl.toString(), {
      headers: {
        ...starRezConfig.fetchHeaders,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch WebMenuClassification with id ${id}`);
    } else {
      return new WebMenuClassification(await response.text());
    }
  }
}

WebMenuClassification satisfies StarRezStructureStatic<WebMenuClassification>
